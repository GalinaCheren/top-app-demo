import { type } from 'os';
import React from 'react';

// type TStart = {
// 	className: string;
// };

const CloseIcon = (props: any) => (
	<svg
		width="12"
		height="12"
		viewBox="0 0 12 12"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<line
			x1="2.06066"
			y1="1.93934"
			x2="10.5459"
			y2="10.4246"
			stroke="#1CC37E"
			strokeWidth="3"
		/>
		<line
			x1="1.93934"
			y1="10.4246"
			x2="10.4246"
			y2="1.93935"
			stroke="#1CC37E"
			strokeWidth="3"
		/>
	</svg>
);
export default CloseIcon;
