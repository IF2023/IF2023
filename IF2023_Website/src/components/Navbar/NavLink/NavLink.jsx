import styles from "./NavLink.module.scss";
import { Link } from "react-router-dom";

const NavLink = ({ name, destinationId, navToggle }) => {
	const scrollToSection = (destinationId) => {
		const elemTop = document
			.getElementById(destinationId)
			.getBoundingClientRect().top;

		// scroll to section position minus navbar height
		window.scrollTo(0, elemTop - 120);
	};

	return (
		<p
			className={styles.navLink}
			onClick={() => {
				navToggle();
				scrollToSection(destinationId);
			}}
		>
			{name}
		</p>
	);
};
export default NavLink;
