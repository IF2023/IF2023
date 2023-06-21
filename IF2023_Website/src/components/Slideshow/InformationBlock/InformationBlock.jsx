import styles from "./InformationBlock.module.scss";

const InformationBlock = ({ data, index }) => {
  if (data) {
    return (
      <div>
        <h2 className={styles.group}>{data[index].title}</h2>
        <p className={styles.description}>{data[index].description}</p>
      </div>
    );
  }
};
export default InformationBlock;
