import React from "react";
import { links } from "../../data/siteData.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2>InAmigos Foundation</h2>
          <p>Ward No. 5, Gram Post, Sipat Ujwal Nagar, Bilaspur, Chhattisgarh 495555</p>
          <p>
            <a href="mailto:support@inamigosfoundation.org.in">support@inamigosfoundation.org.in</a>
            {" | "}
            <a href="tel:+916267309902">+91 626 730 9902</a>
          </p>
        </div>
        <div>
          <h3>Official Links</h3>
          <div className="footer-links">
            <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={links.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={links.facebook} target="_blank" rel="noreferrer">Facebook</a>
            <a href={links.twitter} target="_blank" rel="noreferrer">X / Twitter</a>
            <a href={links.youtube} target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
        <div>
          <h3>Sources</h3>
          <div className="footer-links">
            <a href={links.website} target="_blank" rel="noreferrer">Official website</a>
            <a href={links.about} target="_blank" rel="noreferrer">About page</a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn updates</a>
          </div>
          <p className="hashtags">#InAmigos #InAmigosFoundation #IAF #ServeWithPurpose</p>
        </div>
      </div>
    </footer>
  );
}
