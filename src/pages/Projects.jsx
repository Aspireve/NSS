import ProjectHero from '../components/ProjectsHero'
import ProjectDisplay from '../components/ProjectsDisplay'
import useQuery from '../hooks/useQuery';

export default function Projects() {
  const query = useQuery();
  const domain = query.get("domain");
  return (
    <>
        <ProjectHero />
        <ProjectDisplay domain={domain}/>
    </>
  )
}
