import teamNSS from "../../assets/home/team-NSS.jpg"
import teamNSSReduced from "../../assets/home_reduced/team_NSS.webp"
import Image from "../../containers/Image"
import "../../styles/home/hero.css";
 
const Hero = () => {
  return (
    <div  className='hero-section'>
        <Image simple_image={teamNSSReduced} HD_image={teamNSS} alt="NSS Team "/>
        <div className='hero-text'>
            <h2>TCET-NSS UNIT</h2>
            <h3>Not me but You</h3>
        </div>
    </div>
  )
}
export default Hero
