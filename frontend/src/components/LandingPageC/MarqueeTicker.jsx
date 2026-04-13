import React from "react";
import "./MarqueeTicker.css";

const ITEMS = [
  "99% SUCCESS RATE",
  "NO EXCUSES",
  "PRECISION TRACKING",
  "DOMINATE YOUR GOALS",
  "BUILT DIFFERENT",
  "ZERO LIMITS",
  "ELITE PERFORMANCE",
  "SHOW UP EVERY DAY",
];

const Separator = () => <span className="ticker-separator">//</span>;

const TickerTrack = () => (
  <div className="ticker-track" aria-hidden>
    {ITEMS.map((item, i) => (
      <React.Fragment key={i}>
        <span className="ticker-item">{item}</span>
        <Separator />
      </React.Fragment>
    ))}
  </div>
);

export default function MarqueeTicker() {
  return (
    <div className="ticker-wrapper" role="marquee" aria-label="Highlights">
      <div className="ticker-belt">
        {/* Duplicate tracks for seamless loop */}
        <TickerTrack />
        <TickerTrack />
      </div>
    </div>
  );
}
