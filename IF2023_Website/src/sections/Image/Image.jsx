import styles from "./Image.module.scss";

const Image = ({ img }) => {
  return (
    <img className={styles.image} src={img} alt="Bild einer vergangenen IF" />
  );
};
export default Image;
