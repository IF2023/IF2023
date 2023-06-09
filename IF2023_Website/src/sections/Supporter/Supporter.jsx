import AnimationWrapper from "../../components/AnimationWrapper/AnimationWrapper";
import styles from "./Supporter.module.scss";

const Supporter = () => {
  return (
    <section className={styles.supporter}>
      <AnimationWrapper>
        <h1 className={styles.heading}>Danke an unsere Supporter!</h1>
      </AnimationWrapper>
      <div className={styles.grid}>
        <div>
          <div className={styles.big}>
            <a href="">
              <img src="https://placehold.co/760x260" alt="" />
            </a>
          </div>
          <div className={styles.small}>
            <a href="">
              <img src="https://placehold.co/340x220" alt="" />
            </a>
            <a href="">
              <img src="https://placehold.co/340x220" alt="" />
            </a>
          </div>
        </div>
        <div>
          <div className={styles.big}>
            <a href="">
              <img src="https://placehold.co/760x260" alt="" />
            </a>
          </div>
          <div className={styles.small}>
            <a href="">
              <img src="https://placehold.co/340x220" alt="" />
            </a>
            <a href="">
              <img src="https://placehold.co/340x220" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supporter;
