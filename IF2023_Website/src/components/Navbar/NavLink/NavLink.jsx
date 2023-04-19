import styles from "./NavLink.module.scss";
import { Link } from "react-router-dom";

const NavLink = ({ name, destinationId, navToggle }) => {
  return (
    <Link className={styles.navLink} to={`/#${destinationId}`} onClick={navToggle}>
      {name}
    </Link>
  );
};
export default NavLink;
