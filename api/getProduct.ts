import { API } from '@/app/api';
import { ProductModel } from '@/interfaces/product.interface';

export async function getProduct(category: string): Promise<ProductModel[]> {
	try {
		const res = await fetch(API.product.find, {
			headers: new Headers({ 'Content-Type': 'application/json' }),
			method: 'POST',
			body: JSON.stringify({ category, limit: 10 })
		});
		return res.json();
	} catch (error) {
		return [];
	}
}
