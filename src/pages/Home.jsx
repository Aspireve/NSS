import { useEffect } from "react";
import "../styles/home/hero.css";
import { HomeHero, HomeWhoAreWe } from "../components/Home/index";
import {
  HomeWhatWeDo,
  HomeObjectives,
  HomeDomains,
  HomeAchievements,
  HomeRecentProjects,
  HomeTestimonials
} from "../components/index";
import { Socials, Map } from "../components/common"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Home | TCET NSS UNIT";
  });
  return (
    <>
      <HomeHero />
      <HomeWhoAreWe nav={navigate} />
      <HomeWhatWeDo nav={navigate} />
      {/* <HomeObjectives />
      <HomeDomains nav={navigate} />
      <HomeAchievements />
      <HomeRecentProjects nav={navigate} />
      <HomeTestimonials />
      <Socials />
      <Map /> */}
    </>
  );
};

export default Home;
