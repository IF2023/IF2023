import styles from "./Placeholder.module.css";
const Placeholder = () => {
	return (
		<div className={styles.gridContainer}>
			<h1 className={styles.title}>
				INTERACTIVE <br /> FUTURE <br /> EXHIBITION
			</h1>
			<img className={styles.logo} src="/assets/IF-Logo_white.svg" alt="Logo" />
			<div className={styles.info}>
				<p className={styles.date}>18. - 21.7.2023</p>
				<p className={styles.location}>806 qm</p>
				<br />
				<p className={styles.commingSoon}>
					Weitere Informationen folgen in Kürze
				</p>
			</div>
		</div>
	);
};

export default Placeholder;
