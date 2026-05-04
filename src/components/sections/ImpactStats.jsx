import React from "react";
import Counter from "../common/Counter.jsx";
import SectionHeader from "../common/SectionHeader.jsx";
import { stats } from "../../data/siteData.js";

export default function ImpactStats() {
  return (
    <section className="impact section-band" aria-labelledby="impact-title">
      <div className="container">
        <SectionHeader
          kicker="Impact Stats"
          title="Real numbers from InAmigos sources"
          text="A quick snapshot of measurable work across welfare, education, environment, and skill development."
        />
        <div className="stats-grid" id="impact-title">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <strong>
                <Counter value={stat.value} suffix={stat.suffix} />
              </strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
