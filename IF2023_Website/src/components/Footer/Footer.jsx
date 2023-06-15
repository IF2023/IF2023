import styles from "./Footer.module.scss";
import { AiOutlineInstagram, AiOutlineGlobal } from "react-icons/ai";

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
        <a href="/impressum">Impressum</a>
        <a href="/kontakt">Kontakt</a>
        <a href="/datenschutz">Datenschutz</a>
      </div>
    </footer>
  );
};

export default Footer;
