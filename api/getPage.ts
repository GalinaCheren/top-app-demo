import { API } from '@/app/api';
import { TopPageModel } from '@/interfaces/page.interface';

export async function getPage(params: any): Promise<TopPageModel> {
	try {
		const res = await fetch(API.topPage.byAlias + params.second, {
			headers: new Headers({ 'Content-Type': 'application/json' })
		});
		return res.json();
	} catch (error) {
		return null;
	}
}
