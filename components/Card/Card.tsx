'use client';
import React, { forwardRef } from 'react';
import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';
import { motion } from 'framer-motion';

export const Card = motion(
	forwardRef<HTMLDivElement, CardProps>(
		({ color = 'white', children, className, ...props }, ref): JSX.Element => {
			return (
				<div
					className={cn(styles.card, className, {
						[styles.blue]: color == 'blue'
					})}
					ref={ref}
					{...props}
				>
					{children}
				</div>
			);
		}
	)
);
