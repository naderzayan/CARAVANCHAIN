import React from "react";
import '../style/_contactUs.scss'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function ContactUs() {
  return (
    <main>
      <NavBar />
      <div className="mainOfContactUs">
        <h1>Send us an Email</h1>
        <p>
          Complete the following form to contact us and get in touch with a
          Caravan Supply Chain 3PL expert
        </p>
        <form className="sendEmail">
          <label>Email address : <span>*</span> </label>
          <input type="email" name="" id="" placeholder="enter your email here"/>
          <label>Tybe Message : <span>*</span> </label>
          <input type="text" name="" id="" className="textMessage" placeholder="leave you message here"/>
          <div className="sendEmailBtn">
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
      <Footer />
    </main>
  );
}
