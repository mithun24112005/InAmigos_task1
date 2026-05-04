import React from "react";
import SectionHeader from "../common/SectionHeader.jsx";
import { trustBadges } from "../../data/siteData.js";

export default function TrustBadges() {
  return (
    <section className="trust section-band" aria-labelledby="trust-title">
      <div className="container">
        <SectionHeader
          kicker="Verified Foundation"
          title="Built on trust and transparency"
          text="Recognitions and registrations highlighted by InAmigos official sources."
        />
        <div className="badge-list" id="trust-title">
          {trustBadges.map((badge) => (
            <span className="trust-badge" key={badge}>
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
