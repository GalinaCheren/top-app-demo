import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
	return (
		<div className={styles.not_found}>
			<h2>Not Found 404</h2>
			<p>Could not find requested resource</p>
			<Link href="/">Return Home</Link>
		</div>
	);
}
