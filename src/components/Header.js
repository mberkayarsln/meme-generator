import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons"


const Header = () => {

    return (

        <header className="header-section">
            <h1 className="header-title">Meme Editor <FontAwesomeIcon icon={faPencil} /></h1>
            <span className="header-span">Create your memes in the easiest way
            </span>
        </header>
    )

}

export default Header;