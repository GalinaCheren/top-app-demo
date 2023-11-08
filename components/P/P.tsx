import React from 'react';
import { PProps } from './P.props';
import styles from './P.module.css';
import cn from 'classnames';

export const P = ({
	size = '14px',
	children,
	className,
	...props
}: PProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.p14]: size == '14px',
				[styles.p16]: size == '16px',
				[styles.p18]: size == '18px'
			})}
			{...props}
		>
			{children}
		</p>
	);
	// switch (size) {
	// 	case '14px':
	// 		return <p className={styles.p14}>{children}</p>;
	// 	case '16px':
	// 		return <p className={styles.p16}> {children}</p>;
	// 	case '18px':
	// 		return <p className={styles.p18}>{children}</p>;
	// 	default:
	// 		return <></>;
	// }
};
