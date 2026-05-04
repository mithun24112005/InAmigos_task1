import React from "react";
import SectionHeader from "../common/SectionHeader.jsx";
import { links } from "../../data/siteData.js";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div>
          <SectionHeader
            kicker="About"
            title="A youth-driven foundation turning service into action"
            text="Founded on September 23, 2020 by Govind Shukla, InAmigos Foundation works from Chhattisgarh with volunteers and partners across India."
          />
        </div>
        <div className="story-panel">
          <p>
            The foundation focuses on practical community needs: meals, school
            support, women-led skill development, animal welfare, green action,
            and internships that help young people grow through service.
          </p>
          <a href={links.about} target="_blank" rel="noreferrer">
            Read official about page
          </a>
        </div>
      </div>
    </section>
  );
}
