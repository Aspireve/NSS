import React from "react";
import "../styles/home/map.css";

export default function Map() {
  return (
    <div className="address-map">
      <div className="map-container">
        <iframe
        title="nss-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7457230581185!2d72.87203067475099!3d19.20630534786981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1702194158407!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{border: 0}}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="map-address">
        <h3>TCET-NSS UNIT</h3>
        <p>
          Thakur College of Engineering and Technology <br />
          A-Block, Thakur Educational Campus, Shayamnarayan Thakur Marg
          <br />
          Thakur Village kandivali(E). Mumbai 400101
        </p>
        <p>Tel: <a href="tel:+919869221812" target="blank" style={{textDecoration: "none", color: "inherit"}}>+919869221812</a></p>
        <p>Email: <a href="mailto:tcet.nss@tcetmumbai.in" target="blank" style={{textDecoration: "none", color: "inherit"}}>tcet.nss@tcetmumbai.in</a></p>
      </div>
    </div>
  );
}
