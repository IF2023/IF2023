import styles from "./NavLink.module.scss";

const NavLink = ({ name, destinationId, navToggle }) => {
	const scrollToSection = (destinationId) => {
		if (destinationId === "/") {
			window.location = "/";
		} else {
			const elemTop = document
				.getElementById(destinationId)
				.getBoundingClientRect().top;
			console.log(elemTop);
			// scroll to section position minus navbar height
			window.scrollBy(0, elemTop - 120);
		}
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
