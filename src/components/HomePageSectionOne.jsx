import React from "react";
import "../style/components/_homePageSectionOne.scss";

export default function HomePageSectionOne() {
  return (
    <main className="mainOfHomePageSectionOne">
      <h1>Why traders choose us</h1>

      <div className="homePageSectionOne">
        <div className="PartOfTheSection">
          <h3>Supply Chain Solutions</h3>
          <p>
            Always keeping unconditional customer satisfaction in mind,
            Caravanchain strives to serve it's customers cargoes with the most
            competitive pricing policy.
          </p>
        </div>

        <div className="PartOfTheSection">
          <h3>End to End Transportation</h3>
          <p>
            We take all necessary precautions from the moment we receive your
            shipments from you until they are delivered, and we guaratee a 99%
            undamaged delivery.
          </p>
        </div>

        <div className="PartOfTheSection">
          <h3>Contract Logistics</h3>
          <p>
            When solving emerging problems, we take the initiative and try to
            achieve the result in the simplest way. Thus, we provide faster
            feedback to our customers.
          </p>
        </div>
      </div>
    </main>
  );
}
