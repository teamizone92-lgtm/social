import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, RotateCcw } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/ui-kit/Reveal";
import {
  finalScore,
  formatMoney,
  loadGame,
  startGame,
  verdict,
  verdictLabel,
} from "@/lib/game";
import { characters, getCharacter } from "@/data/characters";

function StatRow({ label, from, to, money }) {
  const delta = to - from;
  const good = delta > 0;
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border/60 py-2.5 last:border-0">
      <span className="font-mono text-[0.56rem] uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </span>
      <div className="flex items-baseline gap-2 font-display text-sm font-bold tabular-nums">
        <span className="text-muted-foreground/70">
          {money ? formatMoney(from) : from}
        </span>
        <span className="text-muted-foreground/40">→</span>
        <span>{money ? formatMoney(to) : to}</span>
        <span
          className={`font-mono text-[0.56rem] ${
            delta === 0 ? "text-muted-foreground" : good ? "text-[#4f6b4a]" : "text-accent"
          }`}
        >
          {delta === 0
            ? "—"
            : `${good ? "+" : "−"}${money ? "₹" : ""}${Math.abs(delta).toLocaleString("en-IN")}`}
        </span>
      </div>
    </div>
  );
}

export default function Results() {
  const navigate = useNavigate();
  const [game] = useState(() => loadGame());
  const character = game ? getCharacter(game.characterId) : null;
  const complete = game && character && game.finished;

  if (!complete) {
    return (
      <div className="mx-auto w-full max-w-3xl px-4 py-24 text-center sm:px-6">
        <p className="kicker">No results yet</p>
        <h1 className="headline mt-3 text-3xl">The ledger is still open</h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-foreground/70">
          Finish a journey through all six decisions and the year 1934 will be
          summarised here.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link to={game ? "/simulation" : "/characters"} className="btn-ink">
            {game ? "Return to my journey" : "Choose a character"}
          </Link>
        </div>
      </div>
    );
  }

  const labels = character.statLabels;
  const score = finalScore(game, character);
  const tier = verdict(score);
  const others = characters.filter((c) => c.id !== character.id);

  const retake = () => {
    startGame(character.id);
    navigate("/simulation");
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
      <Reveal>
        <p className="kicker">1934 · The reckoning</p>
        <h1 className="headline mt-2 text-3xl sm:text-4xl md:text-5xl">
          {character.name}, at the end of it
        </h1>
        <div className="rule-double mt-5 w-24" />
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-[320px_1fr] lg:items-start">
        {/* Score card */}
        <Reveal delay={80}>
          <div className="paper-card overflow-hidden">
            <div className="flex items-center gap-3 border-b border-border/70 px-5 py-4">
              <div className="shrink-0 border border-border bg-card p-1">
                <div className="relative h-12 w-12 overflow-hidden bg-[#d9c8a8]">
                  <Image
                    src={character.portrait}
                    alt={character.name}
                    fittingType="fill"
                    focalPointX={0.5}
                    focalPointY={0.3}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="font-mono text-[0.5rem] uppercase tracking-[0.18em] text-accent">
                  {character.role}
                </p>
                <p className="font-display text-sm font-bold leading-tight">
                  {character.place}
                </p>
              </div>
            </div>

            <div className="px-5 py-6 text-center">
              <p className="font-mono text-[0.52rem] uppercase tracking-[0.2em] text-muted-foreground">
                Resilience
              </p>
              <p className="font-display text-6xl font-black leading-none tracking-tighter">
                {score}
                <span className="text-lg font-normal text-muted-foreground">/100</span>
              </p>
              <p className="mt-2 font-display text-[0.95rem] font-semibold italic text-accent">
                {verdictLabel(score)}
              </p>
              <div className="mt-4 h-[3px] w-full bg-border">
                <div
                  className="h-full bg-primary transition-all duration-1000"
                  style={{ width: `${score}%` }}
                />
              </div>
            </div>

            <div className="border-t border-border/70 px-5 py-4">
              <StatRow
                label={labels.money}
                from={character.start.money}
                to={game.money}
                money
              />
              <StatRow
                label={labels.wellbeing}
                from={character.start.wellbeing}
                to={game.wellbeing}
              />
              <StatRow label={labels.hope} from={character.start.hope} to={game.hope} />
            </div>
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={120}>
            <article className="paper-card px-5 py-6 sm:px-7 sm:py-7">
              <p className="kicker">How it ended</p>
              <p className="dropcap mt-3 text-[0.98rem] leading-[1.85] text-foreground/80 text-pretty">
                {character.endings[tier]}
              </p>
              <p className="mt-4 text-[0.9rem] leading-[1.8] text-foreground/70">
                Your resilience is measured from three things: how much of your{" "}
                {labels.money.toLowerCase()} survived, how well your{" "}
                {labels.wellbeing.toLowerCase()} held up, and how much{" "}
                {labels.hope.toLowerCase()} you kept. Wellbeing and hope count
                for more than money — the Depression showed that a household can
                survive a smaller purse more easily than a broken body or a
                broken community.
              </p>
            </article>
          </Reveal>

          <Reveal delay={160}>
            <article className="paper-card px-5 py-6 sm:px-7">
              <p className="flex items-center gap-1.5 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-accent">
                <BookOpen className="h-3 w-3" />
                What really happened
              </p>
              <p className="mt-3 text-[0.92rem] leading-[1.8] text-foreground/80">
                {character.whatReallyHappened}
              </p>
            </article>
          </Reveal>
        </div>
      </div>

      {/* Journey */}
      <Reveal delay={80}>
        <section className="mt-12">
          <div className="flex items-end justify-between gap-4 border-b border-border pb-3">
            <h2 className="font-display text-xl font-bold">
              Your six decisions
            </h2>
            <span className="font-mono text-[0.52rem] uppercase tracking-[0.18em] text-muted-foreground">
              1929 – 1934
            </span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {game.log.map((entry, i) => (
              <div
                key={`${entry.year}-${i}`}
                className="border border-border bg-card/50 p-4 transition-colors duration-300 hover:bg-card"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-lg font-black text-accent/30">
                    {entry.year}
                  </span>
                  <span className="font-mono text-[0.48rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-1 text-[0.86rem] font-semibold leading-snug text-foreground/85">
                  {entry.headline}
                </p>
                <p className="mt-1.5 text-[0.8rem] leading-relaxed text-muted-foreground">
                  {entry.choiceLabel}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Next */}
      <Reveal delay={80}>
        <section className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="font-display text-xl font-bold">Keep going</h2>
              <p className="mt-2 max-w-md text-[0.86rem] leading-relaxed text-foreground/70">
                The Depression looked different from the other side of the
                ledger. Live another life, or read what happened to the people
                who profited from the crash.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link to="/other-side" className="btn-ink inline-flex items-center gap-2">
                  The Other Side
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <button
                  type="button"
                  onClick={retake}
                  className="btn-ghost inline-flex items-center gap-2"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Retake this life
                </button>
              </div>
            </div>

            <div className="w-full max-w-xs space-y-2">
              <p className="kicker">Play another life</p>
              {others.map((other) => (
                <Link
                  key={other.id}
                  to="/characters"
                  className="group flex items-center justify-between gap-3 border border-border bg-card/40 px-3.5 py-2.5 transition-all duration-300 hover:border-primary/40 hover:bg-card"
                >
                  <span>
                    <span className="block text-[0.82rem] font-semibold">
                      {other.name}
                    </span>
                    <span className="block font-mono text-[0.5rem] uppercase tracking-[0.14em] text-muted-foreground">
                      {other.role}
                    </span>
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}