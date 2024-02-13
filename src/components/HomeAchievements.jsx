import { useEffect, useRef } from "react";
import nss_logo from "../assets/static_images/nss_logo.svg";
import lives_affected from "../assets/home/lives-affected.webp";
import leadership from "../assets/home/leadership_and_democracy.webp";
import trees_planted from "../assets/home/tree-plantation.webp";
import "../styles/home/achievements.css";
import useScrollVisibility from "../hooks/useScrollAnimation";

export default function Achievements() {
  const achievementsTitleRef = useRef(null);
  const sliderRef = useRef(null);
  const { isVisible } = useScrollVisibility(achievementsTitleRef, sliderRef);

  useEffect(() => {
    const counter = document.getElementsByClassName("counter-incrementer");
    const final_values = [
      `${parseInt(counter[0].getAttribute("data-ctr"))}`,
      `${parseInt(counter[1].getAttribute("data-ctr"))}`,
      `${parseInt(counter[2].getAttribute("data-ctr"))}`,
      `${parseInt(counter[3].getAttribute("data-ctr"))}`,
    ];
    const itrs = [1, 6, 6, 3];
    function incrementCounter1() {
      if (parseInt(counter[0].innerHTML) < final_values[0]) {
        counter[0].innerHTML = parseInt(counter[0].innerHTML) + itrs[0];
        setTimeout(incrementCounter1, 160);
      }
    }
    function incrementCounter2() {
      if (parseInt(counter[1].innerHTML) < final_values[1]) {
        counter[1].innerHTML = parseInt(counter[1].innerHTML) + itrs[1];
        setTimeout(incrementCounter2, 160);
      }
    }
    function incrementCounter3() {
      if (parseInt(counter[2].innerHTML) < final_values[2]) {
        counter[2].innerHTML = parseInt(counter[2].innerHTML) + itrs[2];
        setTimeout(incrementCounter3, 170);
      }
    }
    function incrementCounter4() {
      if (parseInt(counter[3].innerHTML) < final_values[3]) {
        counter[3].innerHTML = parseInt(counter[3].innerHTML) + itrs[3];
        setTimeout(incrementCounter4, 150);
      }
    }
    if(isVisible) {
      incrementCounter1();
      incrementCounter2();
      incrementCounter3();
      incrementCounter4();
    }
  });
  return (
    <div className={`home-achievements ${isVisible ? "appear" : ""}`} ref={achievementsTitleRef}
    >
      <h2 id="home-achievements-header" className={isVisible ? "home-domains-header" : ""} ref={sliderRef}>Achievements</h2>
      <p>
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
        voluptatum ea qui provident sunt excepturi. Unde mollitia obcaecati eos,
        optio sit nisi neque modi libero sequi vel ratione magni cupiditate?
        Aperiam, libero. Corporis ab iure dolorum asperiores aliquam sint autem
        sed, suscipit tenetur soluta ullam adipisci voluptates ipsam labore,
        deserunt itaque rerum, eius error vero sit totam iusto. Cupiditate,
        quod.
      </p>
      <div className="home-achievements-incrementer">
        <h3 className="respo-show">Established Since</h3>
        <div className="achievement">
          <h3>Established Since</h3>
          <img src={nss_logo} alt="NSS Logo" />
          <div className="incrementer make-flex">
            <div className="incrementer">
              <p className="counter-incrementer" data-ctr="18">
                {" "}
                0
              </p>
            </div>
            <p>Years</p>
          </div>
          <p>Years</p>
        </div>
        <h3 className="respo-show">People Affected</h3>
        <div className="achievement">
          <h3>People Affected</h3>
          <img src={lives_affected} alt="NSS Logo" />
          <div className="incrementer make-flex">
            <div className="incrementer">
              <p className="counter-incrementer" data-ctr="120">
                {" "}
                0
              </p>
              <p>,000</p>
            </div>
            <p>Lives</p>
          </div>
          <p>Lives</p>
        </div>

        <h3 className="respo-show">Total Volunteers</h3>
        <div className="achievement">
          <h3>Total Volunteers</h3>
          <img src={leadership} alt="NSS Logo" />
          <div className="incrementer make-flex">
            <div className="incrementer">
              <p className="counter-incrementer" data-ctr="135">
                {" "}
                0
              </p>
              <p>0</p>
            </div>
            <p>Volunteers</p>
          </div>
          <p>Volunteers</p>
        </div>

        <h3 className="respo-show">Volunteer Hours</h3>
        <div className="achievement">
          <h3>Volunteer Hours</h3>
          <img src={trees_planted} alt="NSS Logo" />
          <div className="incrementer make-flex">
            <div className="incrementer">
              <p className="counter-incrementer" data-ctr="90">
                {" "}
                0
              </p>
              <p>,000</p>
            </div>
            <p>Hours</p>
          </div>
          <p>Hours</p>
        </div>
      </div>
    </div>
  );
}
