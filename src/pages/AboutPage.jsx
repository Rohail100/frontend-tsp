import Hero from "../components/common/Hero";
import AboutIntro from "../components/about/AboutIntro";
import Stats from "../components/about/Stats";
import Skills from "../components/about/Skills";
import VideoCta from "../components/about/VideoCta";
import Team from "../components/about/Team";
import Clients from "../components/about/Clients";

const AboutPage = () => (
  <>
    <Hero page={"About Us"} />
    <AboutIntro />
    <Stats />
    <Skills />
    <VideoCta />
    <Team />
    <Clients />
  </>
);

export default AboutPage;