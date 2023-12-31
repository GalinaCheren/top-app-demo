'use client';
import React, { ForwardedRef, forwardRef, useRef, useState } from 'react';
import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import cn from 'classnames';
import { Button, Card, Divider, Rating, ReviewForm, Tag } from '..';
import { decOfNum, priceUa } from '@/helpers/helpers';
import Image from 'next/image';
import { Review } from '../Review/Review';
import { motion } from 'framer-motion';

export const Product = motion(
	forwardRef(
		(
			{ product, className, ...props }: ProductProps,
			ref: ForwardedRef<HTMLDivElement>
		): JSX.Element => {
			const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

			const reviewRef = useRef<HTMLDivElement>(null);

			const variants = {
				visible: {
					opacity: 1,
					height: 'auto'
				},
				hidden: { opacity: 0, height: 0 }
			};

			const scrollToReview = () => {
				setIsReviewOpened(true);
				reviewRef.current?.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
				reviewRef.current?.focus();
			};

			return (
				<div className={className} {...props} ref={ref}>
					<Card className={styles.product}>
						<div className={styles.logo}>
							<img
								src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
								alt={product.title}
								width={70}
								height={70}
							/>
						</div>
						<div className={styles.title}>{product.title}</div>
						<div className={styles.price}>
							{priceUa(product.price)}
							{product.oldPrice && (
								<Tag color="green" className={styles.oldPrice}>
									{priceUa(product.price - product.oldPrice)}
								</Tag>
							)}
						</div>
						<div className={styles.credit}>
							{priceUa(product.credit)}/
							<span className={styles.month}>month</span>
						</div>
						<div className={styles.rating}>
							<Rating rating={product.reviewAvg ?? product.initialRating} />
						</div>
						<div className={styles.tags}>
							{product.categories.map((c) => (
								<Tag color="ghost" key={c}>
									{c}
								</Tag>
							))}
						</div>
						<div className={styles.priceTitle}>price</div>
						<div className={styles.creditTitle}>credit</div>
						<div className={styles.rateTitle}>
							<a href="#ref" onClick={scrollToReview}>
								{product.reviewCount}
								{decOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
							</a>
						</div>

						<Divider className={styles.hr} />

						<div className={styles.description}>{product.description} </div>
						<div className={styles.feature}>
							{product.characteristics.map((c) => (
								<div className={styles.characteristics} key={c.name}>
									<span className={styles.characteristicsName}>{c.name}</span>
									<span className={styles.characteristicsDots}></span>
									<span className={styles.characteristicsValue}>{c.value}</span>
								</div>
							))}
						</div>
						<div className={styles.advBlock}>
							{product.advantages && (
								<div className={styles.advantages}>
									<div className={styles.advTitle}>Advantages</div>
									<div> {product.advantages}</div>
								</div>
							)}
							{product.disAdvantages && (
								<div className={styles.disAdvantages}>
									<div className={styles.advTitle}>DisAdvantages</div>
									<div> {product.disAdvantages}</div>
								</div>
							)}
						</div>
						<Divider className={cn(styles.hr, styles.hr2)} />

						<div className={styles.actions}>
							<Button appearance="primary">Know more...</Button>
							<Button
								appearance="ghost"
								arrow={isReviewOpened ? 'down' : 'right'}
								className={styles.reviewButton}
								onClick={() => setIsReviewOpened(!isReviewOpened)}
							>
								Read reviews...
							</Button>
						</div>
					</Card>

					<motion.div
						className={styles.reviewsAnimation}
						variants={variants}
						initial="hidden"
						animate={isReviewOpened ? 'visible' : 'hidden'}
					>
						<Card
							color="blue"
							className={cn(styles.reviews)}
							ref={reviewRef}
							tabIndex={0}
						>
							{product.reviews.map((r) => (
								<div key={r._id}>
									<Review review={r} />
									<Divider className={styles.hr} />
								</div>
							))}
							<ReviewForm productId={product._id} />
						</Card>
					</motion.div>
				</div>
			);
		}
	)
);
