import {
  AboutHero,
  AboutMoto,
  AboutSignificance,
  AboutValue,
  AboutObjectives,
  AboutMagazine
} from "../components/about.js";
import { CouncilTable } from "../components/About/CouncilTable.jsx";
import { POProjMatch } from "../components/About/POProjMatch.jsx";
import { ProjectsDomaintable } from "../components/About/ProjectsDomainTable.jsx";
import { Volunteertable } from "../components/About/Volunteertable.jsx";
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
      {/* <AboutObjectives /> */}
      <Volunteertable />
      <CouncilTable />
      <ProjectsDomaintable />
      {/* <POProjMatch /> */}
      <AboutMagazine />
      <Socials />
      <Map />
    </>
  );
}
