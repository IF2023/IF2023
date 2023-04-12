import styles from "./BulletNavigation.module.scss";

const BulletNavigation = ({ data, currentSlide, setIndex }) => {
  return (
    <div className={styles.bulletContainer}>
      {data.map((item, index) => {
        return (
          <span
            key={index}
            className={`${index === currentSlide ? styles.active : ""} ${
              styles.point
            }`}
            onClick={() => setIndex(index)}
          ></span>
        );
      })}
    </div>
  );
};
export default BulletNavigation;
