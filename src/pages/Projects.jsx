import ProjectHero from "../components/ProjectsHero";
import ProjectDisplay from "../components/ProjectsDisplay";
import useQuery from "../hooks/useQuery";
import { useParams } from "react-router-dom";

export default function Projects() {
  const { id } = useParams();
  const query = useQuery();
  const domain = query.get("domain");
  return (
    <>
      <ProjectHero />
      <ProjectDisplay domain={domain} id={id} />
    </>
  );
}
