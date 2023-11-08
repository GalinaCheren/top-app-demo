import { getMenu } from '@/api/getMenu';
import { getPage } from '@/api/getPage';
import { getProduct } from '@/api/getProduct';

import { firstLevelMenu } from '@/helpers/helpers';
import { TopPageComponent } from '@/page-components';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
	params
}: {
	params: { alias: string };
}): Promise<Metadata> {
	const page = await getPage(params);
	return { title: page.metaTitle, description: page.metaDescription };
}

export default async function PageProducts({
	params
}: {
	params: { first: string; second: string };
}) {
	const firstCategory = firstLevelMenu.find(
		(menuItem) => menuItem.route === params.first
	);
	if (!firstCategory) {
		notFound();
	}
	const menu = await getMenu(firstCategory.id);

	if (
		menu
			.flatMap((item) => item.pages)
			.every((item) => item.alias !== params.second)
	) {
		notFound();
	}
	// const page = menu
	// 	.flatMap((item) => item.pages)
	// 	.find((page) => page.alias == params.second);
	// const products = menu.find((secondCategory) =>
	// 	secondCategory.pages.some((item) => item.alias === params.second)
	// );
	const page = await getPage(params);
	const products = await getProduct(page.category);

	return (
		<TopPageComponent
			params={params}
			page={page!}
			products={products}
			firstCategory={firstCategory}
		/>
	);
}
