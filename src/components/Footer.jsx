import React from "react";
import { NavLink } from "react-router-dom";
import "../style/components/_footer.scss";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { MdContactMail } from "react-icons/md";


export default function Footer() {
  return (
    <main className="mainOfFooter">
      <div>
        <div className="logoOfCompany">
          <img src="/camel.svg" alt="" className="logo"/>
          <p className="title">CARAVAN CHAIN</p>
        </div>
        <p>
          The intellectual property rights to <br />
          the advertising content and published materials are entirely <br />
          owned by a specific party CARAVAN CHAIN <br />
        </p>
      </div>
      <div>
        <ul className="navigation">
          <p className="title">Navigation</p>
          <NavLink to="/home_Page"> <FaHome /> Home</NavLink>
          <NavLink to="/about_us"> <IoInformationCircleOutline /> AboutUs</NavLink>
          <NavLink to="/services"> <GrServices /> Services</NavLink>
          <NavLink to="/contact_us"> <MdContactMail /> ContactUs</NavLink>
        </ul>
      </div>
      <div>
        <p className="title">Get in touch</p>
        <p className="titlesvg"> <FaLocationDot /> 61 Smoha St. El-Rowda Alexandria</p>
        <p className="titlesvg"> <FaPhoneAlt /> 201014600843</p>
        <p className="titlesvg"> <FaPhoneAlt /> 201282946701</p>
        <p className="titlesvg"> <MdEmail /> naderahmed.na49@gmail.com</p>
      </div>
      <div>
        <p className="title">Social network</p>
        <div className="Social">
          <NavLink className='twitter'> <BsTwitterX /> </NavLink>
          <NavLink className='facebook'> <FaFacebook /> </NavLink>
          <NavLink className='instagram'> <FaInstagram /> </NavLink>
          <NavLink className='telegram'> <FaTelegram /> </NavLink>
        </div>
      </div>
    </main>
  );
}
