import { useNavigate } from "react-router-dom";
import "../styles/footer.css";

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
            "Legacy Projects",
            "Current Projects",
            "Resedential Camps",
            "Our Magazine",
          ]}
        />
        <FooterSection
          title="DOMAINS"
          list={["Education", "Health", "Environment", "Society"]}
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
        />
      </div>
      <hr />
      <div className="footer-impt-links">
        <p>TCET-NSS. All rights reserved</p>
        <p>Meet the Developers</p>
        <ul>
          <li>Instagram</li>
          <li>LinkedIn</li>
          <li>WhatsApp</li>
        </ul>
      </div>
    </footer>
  );
}
