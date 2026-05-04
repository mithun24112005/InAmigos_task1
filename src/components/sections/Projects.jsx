import React from "react";
import SectionHeader from "../common/SectionHeader.jsx";
import { projects } from "../../data/siteData.js";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <SectionHeader
          kicker="Projects"
          title="Six focused initiatives, one shared purpose"
          text="Each project addresses a real community need with clear action and volunteer participation."
        />
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.accent}`} key={project.name}>
              <span>{project.tag}</span>
              <h3>{project.name}</h3>
              <p>{project.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
