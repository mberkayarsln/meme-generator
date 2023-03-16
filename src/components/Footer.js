import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return(
        <section className="footer-section">
            <div className="icon-div">
                <a href="https://github.com/mberkayarsln/meme-generator" target="_blank" className="github-icon"><FontAwesomeIcon icon={faGithub}/></a>
            </div>
        </section>
    )  
}

export default Footer;