import React from 'react'
import Style from "../StyleSheets/Footer.module.css"
import twitter from "../Assets/twitter.svg"
import linkdein from "../Assets/linkdein.svg"
import instagram from '../Assets/instagram.svg'
import facebook from '../Assets/facebook.svg'

function Footer() {
  return (
    <>

    <div className={Style.bottomPanel}>
       <span className={Style.privacy}>Privacy Settings</span>
       <span className={Style.advertise}>Advertise</span>
       <span className={Style.contact}>Contact</span>
       <span className={Style.help}>Help</span>
       <span className={Style.aboutus}>About Us</span>
    </div>

    <div className={Style.container}>
      <div className={Style.follow}>Follow Us</div>
    </div>
    
    <div className={Style.bottomPanel}>
        
    </div>

    <div className={Style.group}>
        <img src={twitter} className={Style.twitter} alt='twitter logo'></img>
        <img src={linkdein} className={Style.linkdein} alt='linkdein logo'></img>
        <img src={instagram} className={Style.instagram} alt='instagram logo'></img>
        <img src={facebook} className={Style.facebook} alt='facebook logo'></img>
    </div>
    </>
  )
}

export default Footer
