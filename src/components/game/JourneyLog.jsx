import React from "react";

export default function JourneyLog({ log = [], onLight = false }) {
  if (!log.length) {
    return (
      <p className="text-xs leading-relaxed text-muted-foreground">
        Your decisions will be recorded here, year by year, like entries in a
        ledger.
      </p>
    );
  }

  return (
    <ol className="space-y-3">
      {log.map((entry, i) => (
        <li key={`${entry.year}-${i}`} className="relative border-l border-border/80 pl-3.5">
          <span
            className={`absolute -left-[3px] top-1.5 h-[5px] w-[5px] rounded-full ${
              onLight ? "bg-primary/60" : "bg-accent/70"
            }`}
          />
          <p className="font-mono text-[0.52rem] uppercase tracking-[0.18em] text-muted-foreground">
            {entry.year}
          </p>
          <p className="mt-0.5 text-[0.8rem] leading-snug text-foreground/75">
            {entry.choiceLabel}
          </p>
        </li>
      ))}
    </ol>
  );
}