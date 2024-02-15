import React, { useState } from "react";
import "../styles/about/magazine.css";
import magazine2022 from "../assets/about/Magazine2022.png";
import magazine2023 from "../assets/about/Magazine2023.png";
import magazine2024 from "../assets/about/Magazine2024.png";

const magazineData = [
  {
    image: magazine2022,
    link: "mag 1"
  },
  {
    image: magazine2023,
    link: "mag 1"
  },
  {
    image: magazine2024,
    link: "mag 1"
  },
];

export default function Magazine() {
  const [focusMag, setFocusMag] = useState(null)
  const handleDownload = () => {
    console.log("here")
    const downloadLink = document.createElement('a');
    downloadLink.href = `/pdf/NSS Magazine 2.0.pdf`;
    downloadLink.download = 'NSS Magazine 2.0.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div className="magazine-container">
      <h2>Our Magazine</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis error
        impedit nostrum porro qui hic. Quae doloremque quaerat illum eum.
      </p>
      <div className="magazine-page-container">
        {magazineData.map((mag, idx) => (
          <div onClick={() => handleDownload()} onMouseEnter={() => setFocusMag(idx)} onMouseLeave={() => setFocusMag(null)} className={`magazine-image ${focusMag === idx? "hover" : focusMag === null ? "" : "blacked"}`} >
            <img src={mag.image} alt={mag.link}/>
          </div>
        ))}
      </div>
    </div>
  );
}
