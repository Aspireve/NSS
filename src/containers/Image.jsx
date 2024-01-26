import { useEffect, useRef } from "react";
import hero_reduced from "../assets/home_reduced/hero-section.jpg"
import "../styles/image.css"

export const Image = ({ simple_image, HD_image, alt }) => {
  const imageRef = useRef(null);
  useEffect(() => {
    const img = imageRef.current.querySelector("img");
    const loaded = () => {
      imageRef.current.classList.add("image-loaded");
      imageRef.current.classList.remove("blurry-image");
    };
    img.complete ? loaded() : img.addEventListener("load", loaded);
  }, []);
  return (
    <div
      className="image-loader blurry-image"
      style={{ 
        backgroundImage: simple_image 
    }}
      ref={imageRef}
    >
      <img src={HD_image} class="loaded-image" alt={alt} loading="lazy" />
    </div>
  );
};
