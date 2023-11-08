'use client';

import React, { useState } from 'react';
import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Button, TextArea } from '..';
import CloseIcon from './CloseIcon/CloseIcon';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
import axios from 'axios';
import { API } from '@/app/api';

export const ReviewForm = ({
	productId,
	className,
	...props
}: ReviewFormProps): JSX.Element => {
	const {
		handleSubmit,
		register,
		control,
		reset,
		formState: { errors }
	} = useForm<IReviewForm>();

	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setError] = useState<string>();

	const onSubmit = async (formData: IReviewForm) => {
		try {
			const { data } = await axios.post<IReviewSentResponse>(
				API.review.createDmo,
				{ ...formData, productId }
			);
			if (data.message) {
				setIsSuccess(true);
				reset();
			} else {
				setError('Something is wrong!');
			}
		} catch (e) {
			if (e instanceof Error) {
				setError(e.message);
			}
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)} {...props}>
				<Input
					{...register('name', {
						required: { value: true, message: 'Fill your name' }
					})}
					placeholder="Name"
					error={errors.name}
				/>
				<Input
					{...register('title', {
						required: { value: true, message: 'Fill your title' }
					})}
					className={styles.title}
					placeholder="Review`s title"
					error={errors.title}
				/>
				<div className={styles.rating}>
					<span>Assessment:</span>
					<Controller
						control={control}
						name="rating"
						rules={{
							required: { value: true, message: 'Fill your rating' }
						}}
						render={({ field }) => (
							<Rating
								error={errors.rating}
								isEditable
								rating={field.value}
								setRating={field.onChange}
								ref={field.ref}
							/>
						)}
					/>
				</div>
				<TextArea
					{...register('description', {
						required: { value: true, message: 'Fill your description' }
					})}
					className={styles.description}
					placeholder="Review`s text"
					error={errors.description}
				/>
				<div className={styles.submit}>
					<Button appearance="primary">Send</Button>
					<span className={styles.info}>
						* Перед публікацією відгук пройде попередню модерацію та перевірку
					</span>
				</div>
			</div>
			{isSuccess && (
				<div className={cn(styles.success, styles.panel)}>
					<div className={styles.successTitle}>Your review has been sent!</div>
					<div className={styles.successText}>
						Thank you, your review will be published after verification.
					</div>
					<CloseIcon
						className={styles.close}
						onClick={() => setIsSuccess(false)}
					/>
				</div>
			)}
			{error && (
				<div className={cn(styles.error, styles.panel)}>
					Something is wrong! Try to reload site...
					<CloseIcon
						className={styles.close}
						onClick={() => setError(undefined)}
					/>
				</div>
			)}
		</form>
	);
};
