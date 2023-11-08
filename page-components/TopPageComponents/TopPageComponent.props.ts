import { FirstLevelMenuItem } from '@/interfaces/menu.interface';
import { TopPageModel } from '@/interfaces/page.interface';
import { ProductModel } from '@/interfaces/product.interface';
import { ReactNode } from 'react';

export interface TopPageComponentProps {
	params: { first: string; second: string };
	page: TopPageModel;
	products: ProductModel[];
	firstCategory: FirstLevelMenuItem;
}
