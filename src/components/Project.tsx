import React from "react";
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/ARMINION13/Swingy" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ARMINION13/Swingy" target="_blank" rel="noreferrer"><h2>Swingy</h2></a>
                <p>Maven project about making a simple rpg game.</p>
            </div>
            <div className="project">
                <a href="https://github.com/ARMINION13/avaj-launcher" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ARMINION13/avaj-launcher" target="_blank" rel="noreferrer"><h2>Avaj-launcher</h2></a>
                <p>Java project about creating a simple airport management simulation based on a UML diagram.</p>
            </div>
            <div className="project">
                <a href="https://github.com/ARMINION13/Piscine_Data_Science" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ARMINION13/Piscine_Data_Science" target="_blank" rel="noreferrer"><h2>Piscine Data Science</h2></a>
                <p>A 2 weeks course to learn about python, sql, postgreSQL and machine learning.</p>
            </div>
            <div className="project">
                <a href="https://github.com/ARMINION13/Minecraft-Server-Deployer" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ARMINION13/Minecraft-Server-Deployer" target="_blank" rel="noreferrer"><h2>Minecraft Server Deployer</h2></a>
                <p>Docker Compose file to deploy moded minecraft servers in windows.</p>
            </div>
            <div className="project">
                <a href="https://github.com/ARMINION13/Transcendence" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ARMINION13/Transcendence" target="_blank" rel="noreferrer"><h2>Transcendence</h2></a>
                <p>Simple multiplayer pong website made with nodejs, angular and postgreSQL.</p>
            </div>
            <div className="project">
                <a href="https://github.com/ARMINION13/Cub3d" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ARMINION13/Cub3d" target="_blank" rel="noreferrer"><h2>Cub3d</h2></a>
                <p>Prototipe of a worlfenstein 3d type game made with C, OpenGL and X11.</p>
            </div>
            <div className="project">
                <a href="https://github.com/ARMINION13/ft_containers" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ARMINION13/ft_containers" target="_blank" rel="noreferrer"><h2>Ft_containers</h2></a>
                <p>Recreation of C++ basic classes like maps, vectors, list and stacks.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;