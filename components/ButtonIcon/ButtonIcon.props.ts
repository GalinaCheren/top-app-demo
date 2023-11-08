import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import UpIcon from './UpIcon/UpIcon';
import MenuIcon from './UpIcon/MenuIcon';
import CloseIcon from './UpIcon/CloseIcon';

export const icons = {
	UpIcon,
	MenuIcon,
	CloseIcon
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	icon: IconName;
	appearance: 'primary' | 'white';
}
