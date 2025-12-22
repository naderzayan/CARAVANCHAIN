import React from "react";
import { NavLink } from "react-router-dom";
import "../style/components/_navbar.scss";

export default function NavBar() {
  return (
    <main className="navbar">
      <div className="logoOfCompany">
        <img src="camel.svg" alt="logo"  className="logo"/>
        <h5>CARAVAN CHAIN</h5>
      </div>
      <div className="navbar">
        <NavLink to="/home_page">Home</NavLink>
        <NavLink to="/about_us">AboutUs</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact_us">ContactUs</NavLink>
      </div>
    </main>
  );
}
