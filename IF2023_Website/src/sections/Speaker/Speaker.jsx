import styles from "./Speaker.module.scss";
import AnimationWrapper from "../../components/AnimationWrapper/AnimationWrapper";
import SingleSpeaker from "../../components/SingleSpeaker/SingleSpeaker";
import data from "../../data/speakers.json";

const Speaker = () => {
  return (
    <section id="speaker" className={styles.speaker}>
      <AnimationWrapper>
        <h1 className={styles.heading}>SPEAKER</h1>
      </AnimationWrapper>
      <div className={styles.speaker__wrapper}>
				{data.map((speaker) => {
					return <SingleSpeaker key={speaker.id} data={speaker} />;
				})}
			</div>
      {/* <div className={styles.comingSoonContainer}>
        <AnimationWrapper>
          <h3 className={styles.comingSoon}>COMING SOON</h3>
        </AnimationWrapper>
      </div> */}
    </section>
  );
};

export default Speaker;
