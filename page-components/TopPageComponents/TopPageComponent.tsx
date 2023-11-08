'use client';

import React, { useReducer } from 'react';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { HhData, Advantages, Htag, Tag, P, Sort, Product } from '@/components';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { SortEnum } from '@/components/Sort/Sort.props';
import { sortReducer } from './sort.reducer';

export const TopPageComponent = ({
	params,
	page,
	products,
	firstCategory
}: TopPageComponentProps): JSX.Element => {
	const [{ products: sortedProducts, sort }, dispathSort] = useReducer(
		sortReducer,
		{
			products,
			sort: SortEnum.Rating
		}
	);

	const setSort = (sort: SortEnum) => {
		dispathSort({ type: sort });
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag="h1">{page.title}</Htag>
				{products && (
					<Tag color="grey" size="m">
						{products.length}
					</Tag>
				)}
				<Sort sort={sort} setSort={setSort} />
			</div>
			<div>
				{sortedProducts &&
					sortedProducts.map((p) => <Product layout key={p._id} product={p} />)}
			</div>
			<div className={styles.hhTitle}>
				<Htag tag="h2">Вакансії-{page.category}</Htag>

				<Tag color="red" size="m">
					hh.ua
				</Tag>
			</div>
			{firstCategory.id == TopLevelCategory.Courser && page.hh && (
				<HhData {...page.hh} />
			)}
			{page.advantages.length > 0 && (
				<>
					<Htag tag="h2">Переваги</Htag>
					<Advantages advantages={page.advantages} />
				</>
			)}
			{page.seoText && (
				<div
					className={styles.seo}
					dangerouslySetInnerHTML={{ __html: page.seoText }}
				/>
			)}
			<Htag tag="h2">Отримувані навички</Htag>
			{page.tags.map((t) => (
				<Tag key={t} color="primary">
					{t}
				</Tag>
			))}
		</div>
	);
};
