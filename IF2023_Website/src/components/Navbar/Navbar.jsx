import styles from "./Navbar.module.scss";
import NavLink from "./NavLink/NavLink";
import { Link } from "react-router-dom";

const Navbar = ({ logo, links }) => {
	const handleNavToggle = () => {
		const links = document.querySelector(`.${styles.navbar__links}`);
		links.classList.toggle(styles.navbar__links_open);
	};

	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar__wrapper}>
				<Link to="/">
					<img className={styles.navbar__logo} src={logo} alt="IF Logo" />
				</Link>
				<svg
					className={styles.navbar__toggle}
					onClick={handleNavToggle}
					width="25"
					height="22"
					viewBox="0 0 25 22"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0 0V3.125H25V0H0ZM0 9.28125V12.4063H25V9.28125H0ZM0 18.6563V21.7813H25V18.6563H0Z"
						fill="#ffffff"
					/>
				</svg>
				<div className={styles.navbar__links}>
					{links.map((link) => (
						<NavLink
							key={link.id}
							name={link.name}
							destinationId={link.id}
							navToggle={handleNavToggle}
						/>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
