import React, { useState } from "react";
import "./FieldReports.css";

const REVIEWS = [
  {
    stars: 5,
    quote:
      '"THIS SYSTEM REJECTS WEAKNESS. I\'VE COMPLETED MY MORNING DRILLS FOR 400 CONSECUTIVE DAYS. HABIT/CORE IS THE LAW."',
    initials: "M.V.",
    name: "MARCUS VANE",
    role: "HIGH-STAKES EXEC",
    accentColor: "#c8f135",
    textColor: "#0f0f0f",
  },
  {
    stars: 5,
    quote:
      '"FINALLY, A TRACKER THAT DOESN\'T LOOK LIKE A CANDY SHOP. BRUTAL, HONEST, AND EFFECTIVE."',
    initials: "S.K.",
    name: "SARA KANE",
    role: "OPERATIONS DESIGNER",
    accentColor: "#00F5A0",
    textColor: "#0f0f0f",
  },
  {
    stars: 5,
    quote:
      '"IF YOU CAN\'T HANDLE THE TRUTH OF YOUR OWN DATA, DON\'T DOWNLOAD THIS. IT\'S A MIRROR FOR YOUR DISCIPLINE."',
    initials: "J.D.",
    name: "JASON DRAKE",
    role: "ENDURANCE ATHLETE",
    accentColor: "#1a6ef5",
    textColor: "#ffffff",
  },
];

function StarRating({ count }) {
  return (
    <div className="fr-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`fr-star ${i < count ? "filled" : ""}`}
          viewBox="0 0 20 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="10,1 12.9,7 19.5,7.6 14.5,12 16.2,18.5 10,15 3.8,18.5 5.5,12 0.5,7.6 7.1,7" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="fr-card"
      style={{ "--delay": `${index * 0.12}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <StarRating count={review.stars} />

      <blockquote className="fr-quote">{review.quote}</blockquote>

      <footer className="fr-footer">
        <div
          className="fr-avatar"
          style={{
            background: review.accentColor,
            color: review.textColor,
          }}
        >
          {review.initials}
        </div>
        <div className="fr-author">
          <span className="fr-name">{review.name}</span>
          <span className="fr-role">{review.role}</span>
        </div>
      </footer>
    </article>
  );
}

export default function FieldReports() {
  return (
    <section className="fr-section">
      <h2 className="fr-heading">FIELD REPORTS</h2>

      <div className="fr-grid">
        {REVIEWS.map((review, i) => (
          <ReviewCard key={i} review={review} index={i} />
        ))}
      </div>
    </section>
  );
}
