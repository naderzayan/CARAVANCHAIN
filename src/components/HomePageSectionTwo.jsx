import React from "react";
import { NavLink } from "react-router-dom";
import "../style/components/_homePageSectionTwo.scss";

export default function HomePageSectionTwo() {
  return (
    <main className="mainOfHomePageSectionTwo">
      <div>
        <img src="./03.jpg" alt="" />
      </div>
      <div className="vision_mission">
        <div>
          <h2>About us Vision</h2>
          <p>
            To be one of the indispensable service providers in the logistics
            industry without giving up it’s innovative approach.
          </p>
        </div>
        <div>
          <h2>Mission</h2>
          <p>
            To be a strategic logistics company that delivers logistics services
            that exceed customer expectations, integrates technological
            innovation into it’s processes, and delivers benefits to all
            customers through it’s sustainability approach.
          </p>
        </div>
        <div>
          <button>
            <NavLink to="/about_us">Read More</NavLink>
          </button>
        </div>
      </div>
    </main>
  );
}
