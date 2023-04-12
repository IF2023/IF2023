import styles from "./Navbar.module.scss";

const Navbar = () => {
  return <nav className={styles.navbar}>
    <img className={styles.navbar__logo} src="/public/assets/IF-Logo_white.svg" alt="IF Logo" />
    <div className={styles.navbar__links}>
      <p>Programm</p>
      <p>Projekte</p>
      <p>Electives</p>
    </div>
  </nav>;
};

export default Navbar;
