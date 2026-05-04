import React from "react";
import { links, roles } from "../../data/siteData.js";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href={links.website} target="_blank" rel="noreferrer">
          <img src="/assets/logo.jpg" alt="InAmigos Foundation logo" />
        </a>
        <div className="nav-right">
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#gallery">Gallery</a>
            <a href="#volunteer">Volunteer</a>
          </div>
          <a className="nav-donate" href={links.donate} target="_blank" rel="noreferrer">
            Donate
          </a>
        </div>
      </nav>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">NGO Awareness Webpage</p>
          <h1>InAmigos Foundation</h1>
          <p className="tagline">Uniting Minds For Change</p>
          <p className="hero-text">
            A Section 8 NGO from Bilaspur creating impact through education,
            food support, women empowerment, animal care, sustainability, and
            youth development.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={links.donate} target="_blank" rel="noreferrer">
              Donate
            </a>
            <a className="button secondary" href={links.volunteer} target="_blank" rel="noreferrer">
              Join as Volunteer
            </a>
          </div>
          <div className="hero-trust" aria-label="Trust indicators">
            <span>80G Certified</span>
            <span>CSR-1 Registered</span>
            <span>ISO 9001:2015</span>
          </div>
        </div>

        <form className="volunteer-card" onSubmit={(event) => event.preventDefault()}>
          <p className="form-label">Volunteer Interest</p>
          <h2>Become an Amigo</h2>
          <label>
            Full Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Area of Interest
            <select name="interest" defaultValue="">
              <option value="" disabled>
                Select a role
              </option>
              {roles.map((role) => (
                <option key={role}>{role}</option>
              ))}
            </select>
          </label>
          <a className="button form-button" href={links.volunteer} target="_blank" rel="noreferrer">
            Open Official Form
          </a>
        </form>
      </div>
    </section>
  );
}
