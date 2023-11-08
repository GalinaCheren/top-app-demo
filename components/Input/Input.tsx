import React, { forwardRef } from 'react';
import { InputProps } from './Input.props';
import styles from './Input.module.css';
import cn from 'classnames';

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, error, ...props }, ref): JSX.Element => {
		return (
			<div className={cn(className, styles.inputWrapper)}>
				<input
					className={cn(styles.input, { [styles.error]: error })}
					{...props}
					ref={ref}
				/>
				{error && <span className={styles.errorMessage}>{error.message}</span>}
			</div>
		);
	}
);
