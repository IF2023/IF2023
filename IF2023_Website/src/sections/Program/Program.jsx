import AnimationWrapper from "../../components/AnimationWrapper/AnimationWrapper";
import ProgramDay from "../../components/ProgramDay/ProgramDay";
import Slideshow from "../../components/ProgramDay/ProgramDay";
import styles from "./program.module.scss";

const Program = () => {
  return (
    <section id="program" className={styles.program}>
      <AnimationWrapper>
        <h1 className={styles.heading}>PROGRAM</h1>
      </AnimationWrapper>
      <ProgramDay />
    </section>
  );
};

export default Program;
