import AnimationWrapper from "../../components/AnimationWrapper/AnimationWrapper";
import Slideshow from "../../components/Slideshow/Slideshow";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <AnimationWrapper>
        <h1 className={styles.heading}>
          UNSERE
          <br />
          PROJEKTE
        </h1>
        <Slideshow />
      </AnimationWrapper>
    </section>
  );
};

export default Projects;
