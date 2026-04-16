import React, { useState } from "react";
import "./FieldReports.css";

const REVIEWS = [
  {
    stars: 5,
    quote:
      '"IF YOU ARE READING THIS, HELLO THIS THE DEVELOPER OF THIS WEBSITE , NICE TO MEET YOU"',
    initials: "A.C",
    name: "AYUSHMAN CHAKRABORTY",
    role: "DEVELOPER",
    accentColor: "#c8f135",
    textColor: "#0f0f0f",
  },
  {
    stars: 5,
    quote:
      '"THESE MESSAGES ARE HERE JUST FOR FUN, NO ACTUAL USE CASES WHAT SO EVER, ITS NOT VIBECODED THATS ALL I WOULD SAY"',
    initials: "A.C",
    name: "AYUSHMAN CHAKRABORTY",
    role: "DEVELOPER",
    accentColor: "#00F5A0",
    textColor: "#0f0f0f",
  },
  {
    stars: 5,
    quote:
      '"IF YOU ARE STILL READING THIS , IM SORRY FOR WASTING YOUR TIME , BYE"',
    initials: "A.C",
    name: "AYUSHMAN CHAKRABORTY",
    role: "DEVELOPER",
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
