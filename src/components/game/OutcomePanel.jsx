import React from "react";
import { ArrowRight, BookOpen } from "lucide-react";

export default function OutcomePanel({
  choice,
  character,
  onContinue,
  isLast,
}) {
  const labels = character.statLabels;
  const rows = [
    { key: "money", label: labels.money, value: choice.effects.money, money: true },
    { key: "wellbeing", label: labels.wellbeing, value: choice.effects.wellbeing },
    { key: "hope", label: labels.hope, value: choice.effects.hope },
  ];

  return (
    <div className="animate-rise">
      <div className="paper-card relative overflow-hidden">
        <div className="border-b border-black/40 bg-ink px-5 py-2.5 sm:px-7">
          <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-[hsl(var(--gold))]">
            The consequence
          </span>
        </div>

        <div className="px-5 py-6 sm:px-7 sm:py-8">
          <p className="font-display text-lg font-semibold leading-snug text-foreground sm:text-xl">
            “{choice.label}”
          </p>
          <p className="mt-4 text-[0.95rem] leading-[1.75] text-foreground/80 text-pretty">
            {choice.outcome}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
            {rows.map((row) => (
              <div
                key={row.key}
                className="paper-inset flex items-center justify-between gap-2 px-3 py-2"
              >
                <span className="font-mono text-[0.52rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {row.label}
                </span>
                <span
                  className={`font-display text-sm font-bold tabular-nums ${
                    !row.value
                      ? "text-muted-foreground"
                      : row.value > 0
                        ? "text-[#41603c]"
                        : "text-accent"
                  }`}
                >
                  {!row.value
                    ? "—"
                    : `${row.value > 0 ? "+" : "−"}${row.money ? "₹" : ""}${Math.abs(row.value).toLocaleString("en-IN")}`}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 border-l-2 border-accent/50 bg-[#f7efe0]/50 px-4 py-3">
            <p className="flex items-center gap-1.5 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-accent">
              <BookOpen className="h-3 w-3" />
              What the record says
            </p>
            <p className="mt-1.5 text-[0.86rem] leading-relaxed text-foreground/70">
              {choice.note}
            </p>
          </div>

          <button
            type="button"
            onClick={onContinue}
            className="btn-ink mt-7 inline-flex items-center gap-2"
          >
            {isLast ? "See how it ends" : "Carry on"}
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}