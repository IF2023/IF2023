import styles from "./Footer.module.scss"

const Footer = () => {
  return <footer className={styles.footer}>
    <div className={styles.socials}>
      {/* <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" /> */}
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className={styles.pages}>
      <a href="/impressum">Impressum</a>
      <a href="/kontakt">Kontakt</a>
      <a href="/datenschutz">Datenschutz</a>
    </div>
  </footer>;
};

export default Footer;
