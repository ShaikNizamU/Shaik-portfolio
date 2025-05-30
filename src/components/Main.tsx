import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram"; // Add this import
import "../assets/styles/Main.scss";
import ShaikImage from "../assets/images/Shaik.png";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={ShaikImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            {/* Removed GitHub, added Instagram */}
            <a
              href="https://www.instagram.com/shaik_nizzzu_030"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/shaik-nizam-5393812a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Shaik Nizam</h1>
          <p>React Native Developer</p>

        </div>
      </div>
    </div>
  );
}

export default Main;
