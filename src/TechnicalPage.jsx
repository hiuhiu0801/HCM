import React from "react";

export default function TechnicalPage({ page }) {
  const Icon = page.icon;

  return (
    <div className="technical-page">
      <img className="technical-bg" src={page.image} alt={page.title} />

      <div className="technical-overlay" />

      <div className="tech-grid" />

      <div className="tech-header">
        <div className="tech-icon" style={{ borderColor: page.color }}>
          <Icon size={22} color={page.color} />
        </div>

        <div>
          <p className="tech-kicker">HISTORICAL SYSTEM MODULE</p>
          <h2>{page.title}</h2>
          <p>{page.subtitle}</p>
        </div>
      </div>

      <div className="tech-tags">
        {page.tags.map((tag) => (
          <span key={tag} style={{ borderColor: `${page.color}88` }}>
            {tag}
          </span>
        ))}
      </div>

      <div className="tech-map-node" style={{ borderColor: page.color }}>
        <div style={{ backgroundColor: page.color }} />
      </div>

      <div className="tech-metrics">
        {page.metrics.map((item) => (
          <div className="tech-card" key={item.label}>
            <span>{item.label}</span>
            <strong style={{ color: page.color }}>{item.value}</strong>
          </div>
        ))}
      </div>

      <div className="tech-footer-line" style={{ background: page.color }} />
    </div>
  );
}