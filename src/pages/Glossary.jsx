import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import PageHeading from "@/components/ui-kit/PageHeading";
import Reveal from "@/components/ui-kit/Reveal";
import { facts, glossary } from "@/data/reference";

export default function Glossary() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return glossary;
    return glossary.filter(
      (entry) =>
        entry.term.toLowerCase().includes(q) ||
        entry.meaning.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 pt-10 sm:px-6 sm:pt-14">
      <Reveal>
        <PageHeading
          kicker="Reference desk"
          title="Historical Facts & Glossary"
          lede="The numbers behind the simulation, and the words you need to read the 1930s properly."
          stamp="The record"
        />
      </Reveal>

      <Reveal delay={60}>
        <section className="mt-10">
          <div className="border-b border-border pb-3">
            <h2 className="font-display text-xl font-bold">Eight facts to know</h2>
          </div>
          <div className="mt-4 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.stat} className="bg-card/70 p-4 transition-colors duration-300 hover:bg-card">
                <p className="font-display text-2xl font-black leading-none tracking-tight text-accent">
                  {fact.stat}
                </p>
                <p className="mt-2.5 text-[0.8rem] leading-relaxed text-foreground/70">
                  {fact.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={60}>
        <section className="mt-12">
          <div className="flex flex-col gap-3 border-b border-border pb-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-xl font-bold">Glossary</h2>
            <div className="relative w-full sm:w-64">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Find a term…"
                className="w-full border border-border bg-[#fbf6ea]/70 py-2 pl-9 pr-3 text-[0.82rem] text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          <p className="mt-3 font-mono text-[0.52rem] uppercase tracking-[0.16em] text-muted-foreground">
            {results.length} {results.length === 1 ? "term" : "terms"}
          </p>

          <dl className="mt-4 divide-y divide-border/70 border border-border bg-card/40">
            {results.map((entry) => (
              <div key={entry.term} className="p-4 sm:grid sm:grid-cols-[200px_1fr] sm:gap-6 sm:p-5">
                <dt className="font-display text-[0.95rem] font-bold leading-snug">
                  {entry.term}
                </dt>
                <dd className="mt-1.5 text-[0.86rem] leading-relaxed text-foreground/70 sm:mt-0">
                  {entry.meaning}
                </dd>
              </div>
            ))}
            {!results.length && (
              <div className="p-6 text-center text-sm text-muted-foreground">
                Nothing under “{query}”. Try “gold”, “tariff” or “rent”.
              </div>
            )}
          </dl>
        </section>
      </Reveal>

      <Reveal delay={60}>
        <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-6">
          <Link to="/quiz" className="btn-ink">
            Test yourself
          </Link>
          <Link to="/timeline" className="btn-ghost">
            Review the timeline
          </Link>
        </div>
      </Reveal>
    </div>
  );
}