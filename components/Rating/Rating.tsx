'use client';
import React, { useEffect, useState, KeyboardEvent, forwardRef } from 'react';
import { RatingProps } from './Rating.props';
import StarIcon from './StarIcon';
import styles from './Rating.module.css';
import cn from 'classnames';

export const Rating = forwardRef<HTMLDivElement, RatingProps>(
	(
		{ isEditable = false, rating, setRating, error, className, ...props },
		ref
	): JSX.Element => {
		const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
			new Array(5).fill(null).map((i) => i)
		);

		useEffect(() => {
			constructRating(rating);
		}, [rating]);

		const constructRating = (currentRating: number) => {
			const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
				return (
					<div
						className={cn(styles.star, {
							[styles.filled]: i < currentRating,
							[styles.editable]: isEditable
						})}
						onMouseEnter={() => {
							changeDisplay(i + 1);
						}}
						onMouseLeave={() => {
							changeDisplay(rating);
						}}
						onClick={() => onClick(i + 1)}
					>
						<StarIcon
							tabIndex={isEditable ? 0 : -1}
							onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
								isEditable && handleSpace(i + 1, e)
							}
						/>
					</div>
				);
			});
			setRatingArray(updatedArray);
		};

		const changeDisplay = (i: number) => {
			if (!isEditable) {
				return;
			}
			constructRating(i);
		};

		const onClick = (i: number) => {
			if (!isEditable || !setRating) {
				return;
			}
			setRating(i);
		};

		const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
			if (e.code != 'Space' || !setRating) {
				return;
			}
			setRating(i);
		};

		return (
			<div
				className={cn(styles.ratingWrapper, { [styles.error]: error })}
				style={{ display: 'flex' }}
				{...props}
			>
				{ratingArray.map((r, i) => (
					<span key={i}>{r}</span>
				))}
				{error && <span className={styles.errorMessage}>{error.message}</span>}
			</div>
		);
	}
);
