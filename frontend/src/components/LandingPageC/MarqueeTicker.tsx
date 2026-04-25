import React from "react";

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

const Separator = () => (
  <span
    className="font-bold text-base text-[#E0FF00] px-2 shrink-0 select-none"
    style={{ background: '#0a0a0a' }}
  >
    //
  </span>
);

const TickerTrack = () => (
  <div className="flex items-center whitespace-nowrap" aria-hidden>
    {ITEMS.map((item, i) => (
      <React.Fragment key={i}>
        <span
          className="font-semibold text-base tracking-[0.15em] uppercase text-[#F8F8F8]
                     px-7 py-3 cursor-default transition-colors duration-200 hover:text-[#E0FF00]"
          style={{ background: '#0a0a0a' }}
        >
          {item}
        </span>
        <Separator />
      </React.Fragment>
    ))}
  </div>
);

export default function MarqueeTicker() {
  return (
    <div
      className="w-full overflow-hidden flex items-center
                 border-t-[2.5px] border-b-[2.5px] border-[#0a0a0a]
                 select-none relative"
      style={{ background: '#0a0a0a', height: '52px' }}
      role="marquee"
      aria-label="Highlights"
    >
      <div
        className="absolute top-0 left-0 bottom-0 w-20 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to right, #0a0a0a 0%, transparent 100%)' }}
      />
      <div
        className="absolute top-0 right-0 bottom-0 w-20 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to left, #0a0a0a 0%, transparent 100%)' }}
      />

      <div className="flex w-max animate-ticker">
        <TickerTrack />
        <TickerTrack />
      </div>
    </div>
  );
}
