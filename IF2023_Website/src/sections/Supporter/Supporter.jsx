import AnimationWrapper from "../../components/AnimationWrapper/AnimationWrapper";
import styles from "./Supporter.module.scss";
import data from "../../data/supporters.json";

const Supporter = () => {
	return (
		<section className={styles.supporter}>
			<AnimationWrapper>
				<h1 className={styles.heading}>Danke an unsere Supporter!</h1>
			</AnimationWrapper>
			<div className={styles.grid}>
				<div className={styles.big}>
					{data
						.filter((sponsor) => sponsor.tier === "big")
						.map((sponsor) => {
							if (sponsor.href === "") {
								return (
									<div key={sponsor.id}>
										<img src={sponsor.image} alt={sponsor.name} />
									</div>
								);
							} else {
								return (
									<a href={sponsor.href} key={sponsor.id}>
										<img src={sponsor.image} alt={sponsor.name} />
									</a>
								);
							}
						})}
				</div>
				<div className={styles.small}>
					{data
						.filter((sponsor) => sponsor.tier === "small")
						.map((sponsor) => {
							if (sponsor.href === "") {
								return (
									<div key={sponsor.id}>
										<img src={sponsor.image} alt={sponsor.name} />
									</div>
								);
							} else {
								return (
									<a href={sponsor.href} key={sponsor.id}>
										<img src={sponsor.image} alt={sponsor.name} />
									</a>
								);
							}
						})}
				</div>
			</div>
			{/* <img
        className={styles.backgroundImage}
        src="/assets/SVG/SVG-Webseite/Footer.svg"
        alt=""
      /> */}
		</section>
	);
};

export default Supporter;
