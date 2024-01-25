import React from "react";
import Style from "../StyleSheets/Navbar.module.css"
import { Link } from "react-router-dom";
import img from "../Assets/search.png"
import profile from "../Assets/profile.png"

const NavBar = () => {

    return(
        <header>
            <div className={Style.headContent}>
                <div className={Style.logoCont}>
                    <div className={Style.logo}>
                        <span className={Style.img_text}>
                            <Link to={"/"} >ANANT</Link>
                        </span>
                    </div>
                </div>
                <nav >
                    <ul className={Style.list}>
                        <li><Link to={"/screener"}>Screener</Link></li>
                        <li><Link to={"/indicators"}>Indicators</Link></li>
                        <li><Link to= {"/maps"}>Maps</Link></li>
                        <li><Link to= {"/calendar"}>Calendar</Link></li>
                        <li><Link to={"/personalised"}>Personalised</Link></li>
                        <img className={Style.search} src={img} alt="Search element"></img>
                        <img className={Style.profile} src={profile} alt="Profile element"></img>
                    </ul>
                </nav>
                
                <ham />
            </div>
        </header>
    )
}


export default NavBar;