import React from "react";
import Github from '../github-logo.png';
import './Body.css'
import SeacrhInput from "./SearchInput";
import Buttons from "./Buttons";

const Body = () => {
    return (
        <div>
            <h1>Ini Body</h1>
            <img src={Github} />
            <SeacrhInput />
            <Buttons />
        </div>
    )
}

export default Body