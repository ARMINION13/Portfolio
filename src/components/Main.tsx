import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import face from '../assets/images/face.png';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={face} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ARMINION13" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="www.linkedin.com/in/rodrigo-girondo-perales-7292b62a4" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Rodrigo Girondo Perales</h1>
          <p>Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ARMINION13" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="www.linkedin.com/in/rodrigo-girondo-perales-7292b62a4" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;