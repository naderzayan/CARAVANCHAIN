import React from "react";
import "../style/_aboutUs.scss";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <main>
      <NavBar />

      <section className="aboutUsContent">
        <h1 className="h1AboutUs">
          Making sense of logistics so you don’t have to
        </h1>

        <p className="p_h1AboutUs">
          About us – Caravan Supply Chain is a brokerage, <br />
          third-party logistics (3PL), and fourth-party logistics (4PL) service
          provider based in Burlington Ontario, Canada. <br />
          We provide full-service, asset-based third-party logistics solutions
          anywhere in North America. <br />
          Caravan Supply Chain, <br />
          a subsidiary of Caravan Group of Companies, <br />
          are supply chain experts with a focus and commitment to solving complex
          logistics challenges for our valued clients. <br />
          Using a blend of company assets and extensive carrier network, <br />
          we are able to bring capacity at the right cost to every solution.
          <br />
          We’re making sense of logistics, so you don’t have to. Get a rate
          today!
        </p>
      </section>

      <section className="aboutUsImageDiv">
        <img src="/internationalShipping.jpg" alt="" className="aboutUsImg" />
      </section>

      <Footer />
    </main>
  );
}
