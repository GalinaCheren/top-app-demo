import { PageItem } from './menu.interface';

export enum TopLevelCategory {
	Courser,
	Books,
	Products,
	Services
}

// export interface TopPageModel {
// 	title: string;
// 	pages: PageItem[];
// }
export interface HhData {
	count: number;
	juniorSalary: number;
	middleSalary: number;
	seniorSalary: number;
	updatedAt: string;
	_id: string;
}
interface Blog {
	h1: string;
	metaTitle: string;
	metaDescription: string;
	views: number;
	_id: string;
}
interface Qa {
	question: string;
	answer: string;
}
interface Sravnikus {
	metaTitle: string;
	metaDescription: string;
	seoText: string;
	qas: Qa[];
	_id: string;
}
export interface TopPageAdvantages {
	title: string;
	description: string;
	_id: string;
}
export interface TopPageModel {
	_id: string;
	tags: string[];
	firstCategory: TopLevelCategory;
	secondCategory: string;
	alias: string;
	title: string;
	category: string;
	tagsTitle: string;
	metaTitle: string;
	metaDescription: string;
	advantages?: TopPageAdvantages[];
	createdAt: string;
	updatedAt: string;
	__v: number;
	hh?: HhData;
	qas: any[];
	addresses: any[];
	categoryOn: string;
	blog: Blog;
	sravnikus: Sravnikus;
	learningclub: Sravnikus;
	seoText?: string;
}
