import styles from "./Placeholder.module.css";
const Placeholder = () => {
  return (
    <div className={styles.gridContainer}>
      <h1 className={styles.title}>
        INTERACTIVE <br /> FUTURE <br /> EXHIBITION
      </h1>
      <img className={styles.logo} src="/assets/IF-Logo_white.svg" alt="Logo" />
      <div className={styles.info}>
        <p>14. - 16.6.2025</p>
        <p>
          806 m<sup>2</sup>
        </p>
        <br />
        <p className={styles.commingSoon}>
          Weiter Informationen folgen in kürze
        </p>
      </div>
    </div>
  );
};

export default Placeholder;
