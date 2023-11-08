'use client';

import React, { useEffect, useMemo } from 'react';
import styles from './Up.module.css';
import { useScrollY } from '@/hooks/useScrollY';
import { motion, useAnimation } from 'framer-motion';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import cn from 'classnames';

const getScrollY = (y: number) =>
	typeof window !== 'undefined' ? window.innerHeight + y : 0;

const getBottom = () =>
	typeof document !== 'undefined' && scrollY + 90 >= document.body.scrollHeight
		? `${
				90 - document.body.scrollHeight + scrollY > 30
					? 90 - document.body.scrollHeight + scrollY
					: 30
		  }px`
		: '30px';

export const Up = ({ mobile }: { mobile?: boolean }): JSX.Element => {
	const controls = useAnimation();
	const y = useScrollY();

	const scrollY = getScrollY(y);
	const bottom = getBottom();

	useEffect(() => {
		controls.start({
			opacity: scrollY / document.body.scrollHeight
		});
	}, [y, controls]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<motion.div
			className={cn(styles.up, { [styles.upDesktop]: !mobile })}
			animate={controls}
			initial={{ opacity: 0 }}
			style={{
				bottom
			}}
		>
			<ButtonIcon appearance="primary" icon="UpIcon" onClick={scrollToTop} />
		</motion.div>
	);
};
