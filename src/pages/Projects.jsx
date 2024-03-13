import ProjectHero from "../components/ProjectsHero";
import ProjectDisplay from "../components/ProjectsDisplay";
import useQuery from "../hooks/useQuery";
import { useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

function fetIdFromString(idString) {
  const parts = idString.split("-");
  return parts[parts.length - 1];
}

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
