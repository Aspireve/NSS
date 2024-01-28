import AboutHero from "../components/AboutHero";
import Significance from "../components/AboutSignificance";
import Magazine from "../components/AboutMagazine.jsx";
import Values from "../components/AboutValues";
import Moto from "../components/AboutMoto";
import Socials from "../components/HomeSocials";
import Map from "../components/HomeMap"
import AboutObjectives from "../components/AboutObjectives";
import Outcomes from "../components/AboutOutcomes";

export default function About() {
  return (
    <>
      <AboutHero />
      <Moto />
      <Significance />
      <Values />
      <AboutObjectives />
      <Outcomes />
      <Magazine />
      <Socials />
      <Map />
    </>
  );
}
