import { useEffect } from "react";
import { HomeHero, HomeWhoAreWe, HomeObjectives, HomeWhatWeDo } from "../components/Home/index";
import {
  HomeDomains,
  HomeAchievements,
  HomeRecentProjects,
  HomeTestimonials
} from "../components/index";
import { Map } from "../components/Common/index"
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
      <HomeObjectives />
      {/* <HomeDomains nav={navigate} />
      <HomeAchievements />
      <HomeRecentProjects nav={navigate} />
      <HomeTestimonials />
      <Socials />*/}
      <Map /> 
    </>
  );
};

export default Home;
