import CoursesIcon from './icons/CoursesIcon';
import BooksIcon from './icons/BooksIcon';
import ProductsIcon from './icons/ProductsIcon';
import ServicesIcon from './icons/ServicesIcon';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { FirstLevelMenuItem } from '@/interfaces/menu.interface';
import exp from 'constants';

export const firstLevelMenu: FirstLevelMenuItem[] = [
	{
		route: 'courses',
		name: 'Course',
		icon: <CoursesIcon />,
		id: TopLevelCategory.Courser
	},
	{
		route: 'books',
		name: 'Book',
		icon: <BooksIcon />,
		id: TopLevelCategory.Books
	},
	{
		route: 'products',
		name: 'Product',
		icon: <ProductsIcon />,
		id: TopLevelCategory.Products
	},
	{
		route: 'service',
		name: 'Service',
		icon: <ServicesIcon />,
		id: TopLevelCategory.Services
	}
];

export const priceUa = (price: number): string =>
	price
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
		.concat(' ₴');

export const decOfNum = (
	number: number,
	titles: [string, string, string]
): string => {
	const cases = [2, 0, 1, 1, 1, 2];
	return titles[
		number % 100 > 4 && number % 100 < 20
			? 2
			: cases[number % 10 < 5 ? number % 10 : 5]
	];
};
