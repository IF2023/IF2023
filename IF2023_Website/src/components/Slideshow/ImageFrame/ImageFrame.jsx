import styles from "./ImageFrame.module.scss";

const ImageFrame = ({ data, index }) => {
  //Todo: Map over data to generate Images

  return (
    <div className={styles.ImageFrame}>
      <div
        className={styles.SlideContainer}
        style={{
          transform: `translate3d(${-index * 100}%,0,0)`,
        }}
      >
        {data.map((item) => {
          return (
            <div className={styles.Slide} key={item.id}>
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ImageFrame;
