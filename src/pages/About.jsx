import {
  AboutHero,
  AboutMoto,
  AboutSignificance,
  AboutValue,
  AboutObjectives,
  AboutMagazine
} from "../components/about.js";
import { Map, Socials } from "../components/Common/index.js";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About | TCET NSS UNIT"
  })
  return (
    <>
      <AboutHero />
      <AboutMoto />
      <AboutSignificance />
      <AboutValue />
      <AboutObjectives />
      <AboutMagazine />
      <Socials />
      <Map />
    </>
  );
}
