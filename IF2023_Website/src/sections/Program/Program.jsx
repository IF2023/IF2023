import AnimationWrapper from "../../components/AnimationWrapper/AnimationWrapper";
import ProgramDays from "../../components/ProgramDays/ProgramDays";
import styles from "./program.module.scss";

const Program = () => {
  return (
    <section id="program" className={styles.program}>
      <AnimationWrapper>
        <h1 className={styles.heading}>PROGRAM</h1>
      </AnimationWrapper>
      <ProgramDays />
    </section>
  );
};

export default Program;
