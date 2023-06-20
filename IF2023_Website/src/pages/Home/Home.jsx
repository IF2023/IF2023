import Hero from "../../sections/Hero/Hero";
import Program from "../../sections/Program/Program";
import Projects from "../../sections/Projects/Projects";
import Speaker from "../../sections/Speaker/Speaker";
import Supporter from "../../sections/Supporter/Supporter";
import Sneakpeek from "../../sections/Sneakpeek/Sneakpeek";
import Navbar from "../../components/Navbar/Navbar";

import Image from "../../sections/Image/Image";
import img1 from "/assets/Bilder/IMG_2703_bearb.jpg";
import img2 from "/assets/Bilder/IMG_2846_bearb.jpg";

const Home = () => {
  return (
    <>
      <Navbar
        logo="/assets/IF-Logo_white.svg"
        links={[
          { name: "Programm", id: "program" },
          { name: "Projekte", id: "projects" },
          // { name: "Electives", id: "electives" },
        ]}
      />
      <Hero />
      <Program />
      <Image img={img1} />
      {/* <Sneakpeek /> */}
      <Projects />
      <Speaker />
      <Image img={img2} />
      <Supporter />
    </>
  );
};

export default Home;
