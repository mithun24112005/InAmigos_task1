import React from "react";

export default function SectionHeader({ kicker, title, text }) {
  return (
    <div className="section-header">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
