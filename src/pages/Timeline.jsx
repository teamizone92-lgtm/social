import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageHeading from "@/components/ui-kit/PageHeading";
import Reveal from "@/components/ui-kit/Reveal";
import { timeline } from "@/data/reference";

const FILTERS = [
  { id: "all", label: "Everything" },
  { id: "world", label: "The World" },
  { id: "india", label: "India" },
  { id: "economy", label: "The Economy" },
];

const TYPE_STYLES = {
  world: { label: "World", color: "text-accent border-accent/40" },
  india: { label: "India", color: "text-[#4f6b4a] border-[#4f6b4a]/40" },
  economy: { label: "Economy", color: "text-[#8a5a2b] border-[#8a5a2b]/40" },
};

export default function Timeline() {
  const [filter, setFilter] = useState("all");
  const items = useMemo(
    () => (filter === "all" ? timeline : timeline.filter((t) => t.type === filter)),
    [filter],
  );

  return (
    <div className="mx-auto w-full max-w-4xl px-4 pt-10 sm:px-6 sm:pt-14">
      <Reveal>
        <PageHeading
          kicker="The long decade"
          title="Historical Timeline"
          lede="From the First World War to Bretton Woods: how the world economy was built, how it broke in 1929, and how India lived through the wreckage."
          stamp="1914 – 1947"
        />
      </Reveal>

      <Reveal delay={60}>
        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`border px-3 py-1.5 font-mono text-[0.55rem] uppercase tracking-[0.16em] transition-all duration-300 ${
                filter === f.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-foreground/60 hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="relative mt-10 border-l border-border/80 pl-5 sm:pl-8">
        {items.map((item, i) => {
          const type = TYPE_STYLES[item.type] || TYPE_STYLES.world;
          return (
            <Reveal key={item.year + item.title} delay={Math.min(i * 40, 400)}>
              <div className="relative pb-7">
                <span className="absolute -left-[21px] top-2 h-2.5 w-2.5 rounded-full border border-background bg-accent/70 sm:-left-[37px]" />
                <div className="group border border-border bg-card/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-display text-lg font-black tracking-tight text-foreground sm:text-xl">
                      {item.year}
                    </span>
                    <span
                      className={`border px-2 py-0.5 font-mono text-[0.48rem] uppercase tracking-[0.16em] ${type.color}`}
                    >
                      {type.label}
                    </span>
                  </div>
                  <h2 className="mt-1 font-display text-[1.02rem] font-bold leading-snug">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-[0.86rem] leading-relaxed text-foreground/70">
                    {item.text}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-6">
          <Link to="/glossary" className="btn-ghost">
            Facts &amp; Glossary
          </Link>
          <Link to="/other-side" className="btn-ghost">
            The Other Side
          </Link>
        </div>
      </Reveal>
    </div>
  );
}