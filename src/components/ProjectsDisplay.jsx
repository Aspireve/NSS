import React, { useState } from "react";
import "../styles/projects/display.css";
import Book from "../assets/static_images/book-solid.svg"
import Heart from "../assets/static_images/heart-solid.svg"
import HeartPulse from "../assets/static_images/heart-pulse-solid.svg"
import UserGroup from "../assets/static_images/user-group-solid.svg"
import Earth from "../assets/static_images/earth-americas-solid.svg"
import MajorProjectsDisplay from "./ProjectMajorlist";
import MinorProjectsDisplay from "./ProjectMinorlist";
import SearchBar from "./ProjectSearchbar";
import SidebarHeader from "./ProjectSidebaeheader";

const projects = [
  {
    project: "ORGAN DONATION",
    domain: "HEALTH",
    summary:
      "TCET NSS Unit initiated the 'Talk with the City' project, focusing on understanding the challenges faced by people. Volunteers visited Singh Estate, Thakur Village kandivali(East) which is adopted by TCET NSS UNIT, dividing into groups to gather insights through a prepared questionnaire. Engaging in discussions, they not only identified problems but also offered solutions and the struggles faced by the common people. The project emphasized community interaction and problem-solving. A key learning was the importance of direct communication in comprehending and addressing local issues effectively. ",
  },
  {
    project: "ORGAN DONATION",
    domain: "HEALTH",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aliquam, officiis.",
  },
  {
    project: "ORGAN DONATION",
    domain: "HEALTH",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aliquam, officiis.",
  },
  {
    project: "ORGAN DONATION",
    domain: "HEALTH",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aliquam, officiis.",
  },
  {
    project: "ORGAN DONATION",
    domain: "HEALTH",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aliquam, officiis.",
  },
  {
    project: "ORGAN DONATION",
    domain: "HEALTH",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aliquam, officiis.",
  },
];

const domain_names = [
  { name: "All", icon: Heart },
  { name: "Environment", icon: Earth },
  { name: "Education", icon: Book },
  { name: "Society", icon: UserGroup },
  { name: "Health", icon: HeartPulse },
];

export default function ProjectDisplay() {
  const [selectedDomain, setSelectedDomain] = useState(0);
  return (
    <div className="projects-display-container">
      <div className="domain-option-filters-containers">
        <div className="domain-option-domains">
          <SidebarHeader />
          <h3 className="domain-options-name">DOMAINS</h3>
          <ul className="domain-option-domains">
            {domain_names.map((domain, idx) => (
              <li
                key={idx}
                className={`project-option ${
                  idx === selectedDomain ? "p-active" : ""
                }`}
                onClick={() => setSelectedDomain(idx)}
              >
                <img src={domain.icon} alt={`${domain.name} icon`} />
                <h5>{domain.name}</h5>
              </li>
            ))}
          </ul>
        </div>
        <SearchBar />
      </div>
      <div className="projects-cards-side">
        <MajorProjectsDisplay projects={projects} />
        <MinorProjectsDisplay projects={projects} />
      </div>
    </div>
  );
}
