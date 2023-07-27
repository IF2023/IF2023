import styles from "./InformationBlock.module.scss";

const InformationBlock = ({ data, index }) => {
	if (data) {
		return (
			<div>
				<h2 className={styles.group}>{data[index].title}</h2>
				<p className={styles.description}>{data[index].description}</p>
				<br />
				{data[index].link && (
					<u>
						<a className={styles.link} href={data[index].link}>
							Mehr erfahren
						</a>
					</u>
				)}
			</div>
		);
	}
};
export default InformationBlock;
