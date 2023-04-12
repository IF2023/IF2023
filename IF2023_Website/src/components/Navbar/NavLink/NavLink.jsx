import styles from "./NavLink.module.scss";
import { Link } from "react-router-dom";

const NavLink = ({ name, destinationId }) => {
  return (
    <Link className={styles.navLink} to={`/#${destinationId}`}>
      {name}
    </Link>
  );
};
export default NavLink;
