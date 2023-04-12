import styles from "./Navbar.module.scss";
import NavLink from "./NavLink/NavLink";
import {Link} from "react-router-dom"

const Navbar = () => {
  return <nav className={styles.navbar}>
    <Link to="/">
      <img className={styles.navbar__logo} src="/assets/IF-Logo_white.svg" alt="IF Logo" />
    </Link>
    <div className={styles.navbar__links}>
      <NavLink name={"Programm"} destinationId={"program"}/>
      <NavLink name={"Projekte"} destinationId={"projects"}/>
      <NavLink name={"Electives"} destinationId={"electives"}/>
    </div>
  </nav>;
};

export default Navbar;
