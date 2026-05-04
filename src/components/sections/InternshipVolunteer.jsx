import React from "react";
import SectionHeader from "../common/SectionHeader.jsx";
import { links, roles } from "../../data/siteData.js";

export default function InternshipVolunteer() {
  return (
    <section className="internship section-band" id="volunteer">
      <div className="container volunteer-grid">
        <div>
          <SectionHeader
            kicker="Internship / Volunteer"
            title="Serve, learn, and build practical skills"
            text="InAmigos recruits volunteers for 1-3 month internship programs across field, creative, community, and fundraising roles."
          />
          <div className="role-list">
            {roles.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>
        </div>
        <div className="volunteer-note">
          <h3>Why it matters</h3>
          <p>
            Interns contribute to real campaigns while gaining credible NGO,
            CSR, and social impact experience.
          </p>
          <a className="button primary" href={links.volunteer} target="_blank" rel="noreferrer">
            Apply to Volunteer
          </a>
        </div>
      </div>
    </section>
  );
}
