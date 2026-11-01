import React from "react";

export default function EventPanel({ event, index, total, onChoose }) {
  return (
    <article className="paper-card relative overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/40 bg-ink px-5 py-2.5 sm:px-7">
        <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-[hsl(var(--gold))]">
          {event.year} · {event.kicker}
        </span>
        <span className="font-mono text-[0.5rem] uppercase tracking-[0.18em] text-white/40">
          Decision {index + 1} of {total}
        </span>
      </div>

      <div className="px-5 py-6 sm:px-7 sm:py-8">
        <h2 className="headline text-2xl leading-tight sm:text-[2rem]">
          {event.headline}
        </h2>
        <p className="mt-4 text-[0.95rem] leading-[1.75] text-foreground/80 text-pretty">
          {event.context}
        </p>

        <div className="mt-7 space-y-2">
          <p className="kicker mb-2">What do you do?</p>
          {event.choices.map((choice, i) => (
            <button
              key={choice.id}
              type="button"
              onClick={() => onChoose(choice)}
              className="group flex w-full items-center gap-3.5 border border-border bg-[#fbf6ea]/70 px-4 py-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-[#fdf9f0] hover:shadow-[0_16px_28px_-24px_rgba(60,38,20,0.9)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-border font-mono text-[0.65rem] text-muted-foreground transition-colors duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-[hsl(var(--accent-foreground))]">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="text-[0.92rem] leading-snug text-foreground/85">
                {choice.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}