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
          <p key={item.time}>
            <AnimationWrapper>
              <span className={styles.time}>{item.time}</span>
              <span className={styles.spacer}>//</span>
              <span className={styles.title}>{item.title}</span>
            </AnimationWrapper>
          </p>
        ))}
      </ul>
    </div>
  );
};

export default Day;
