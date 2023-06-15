import styles from "./Hero.module.scss";
import AnimationWrapper from "../../components/AnimationWrapper/AnimationWrapper";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.IFinformation}>
        <AnimationWrapper>
          <h1 className={styles.heading}>
            INTERACTIVE <br></br> FUTURE <br></br> EXHIBITION
          </h1>
        </AnimationWrapper>
        <AnimationWrapper>
          <p className={styles.information}>19. - 20.7.2023</p>
        </AnimationWrapper>
      </div>
    </section>
  );
};

export default Hero;
