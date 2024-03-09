import { useRef } from "react";
import bloodDonation from "../../assets/projects/procard_Blood donation camp (Health) 13.jpg";
import treePlantation from "../../assets/projects/procard_Tree plantation drive (Environment) 06.jpg"
import voterId from "../../assets/projects/procard_Voter Id registration (Society) 04.jpg"
import oldAgeHome from "../../assets/projects/procard_Mahashivratri - Old Age home visit (Society) 02.jpeg"
import "../../styles/home/recent-projects.css";
import useScrollVisibility from "../../hooks/useScrollAnimation";

const projectDescription = [
  {
    image: bloodDonation,
    id: 20,
    domain: "HEALTH",
    title: "Blood Donation Camp",
    description: `The TCET NSS UNIT organised an impactful Blood Donation Camp at Thakur College of Engineering and Technology, Kandivali(E). 100+ donors actively participate in the enthusiastic volunteers in various roles. The project aims to create awareness about regular blood donation, educate on timely access, and foster a sense of unity and social responsibility. Feedback highlights the effective communication and active participation, emphasising the positive impact on society's well-being`,
  },
  {
    image: treePlantation,
    domain: "ENVIRONMENT",
    id:14,
    title: "Tree Plantation Drive",
    description: `The TCET NSS Unit conducts an annual Tree Plantation Drive, recognizing trees as crucial and an important element for the environment. This initiative emphasises the importance of trees in maintaining a healthier planet. Volunteers actively participate, contributing to a greener future and fostering a collective commitment to environmental well-being.`,
  },
  {
    image: voterId,
    domain: "SOCIETY",
    id: 36,
    title: "Voter Id Registration",
    description: `The TCET NSS UNIT volunteers embraced the voter id registration at the Thakur College of Engineering and Technology, Kandivali (E). Our main goal was to make people aware about the importance of having a voter id and to promote a fair and democratic electoral system. Enthusiastic volunteers actively participated in the project and contributed their part.Volunteers provided adequate assistance to those who had come to make their voter id. It increased more awareness regarding the importance of having a voter id card. It emphasised on the significance of participating in the democratic process, showcasing your role as a responsible citizen.`,
  },
  {
    image: treePlantation,
    domain: "SOCIETY",
    title: "Debate Activity",
    id: 31,
    description: `The TCET NSS Unit "Sow the seed of change” initiative under Meri Mati Mera Desh theme, aims to raise environmental awareness and instigate change. Through engaging debates on different topics, volunteers explore their critical thinking, communication skills, and their ability to analyse complex issues, fostering intellectual growth and community engagement through participating in these debates.`,
  },
  {
    image: oldAgeHome,
    domain: "SOCIETY",
    id: 23,
    title: "Old Age Home Visit",
    description: `The TCET NSS conducts "Mahashivratri-Old Age Home Visit" annually on the occasion of Mahashivratri for senior citizens. Several volunteers oversee the visit, during which volunteers spend time with the seniors, offering companionship and support.Volunteers visit old age homes to spend time with senior citizens, engaging in activities such as games, music, and dance. This small effort not only brightens the seniors' days but also allows volunteers to learn and understand the challenges these individuals face. It provides a valuable perspective on the less fortunate situations many elderly individuals find themselves in.`,
  },
];

export default function RecentProjects({nav}) {
  const projectsTitleRef = useRef(null);
  const sliderRef = useRef(null);
  const { isVisible } = useScrollVisibility(projectsTitleRef, sliderRef);

  return (
    <section className={`recent-projects-container ${isVisible? "appear" : ""}`} ref={projectsTitleRef}>
      <h1 className={isVisible? "home-projects-header" : ""} ref={sliderRef}>Recent Projects</h1>
      <div className="prioject-class-container">
        {projectDescription.map((project, idx) => (
          <div key={project.title + idx} className="recent-project-card" onClick={() => nav(`../projects/${project.id}`)}>
            <img src={project.image} alt="project" />
            <h4 className="recent-project-domain">{project.domain}</h4>
            <h3 className="recent-project-title">{project.title}</h3>
            <p className="recent-project-short-description">
              {project.description.substring(0,60) + "... Read More"}
            </p>
            <div className="responsive-project-text">
              <h4 className="recent-project-domain">{project.domain}</h4>
              <h3 className="recent-project-title">{project.title}</h3>
              <p className="recent-project-short-description">
                {project.description.substring(0,60) + "... Read More"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}