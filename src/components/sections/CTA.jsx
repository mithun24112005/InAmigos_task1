import React from "react";
import { links } from "../../data/siteData.js";

export default function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="container cta-inner">
        <div>
          <p className="kicker">Join the movement</p>
          <h2>Small actions can become lasting social impact.</h2>
        </div>
        <div className="cta-actions">
          <a className="button primary" href={links.donate} target="_blank" rel="noreferrer">
            Donate Now
          </a>
          <a className="button light" href={links.volunteer} target="_blank" rel="noreferrer">
            Join Us
          </a>
          <a className="button outline" href={links.website} target="_blank" rel="noreferrer">
            Visit Website
          </a>
        </div>
      </div>
    </section>
  );
}
