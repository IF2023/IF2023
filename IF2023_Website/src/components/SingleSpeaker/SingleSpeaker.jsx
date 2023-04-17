import AnimationWrapper from "../AnimationWrapper/AnimationWrapper";
import styles from "./SingleSpeaker.module.scss";

const SingleSpeaker = ({ data }) => {
	const { img, name, company, description } = data;
	return (
		<AnimationWrapper>
			<div className={styles.singleSpeaker}>
				<div className={styles.speaker__imgContainer}>
					<img className={styles.speaker__img} src={img} alt={img} />
				</div>
				<p className={styles.speaker__name}>{name}</p>
				<p className={styles.speaker__company}>{company}</p>
				<p className={styles.speaker__description}>{description}</p>
			</div>
		</AnimationWrapper>
	);
};

export default SingleSpeaker;
