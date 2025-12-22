import React from "react";
import NavBar from "../components/NavBar";
import { NavLink } from "react-router-dom";
import '../style/_homepage.scss'
import Footer from "../components/Footer";
import HomePageSectionOne from "../components/HomePageSectionOne";
import HomePageSectionTwo from "../components/HomePageSectionTwo";
import HomePageSectionThree from "../components/HomePageSectionThree";
import HomePageSectionOneFour from "../components/HomePageSectionFour";
import Partners from "../components/Partners";
import RequestCallBack from "../components/RequestCallBack";
import HomePageSectionFour from "../components/HomePageSectionFour";

export default function HomePage() {
  return (
    <main>
      <NavBar />
      <section class="header">
        <h1>CONNECT YOUR</h1>
        <h1>BUSINESS TO A WORLD</h1>
        <h1>OF POSSIBILITIES</h1>
        <h6>it is along established fact that a reader will be distracted</h6>
        <h6>by the readable content of a page when looking at its layout</h6>
        <button class="btn_warning">
          <NavLink to='/services'>
            Viwe Services
          </NavLink>
        </button>
      </section>
      <HomePageSectionOne />
      <HomePageSectionTwo />
      <HomePageSectionThree />
      <HomePageSectionFour />
      <Partners />
      <RequestCallBack />
      <Footer />
    </main>
  );
}
