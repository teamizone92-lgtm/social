import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Coins, Flame, HeartHandshake } from "lucide-react";
import PageHeading from "@/components/ui-kit/PageHeading";
import Reveal from "@/components/ui-kit/Reveal";
import StatBar from "@/components/ui-kit/StatBar";

const steps = [
  {
    title: "Choose a life",
    text: "A poor farmer in Bengal, a middle-class clerk in Bombay, or a wealthy businessman in Calcutta. Each begins with different money, health and hope — and each has a different way of losing.",
  },
  {
    title: "Read the situation",
    text: "Each year brings one situation, drawn from what was actually happening in India between 1929 and 1934 — falling prices, fixed rents, wage notices, gold in the villages.",
  },
  {
    title: "Make your choice",
    text: "Two or three options, and no perfect answer. Every choice changes your savings, your wellbeing and your hope.",
  },
  {
    title: "Live with it",
    text: "The consequence is shown immediately, along with what the historical record says happened to people who chose the same way.",
  },
];

const stats = [
  {
    icon: Coins,
    label: "Savings",
    text: "Money in the box, or debt if it goes below zero. It can be spent, saved, lent or lost.",
  },
  {
    icon: Flame,
    label: "Wellbeing",
    text: "Health, food and strength. It falls with hunger, overwork and anxiety — and it is hard to get back.",
  },
  {
    icon: HeartHandshake,
    label: "Hope",
    text: "Dignity, solidarity and the willingness to act. It can be built by standing with others, and spent by betraying them.",
  },
];

export default function HowToPlay() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 pt-10 sm:px-6 sm:pt-14">
      <Reveal>
        <PageHeading
          kicker="Rules of the game"
          title="How to Play"
          lede="This is not a quiz with a right answer. It is a simulation: you inherit a position in society, and the Depression tests it. Your choices decide what you keep and what you lose."
          stamp="Six rounds"
        />
      </Reveal>

      <div className="mt-12 grid gap-3 sm:grid-cols-2">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 80}>
            <div className="h-full border border-border bg-card/50 p-5 transition-colors duration-300 hover:bg-card">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl font-black leading-none text-accent/25">
                  {i + 1}
                </span>
                <h2 className="font-display text-lg font-bold">{step.title}</h2>
              </div>
              <p className="mt-2.5 text-[0.86rem] leading-relaxed text-foreground/70">
                {step.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <section className="mt-14">
          <div className="border-b border-border pb-3">
            <h2 className="font-display text-xl font-bold">The three measures</h2>
          </div>
          <div className="mt-5 grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div className="space-y-5">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex gap-3.5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-border text-accent">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-foreground">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-[0.86rem] leading-relaxed text-foreground/70">
                        {stat.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="paper-card p-5">
              <p className="kicker">Sample ledger</p>
              <div className="mt-4 space-y-3.5">
                <StatBar label="Savings" tone="money" value={62} display="₹146" delta={-24} />
                <StatBar label="Wellbeing" tone="wellbeing" value={41} display="41" delta={-9} />
                <StatBar label="Hope" tone="hope" value={74} display="74" delta={12} />
              </div>
              <p className="mt-4 text-[0.78rem] leading-relaxed text-muted-foreground">
                Wellbeing and hope are measured out of 100. If either reaches
                zero, the journey still runs — but the ending will be a hard one.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={80}>
        <section className="mt-14 border border-border bg-[#f7efe0]/60 p-6 sm:p-8">
          <p className="kicker">A note on fairness</p>
          <p className="mt-3 max-w-2xl text-[0.92rem] leading-[1.8] text-foreground/80">
            Historians do not agree that people in the 1930s “deserved” what
            happened to them, and neither does this game. The Depression was made
            by decisions taken far away — by banks, governments and tariff
            schedules — and then distributed by very local ones: a rent demand, a
            wage cut, an interest rate. You will be asked to make those local
            decisions.
          </p>
          <p className="mt-3 max-w-2xl text-[0.92rem] leading-[1.8] text-foreground/80">
            Your journey is saved as you play, so you can stop and come back. Each
            character takes about ten minutes.
          </p>
        </section>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link to="/characters" className="btn-ink inline-flex items-center gap-2">
            Choose a character
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            to="/glossary"
            className="btn-ghost inline-flex items-center gap-2"
          >
            <BookOpen className="h-3.5 w-3.5" />
            Facts &amp; Glossary
          </Link>
        </div>
      </Reveal>
    </div>
  );
}