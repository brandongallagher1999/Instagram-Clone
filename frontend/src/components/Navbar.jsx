import React from "react";
import instagramLogo from "../pictures/instagram_logo.png";
import homeButton from "../pictures/home_button.png";
import messengerIcon from "../pictures/messenger_icon.jpg";
import heartIcon from "../pictures/heart_icon.png";
import "../css/navbar.css";

function Navbar()
{
    return (
        <div className="main-navbar">
            <a href="/">
                <img src={instagramLogo} height="115px" width= "115px"></img>
            </a>

            <input className="input is-normal" type="text" placeholder="Search" style={{height: "1.5em", width: "12em", marginTop: "0.5vh"}}></input>

            <div className="end-navbar">
                <a href="/">
                    <img src={homeButton} height="25px" width="25px"></img>
                </a>
                
                
                <a href="/">
                    <img src={messengerIcon} height="25px" width="25px"></img>
                </a>

                <a href="/">
                    <img src={heartIcon} height="25px" width="25px" style={{marginBottom: "-0.30vh"}}></img>
                </a>
            </div>

            
        </div>

    );
}

export default Navbar;