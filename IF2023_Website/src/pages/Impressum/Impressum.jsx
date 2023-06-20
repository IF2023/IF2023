import styles from "./Impressum.module.scss";

const Impressum = () => {
	return (
		<section className={styles.impressum}>
			<h1>Impressum</h1>
			<h2>Angaben gemäß §5 TMG</h2>
			<p>
				IMD-F &ndash; Interactive Media Design Förderverein e.V. <br />
				Max-Planck-Strasse 2 <br />
				64807 Dieburg <br />
				Vereinsregister: VR 84108 <br />
				Registergericht: Amtsgericht Darmstadt <br />
				Vertreten durch: Vorsitzende AndreaKrajewski <br />
			</p>
			<h2>Kontakt</h2>
			<p>
				Telefon: +49-6151-16-39450 <br />
				E-Mail: info@imd-f.de <br />
			</p>
			<h2>Postadresse</h2>
			<p>
				IMD-F &ndash; Interactive Media Design Förderverein e.V. <br />
				c/o <br />
				Hochschule Darmstadt <br />
				University of Applied Sciences <br />
				Mediencampus <br />
				Max-Planck-Strasse 2 <br />
				64807 Dieburg <br />
			</p>
			<h2>
				Verbraucherstreit&shy;beilegung/ <wbr />
				Universal&shy;schlichtungsstelle
			</h2>
			<p>
				Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
				vor einer Verbraucherschlichtungsstelle teilzunehmen. Quelle:
				e-recht24.de
			</p>
		</section>
	);
};

export default Impressum;
