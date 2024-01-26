import { NavLink } from "react-router-dom";

export default function NavMenu({isOpen}) {
  const nav_tags = [
    { "id": 1, "title": "Home", "link": "../" },
    { "id": 2, "title": "About Us", "link": "../about" },
    { "id": 3, "title": "Teams", "link": "../team" },
    { "id": 4, "title": "Testimonials", "link": "../testimonials" },
    { "id": 5, "title": "Projects", "link": "../projects" }
  ]
  
  return (
    <div className={`nav-links-container ${isOpen ? "show-navbar" : ""}`}>
      {nav_tags.map((nav, idx) => (
        <NavLink style={{textDecoration: "none"}} className="nav-links" key={idx} to={nav.link}>
            {nav.title}
        </NavLink>
      ))}
    </div>
  );
}
