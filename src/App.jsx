import React from "react";
import About from "./components/sections/About.jsx";
import CTA from "./components/sections/CTA.jsx";
import Footer from "./components/sections/Footer.jsx";
import FundUsage from "./components/sections/FundUsage.jsx";
import Gallery from "./components/sections/Gallery.jsx";
import Hero from "./components/sections/Hero.jsx";
import ImpactStats from "./components/sections/ImpactStats.jsx";
import InternshipVolunteer from "./components/sections/InternshipVolunteer.jsx";
import Projects from "./components/sections/Projects.jsx";
import TrustBadges from "./components/sections/TrustBadges.jsx";

export default function App() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <About />
      <ImpactStats />
      <Projects />
      <FundUsage />
      <Gallery />
      <InternshipVolunteer />
      <CTA />
      <Footer />
    </>
  );
}
