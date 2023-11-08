export interface ProductCharacteristic {
	value: string;
	name: string;
}
interface Blog {
	text: string;
	bigImage?: string;
	_id: string;
}
interface AdditionalMeta {
	metaTitle: string;
	metaDescription: string;
	_id: string;
}
export interface ReviewModel {
	_id: string;
	name: string;
	title: string;
	description: string;
	rating: number;
	productId: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

export interface ProductModel {
	_id: string;
	categories: string[];
	tags: string[];
	title: string;
	link: string;
	image: string;
	initialRating: number;
	characteristics: ProductCharacteristic[];
	price: number;
	oldPrice: number;
	credit: number;
	description: string;
	advantages: string;
	disAdvantages?: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
	html: string;
	blog: Blog;
	additionalMeta?: AdditionalMeta;
	companyId: string;
	clicks: number;
	reviews: ReviewModel[];
	reviewCount: number;
	reviewAvg: number;
}
