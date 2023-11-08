'use client';

import {
	FirstLevelMenuItem,
	MenuItem,
	PageItem
} from '@/interfaces/menu.interface';
import React, { useState, KeyboardEvent } from 'react';
import cn from 'classnames';
import styles from './Menu.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuProps } from './types';
import { firstLevelMenu } from '@/helpers/helpers';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { motion, Variants } from 'framer-motion';

export const Menu = ({ menu }: MenuProps): React.ReactElement => {
	const pathName = usePathname();
	const [menuState, setMenuState] = useState<MenuItem[][]>(menu);
	const setMenu = (newMenu: MenuItem[][]) => {
		setMenuState(newMenu);
	};

	const variants: Variants = {
		visible: {
			marginBottom: 20,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.1
			}
		},
		hidden: { marginBottom: 0 }
	};

	const variantsChildren: Variants = {
		visible: {
			opacity: 1,
			height: 29
		},
		hidden: { opacity: 0, height: 0 }
	};

	const openSecondLevel = (
		secondCategory: string,
		firstCategoryId: TopLevelCategory
	) => {
		setMenu(
			menuState.map((secondMenu, id) =>
				id !== firstCategoryId
					? secondMenu
					: secondMenu.map((m) => {
							if (m._id.secondCategory === secondCategory) {
								return { ...m, isOpened: !m.isOpened };
							}
							return m;
					  })
			)
		);
	};

	const openSecondLevelKey = (
		key: KeyboardEvent,
		secondCategory: string,
		firstCategoryId: TopLevelCategory
	) => {
		if (key.code == 'Space' || key.code == 'Enter') {
			key.preventDefault();
			openSecondLevel(secondCategory, firstCategoryId);
		}
	};

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map((m) => (
					<div key={m.route}>
						<Link href={`/${m.route}`}>
							<div
								className={cn(styles.firstLevel, {
									[styles.firstLevelActive]: m.id == 0
								})}
							>
								{m.icon}
								<span>{m.name}</span>
							</div>
						</Link>
						{m.id == 0 && buildSecondLevel(m)}
					</div>
				))}
			</>
		);
	};
	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menuState[menuItem.id]?.map((m) => {
					return (
						<div key={m._id.secondCategory}>
							<div
								tabIndex={0}
								onKeyDown={(key: KeyboardEvent) =>
									openSecondLevelKey(key, m._id.secondCategory, menuItem.id)
								}
								className={styles.secondLevel}
								onClick={() =>
									openSecondLevel(m._id.secondCategory, menuItem.id)
								}
							>
								{m._id.secondCategory}
							</div>
							<motion.div
								layout
								variants={variants}
								initial={m.isOpened ? 'visible' : 'hidden'}
								animate={m.isOpened ? 'visible' : 'hidden'}
								className={cn(styles.secondLevelBlock)}
							>
								{builThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
							</motion.div>
						</div>
					);
				})}
			</div>
		);
	};

	const builThirdLevel = (
		pages: PageItem[],
		route: string,
		isOpened: boolean
	) => {
		return pages.map((p) => (
			<motion.div
				key={p._id}
				variants={variantsChildren}
				className={styles.thirdLevelContainer}
			>
				<Link
					tabIndex={isOpened ? 0 : -1}
					href={`/${route}/${p.alias}`}
					className={cn(styles.thirdLevel, {
						[styles.thirdLevelActive]: `/${route}/${p.alias}` == pathName
					})}
				>
					{p.category}
				</Link>
			</motion.div>
		));
	};

	return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
