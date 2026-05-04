import React from "react";
import SectionHeader from "../common/SectionHeader.jsx";
import { gallery } from "../../data/siteData.js";

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <SectionHeader
          kicker="Gallery"
          title="Glimpses of work"
          text="Real images extracted from the official InAmigos foundation PDF provided for the task."
        />
        <div className="gallery-grid">
          {gallery.map((item) => (
            <figure className="gallery-item" key={item.src}>
              <img src={item.src} alt={item.title} loading="lazy" />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
