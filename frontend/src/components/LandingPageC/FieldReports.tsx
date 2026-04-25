import React from "react";

interface Review {
  stars: number;
  quote: string;
  initials: string;
  name: string;
  role: string;
  accentColor: string;
  textColor: string;
}

const REVIEWS: Review[] = [
  {
    stars: 5,
    quote: '"IF YOU ARE READING THIS, HELLO — THIS IS THE DEVELOPER OF THIS WEBSITE, NICE TO MEET YOU"',
    initials: "A.C",
    name: "AYUSHMAN CHAKRABORTY",
    role: "DEVELOPER",
    accentColor: "#c8f135",
    textColor: "#0f0f0f",
  },
  {
    stars: 5,
    quote: '"THESE MESSAGES ARE HERE JUST FOR FUN, NO ACTUAL USE CASES WHATSOEVER. ITS NOT VIBECODED — THATS ALL I WOULD SAY"',
    initials: "A.C",
    name: "AYUSHMAN CHAKRABORTY",
    role: "DEVELOPER",
    accentColor: "#00F5A0",
    textColor: "#0f0f0f",
  },
  {
    stars: 5,
    quote: '"IF YOU ARE STILL READING THIS, IM SORRY FOR WASTING YOUR TIME. BYE"',
    initials: "A.C",
    name: "AYUSHMAN CHAKRABORTY",
    role: "DEVELOPER",
    accentColor: "#1a6ef5",
    textColor: "#ffffff",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          viewBox="0 0 20 19"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fill: i < count ? "#c8a800" : "transparent",
            stroke: i < count ? "#c8a800" : "#888",
            strokeWidth: "1.5px",
            background: "transparent",
          }}
        >
          <polygon points="10,1 12.9,7 19.5,7.6 14.5,12 16.2,18.5 10,15 3.8,18.5 5.5,12 0.5,7.6 7.1,7" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <article
      className="border-[2px] border-[#1a1a1a] p-8 flex flex-col gap-5 cursor-default
                 opacity-0 translate-y-5 animate-card-reveal
                 transition-[box-shadow,transform] duration-200 ease-in
                 hover:shadow-[6px_6px_0_#1a1a1a] hover:-translate-y-1"
      style={{ background: "#f9f9f7", animationDelay: `${index * 0.12}s` }}
    >
      <StarRating count={review.stars} />

      <blockquote
        className="italic font-semibold text-sm leading-loose text-[#0f0f0f] flex-1"
        style={{ background: "transparent" }}
      >
        {review.quote}
      </blockquote>

      <footer
        className="flex items-center gap-4 mt-auto pt-4 border-t border-[#e0e0e0]"
        style={{ background: "transparent" }}
      >
        <div
          className="w-11 h-11 shrink-0 flex items-center justify-center
                     font-extrabold text-xs tracking-wider
                     border-[2px] border-[#1a1a1a] select-none"
          style={{ background: review.accentColor, color: review.textColor }}
        >
          {review.initials}
        </div>
        <div className="flex flex-col gap-1" style={{ background: "transparent" }}>
          <span
            className="font-extrabold text-xs tracking-[0.15em] uppercase text-[#0f0f0f] leading-tight"
            style={{ background: "transparent" }}
          >
            {review.name}
          </span>
          <span
            className="text-[10px] font-semibold tracking-widest uppercase text-[#888]"
            style={{ background: "transparent" }}
          >
            {review.role}
          </span>
        </div>
      </footer>
    </article>
  );
}

export default function FieldReports() {
  return (
    <section
      className="py-20 px-10 border-t-[2.5px] border-b-[2.5px] border-[#0a0a0a]
                 max-md:py-12 max-md:px-5"
      style={{ background: "#2D5BFF" }}
    >
      <h2
        className="font-black text-[clamp(28px,4vw,44px)] tracking-[0.1em] uppercase
                   text-white text-center mb-12"
        style={{ background: "transparent" }}
      >
        FIELD REPORTS
      </h2>

      <div
        className="grid grid-cols-3 gap-6 max-w-[1200px] mx-auto
                   max-md:grid-cols-1 max-md:max-w-[520px]"
        style={{ background: "transparent" }}
      >
        {REVIEWS.map((review, i) => (
          <ReviewCard key={i} review={review} index={i} />
        ))}
      </div>
    </section>
  );
}
