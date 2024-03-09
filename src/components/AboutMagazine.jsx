import React, { useState } from "react";
import "../styles/about/magazine.css";
import magazine2022 from "../assets/about/Magazine2022.png";
import magazine2023 from "../assets/about/Magazine2023.png";
import magazine2024 from "../assets/about/Magazine2024.png";

const magazineData = [
  {
    image: magazine2022,
    title: "Magazine 2.1.pdf"
  },
  {
    image: magazine2023,
    title: "Magazine 2.2.pdf"
  },
  {
    image: magazine2024,
    title: "Magazine 3.1.pdf"
  },
];

export default function Magazine() {
  const [focusMag, setFocusMag] = useState(null)
  const handleDownload = (title) => {
    console.log("here")
    const downloadLink = document.createElement('a');
    downloadLink.href = `/pdf/${title}`;
    downloadLink.download = `NSS ${title}`;
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
          <div onClick={() => handleDownload(mag.title)} onMouseEnter={() => setFocusMag(idx)} onMouseLeave={() => setFocusMag(null)} className={`magazine-image ${focusMag === idx? "hover" : focusMag === null ? "" : "blacked"}`} >
            <img src={mag.image} alt={mag.link}/>
          </div>
        ))}
      </div>
    </div>
  );
}
