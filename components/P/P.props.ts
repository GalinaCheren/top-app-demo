import {
	DetailedHTMLFactory,
	DetailedHTMLProps,
	HTMLAttributes,
	ReactNode
} from 'react';

export interface PProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	size?: '14px' | '16px' | '18px';
	children: ReactNode;
}
