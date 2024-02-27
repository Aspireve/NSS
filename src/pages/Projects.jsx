import ProjectHero from '../components/ProjectsHero'
import ProjectDisplay from '../components/ProjectsDisplay'
import useQuery from '../hooks/useQuery';

export default function Projects() {
  const query = useQuery();

  // Access specific query parameters directly
  const domain = query.get("domain");
  const age = query.get("age");
  return (
    <>
        <ProjectHero />
        <ProjectDisplay domain={domain}/>
    </>
  )
}
