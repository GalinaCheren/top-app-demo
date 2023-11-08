import { MenuItem } from '@/interfaces/menu.interface';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface SideBarProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	menu: MenuItem[][];
}
