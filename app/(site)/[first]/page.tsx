import { firstLevelMenu } from '@/helpers/helpers';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Page'
};

export default async function PageProducts({
	params
}: {
	params: { first: string };
}) {
	const firstCategory = firstLevelMenu.find(
		(menuItem) => menuItem.route === params.first
	);
	if (!firstCategory) {
		notFound();
	}
	return <div>{params.first} ==&gt;</div>;
}
