import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/ARMINION13" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="www.linkedin.com/in/rodrigo-girondo-perales-7292b62a4" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio by <a href="https://github.com/ARMINION13" target="_blank" rel="noreferrer">Rodrigo Girondo Perales</a> with 🐧</p>
    </footer>
  );
}

export default Footer;