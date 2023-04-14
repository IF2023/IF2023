import styles from "./Navbar.module.scss";
import NavLink from "./NavLink/NavLink";
import { Link } from "react-router-dom";

const Navbar = ({ logo, links }) => {
	return (
		<nav className={styles.navbar}>
			<Link to="/">
				<img className={styles.navbar__logo} src={logo} alt="IF Logo" />
			</Link>
			<div className={styles.navbar__links}>
				{links.map((link) => (
					<NavLink key={link.id} name={link.name} destinationId={link.id} />
				))}
			</div>
		</nav>
	);
};

export default Navbar;
