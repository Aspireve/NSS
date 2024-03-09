import { useNavigate } from "react-router-dom";
import "../../styles/footer.css";

function FooterSection({ title, list, link }) {
    const navigate = useNavigate()
  return (
    <div className="section-div">
      <h3>{title}</h3>
      <ul>
        {list.map((item, idx) => (
          <li key={item} onClick={() => navigate(link[idx] || "../")}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer>
      <div className="links">
        <FooterSection
          title="TCET-NSS UNIT"
          list={["Home", "About Us", "Team", "Testimonials", "Projects"]}
          link={["../", "../about", "../team", "../testimonials", "../projects"]}
        />
        <FooterSection
          title="ABOUT US"
          list={[
            "What is NSS",
            "History",
            "Logo Significance",
            "Our Magazine",
          ]}
          link={["../about#what-is-nss", "../about#history", "../about#significance", "../about#what-is-nss", "../about#magazine"]}
        />
        <FooterSection
          title="DOMAINS"
          list={["Education", "Health", "Environment", "Society"]}
          link={["../projects?domain=Education", "../projects?domain=Health", "../projects?domain=Environment", "../projects?domain=Society"]}
        />
        <FooterSection
          title="TEAM"
          list={[
            "Chair Person",
            "Programme Officers",
            "Deputy Programme Officers",
            "Councils",
            "Junior Councils",
          ]}
          link={["../team#chairperson", "../team#programme-officer", "../team#deputy-programme-officer", "../team#council", "../team#junior-council"]}
        />
      </div>
      <hr />
      <div className="footer-impt-links">
        <p>TCET-NSS. All rights reserved</p>
        <p className="developers-link" onClick={() => navigate("../developers")}>Meet the Developers</p>
        <ul>
          <a rel="noopener noreferrer" href="https://www.instagram.com/tcetnssunit" target="blank" style={{textDecoration: "none", color: "inherit"}}><li>Instagram</li></a>
          <a rel="noopener noreferrer" href="https://x.com/nss_tcet" target="blank" style={{textDecoration: "none", color: "inherit"}}><li>Twitter</li></a>
        </ul>
      </div>
    </footer>
  );
}
