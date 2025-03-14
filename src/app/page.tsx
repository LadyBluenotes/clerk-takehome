import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<h1 className={styles.title}>Clerk Take-Home</h1>
			</main>
		</div>
	);
}
