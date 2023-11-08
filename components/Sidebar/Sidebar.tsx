import React from 'react';
import { SideBarProps } from './Sidebar.props';
import { Menu } from '../Menu/Menu';
import { getMenu } from '@/api/getMenu';
import { firstLevelMenu } from '@/helpers/helpers';
import Logo from '../Logo/Logo';
import cn from 'classnames';
import styles from './Sidebar.module.css';
import { Search } from '../Search/Search';
import { Up } from '../Up/Up';

export const Sidebar = ({
	menu,
	className,
	...props
}: SideBarProps): JSX.Element => {
	// const menu = await Promise.all(firstLevelMenu.map(({ id }) => getMenu(id)));

	return (
		<div className={cn(className, styles.sidebar)} {...props}>
			<Logo className={styles.logo} />
			<Search />
			<Menu menu={menu} />
			<Up />
		</div>
	);
};
