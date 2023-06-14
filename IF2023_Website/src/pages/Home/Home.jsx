import Hero from "../../sections/Hero/Hero";
import Program from "../../sections/Program/Program";
import Sneakpeek from "../../sections/Sneakpeek/Sneakpeek";
import Projects from "../../sections/Projects/Projects";
import Speaker from "../../sections/Speaker/Speaker";
import Supporter from "../../sections/Supporter/Supporter";

const Home = () => {
  return (
    <>
      <Hero />
      <Program />
      <Sneakpeek />
      {/* <Projects /> */}
      <Speaker />
      <Supporter />
    </>
  );
};

export default Home;
