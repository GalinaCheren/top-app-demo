import React from 'react';
import styles from './Advantages.module.css';
import { AdvantagesProps } from './Advantages.props';
import cn from 'classnames';
import AdvantagesIcon from './AdvantagesIcon/AdvantagesIcon';
import { P } from '../P/P';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
	return (
		<>
			{advantages.map((a) => (
				<div key={a._id} className={styles.advantage}>
					<AdvantagesIcon />
					<div className={styles.title}>{a.title}</div>
					<hr className={styles.vline} />
					<P size="18px" className={styles.description}>
						{a.description}
					</P>
				</div>
			))}
		</>
	);
};
