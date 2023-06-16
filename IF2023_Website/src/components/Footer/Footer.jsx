import styles from "./Footer.module.scss";
import { AiOutlineInstagram, AiOutlineGlobal } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.socials}>
				<a href="https://imd.mediencampus.h-da.de/">
					<div className={styles.icon}>
						<AiOutlineGlobal />
					</div>
					IMD Website
				</a>
				<a href="https://www.instagram.com/interactivemediadesign.hda/">
					<div className={styles.icon}>
						<AiOutlineInstagram />
					</div>
					IMD Instagram
				</a>
			</div>
			<div className={styles.pages}>
				<Link
					to="/impressum"
					onClick={() =>
						window.scrollTo({
							top: 0,
							left: 0,
							behavior: "instant",
						})
					}
				>
					Impressum
				</Link>
				<Link
					to="/datenschutz"
					onClick={() =>
						window.scrollTo({
							top: 0,
							left: 0,
							behavior: "instant",
						})
					}
				>
					Datenschutz
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
