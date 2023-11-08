import React, { forwardRef } from 'react';
import { TextAreaProps } from './TextArea.props';
import styles from './TextArea.module.css';
import cn from 'classnames';

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	({ error, className, ...props }, ref): JSX.Element => {
		return (
			<div className={cn(className, styles.texAreaWrapper)}>
				<textarea
					className={cn(styles.textArea, { [styles.error]: error })}
					{...props}
					ref={ref}
				/>
				{error && <span className={styles.errorMessage}>{error.message}</span>}
			</div>
		);
	}
);
