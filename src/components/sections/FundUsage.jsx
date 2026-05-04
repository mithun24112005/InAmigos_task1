import React from "react";
import SectionHeader from "../common/SectionHeader.jsx";
import { fundUsage } from "../../data/siteData.js";

export default function FundUsage() {
  return (
    <section className="funds section-band" id="funds">
      <div className="container">
        <SectionHeader
          kicker="Fund Usage"
          title="Where support creates visible change"
          text="The foundation PDF lists welfare drives, operations, compliance, tools, and volunteer support as key fund uses."
        />
        <div className="fund-grid">
          {fundUsage.map((item) => (
            <article className="fund-card" key={item}>
              <span aria-hidden="true">+</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
