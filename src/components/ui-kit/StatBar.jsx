import React from "react";

const TONES = {
  money: { fill: "#8a5a2b", track: "#e4d7bf" },
  wellbeing: { fill: "#4f6b4a", track: "#dcdcc9" },
  hope: { fill: "#a8452f", track: "#e6d3c6" },
};

export default function StatBar({
  label,
  value,
  display,
  delta,
  tone = "money",
  compact = false,
}) {
  const colors = TONES[tone] || TONES.money;
  const pct = Math.max(0, Math.min(100, value));

  return (
    <div>
      <div className="flex items-baseline justify-between gap-2">
        <span className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </span>
        <span className="font-display text-sm font-bold tabular-nums">
          {display}
          {typeof delta === "number" && delta !== 0 && (
            <span
              className={`ml-1.5 font-mono text-[0.58rem] ${
                delta > 0 ? "text-[#4f6b4a]" : "text-accent"
              }`}
            >
              {delta > 0 ? "+" : "−"}
              {Math.abs(delta)}
            </span>
          )}
        </span>
      </div>
      <div
        className={`mt-1.5 overflow-hidden rounded-full ${
          compact ? "h-1" : "h-1.5"
        }`}
        style={{ backgroundColor: colors.track }}
      >
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${pct}%`, backgroundColor: colors.fill }}
        />
      </div>
    </div>
  );
}