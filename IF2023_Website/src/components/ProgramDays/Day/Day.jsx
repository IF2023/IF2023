import AnimationWrapper from "../../AnimationWrapper/AnimationWrapper";
import styles from "./Day.module.scss";
const Day = ({ date, program }) => {
	return (
		<div className={styles.singleDay}>
			<AnimationWrapper>
				<h2 id="date" className={styles.heading}>
					{date}
				</h2>
			</AnimationWrapper>
			<ul>
				{program.map((item) => (
					<li key={item.time}>
						<AnimationWrapper>
							<div style={{display: "flex"}}>
								<p className={styles.time}>{item.time}</p>
								<p className={styles.spacer}>//</p>
								<p className={styles.title}>{item.title}</p>
							</div>
						</AnimationWrapper>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Day;
