import React from "react";

export default function PageHeading({ kicker, title, lede, stamp, align = "left" }) {
  return (
    <div
      className={`relative ${align === "center" ? "text-center" : "text-left"}`}
    >
      {kicker && <p className="kicker">{kicker}</p>}
      <h1 className="headline mt-2 text-3xl sm:text-4xl md:text-5xl">{title}</h1>
      {lede && (
        <p
          className={`mt-4 text-[0.95rem] leading-relaxed text-foreground/75 ${
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {lede}
        </p>
      )}
      {stamp && (
        <span className="stamp mt-5 animate-stamp">{stamp}</span>
      )}
    </div>
  );
}