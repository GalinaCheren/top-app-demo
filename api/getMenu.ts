import { API } from '@/app/api';
import { MenuItem } from '@/interfaces/menu.interface';

export async function getMenu(firstCategory: number): Promise<MenuItem[]> {
	// const res = await new Promise((resolve) =>
	// 	setTimeout(() => resolve(menuResult), 2000)
	// );
	// console.log(res);
	try {
		const res = await fetch(API.topPage.find, {
			headers: new Headers({ 'Content-Type': 'application/json' }),
			method: 'POST',
			body: JSON.stringify({ firstCategory })
		});
		return res.json();
	} catch (error) {
		return [];
	}
}
