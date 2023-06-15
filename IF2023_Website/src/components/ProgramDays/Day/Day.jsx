import AnimationWrapper from "../../AnimationWrapper/AnimationWrapper";
import styles from "./Day.module.scss";
const Day = ({ date, program }) => {
  return (
    <div>
      <AnimationWrapper>
        <h2 id="date" className={styles.heading}>
          {date}
        </h2>
      </AnimationWrapper>
      <ul>
        {program.map((item) => (
          <p key={item.time}>
            <AnimationWrapper>
              <span>{item.time}</span> // <span>{item.title}</span>
            </AnimationWrapper>
          </p>
        ))}
      </ul>
    </div>
  );
};

export default Day;
