import AnimationWrapper from "../AnimationWrapper/AnimationWrapper";
import styles from "./SingleSpeaker.module.scss";

const SingleSpeaker = ({ data }) => {
	const { img, name, company, description } = data;
	return (
		<AnimationWrapper>
			<div className={styles.singleSpeaker}>
				<div className={styles.head}>
					<div className={styles.imgContainer}>
						<img className={styles.img} src={img} alt={img} />
					</div>
					<p className={styles.name}>{name}</p>
					<p className={styles.company}>{company}</p>
				</div>
				<p className={styles.description}>{description}</p>
			</div>
		</AnimationWrapper>
	);
};

export default SingleSpeaker;
