'use client';

import React, { use, useEffect, useState } from 'react';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import Logo from '../Logo/Logo';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import { motion, Variants } from 'framer-motion';
import { Sidebar } from '../Sidebar/Sidebar';
import { usePathname } from 'next/navigation';
import { Up } from '../Up/Up';

export const Header = ({
	menu,
	className,
	...props
}: HeaderProps): JSX.Element => {
	const [isOpened, setIsOpened] = useState<boolean>(false);

	const toggleMenu = () => setIsOpened((s) => !s);

	const pathname = usePathname();
	useEffect(() => {
		setIsOpened(false);
	}, [pathname]);

	const variants: Variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20
			}
		},
		closed: {
			opacity: 0,
			x: '100%'
		}
	};

	return (
		<header className={cn(className, styles.header)} {...props}>
			<Logo />
			{!isOpened && <Up mobile />}
			<ButtonIcon
				appearance="white"
				icon={isOpened ? 'CloseIcon' : 'MenuIcon'}
				onClick={toggleMenu}
				className={styles.menuButton}
			/>

			<motion.div
				className={styles.mobileMenu}
				variants={variants}
				initial={'closed'}
				animate={isOpened ? 'opened' : 'closed'}
			>
				<Sidebar menu={menu} />
			</motion.div>
		</header>
	);
};
