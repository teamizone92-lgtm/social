import React from "react";
import { Link } from "react-router-dom";
import {
  Banknote,
  Factory,
  Landmark,
  Quote,
  Scale,
  TrendingUp,
  Users,
} from "lucide-react";
import PageHeading from "@/components/ui-kit/PageHeading";
import Reveal from "@/components/ui-kit/Reveal";

const beneficiaries = [
  {
    icon: Factory,
    title: "Industrialists",
    gain: "A protected home market",
    what: "Imports of foreign cloth collapsed, and tariffs raised the price of what still came in. Indian mills filled the gap. Cotton textile output grew through the 1930s, and mill owners' profits rose.",
    why: "Protection plus a captive market. The same Depression that ruined the peasant gave the mill owner a market he had spent decades asking the government for.",
  },
  {
    icon: Banknote,
    title: "Big merchants & buyers of assets",
    gain: "Gold, land and cheap machinery",
    what: "Between 1928 and 1934 India's gold exports rose sharply as rural families sold wedding jewellery to survive. Land and machinery changed hands at a fraction of their 1928 value.",
    why: "Debtors had to sell; those with cash could buy. A crash is a transfer — not a disappearance — of wealth.",
  },
  {
    icon: Users,
    title: "The salaried middle class",
    gain: "Falling prices, fixed pay",
    what: "For those who kept their jobs, rents and food became cheaper faster than salaries fell. A clerk or a teacher in 1933 could afford more than in 1929.",
    why: "Their income was fixed in cash while the cost of living dropped — the mirror image of the peasant's problem.",
  },
  {
    icon: Landmark,
    title: "The colonial state",
    gain: "Revenue protected in cash",
    what: "The Government refused to reduce land revenue even as prices halved, so the real value of its income rose precisely when cultivators were least able to pay.",
    why: "A fixed cash demand in a falling-price world shifts the loss to whoever pays it.",
  },
];

const losers = [
  {
    title: "Peasants and small cultivators",
    text: "Prices fell, rents did not. Debt rose, land was mortgaged and lost, and gold savings were sold.",
  },
  {
    title: "Mill and mine workers",
    text: "Wages were cut, shifts shortened and hands retrenched. Rationalisation pushed output up and the workforce down.",
  },
  {
    title: "Small moneylenders and shopkeepers",
    text: "Many who had lent to peasants were never repaid. Not every creditor came out ahead — the smallest ones were wiped out with their debtors.",
  },
  {
    title: "The colonial export economy",
    text: "Exports and imports nearly halved between 1928 and 1934 as world trade contracted behind tariff walls.",
  },
];

const global = [
  {
    title: "The United States: the New Deal",
    text: "From 1933 Roosevelt's administration intervened in banks, farm prices and public works. Recovery was real but slow — full employment waited for the war.",
  },
  {
    title: "The Soviet Union: outside the storm",
    text: "The USSR's planned economy was largely insulated from the capitalist crisis and industrialised rapidly in the 1930s. To many contemporaries, that contrast was an argument.",
  },
  {
    title: "1944: Bretton Woods",
    text: "The IMF and the World Bank were created so that a country in trouble would not have to solve it by raising tariffs and beggaring its neighbours.",
  },
];

export default function OtherSide() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 pt-10 sm:px-6 sm:pt-14">
      <Reveal>
        <PageHeading
          kicker="Not everyone lost"
          title="The Other Side of the Depression"
          lede="A depression is not a shared sacrifice. It is a rearrangement. For every peasant who lost his land in the 1930s, someone acquired it — and the same crash that emptied a granary filled a warehouse."
          stamp="The ledger's reverse"
        />
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {beneficiaries.map((item, i) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="paper-card p-5 transition-transform duration-500 hover:-translate-y-0.5"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-9 w-9 items-center justify-center border border-border text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-[0.5rem] uppercase tracking-[0.16em] text-[#4f6b4a]">
                    Gained
                  </span>
                </div>
                <h2 className="mt-3 font-display text-lg font-bold">{item.title}</h2>
                <p className="mt-1 font-display text-[0.85rem] italic text-accent">
                  {item.gain}
                </p>
                <p className="mt-2.5 text-[0.85rem] leading-relaxed text-foreground/75">
                  {item.what}
                </p>
                <p className="mt-3 border-l-2 border-border pl-3 text-[0.8rem] leading-relaxed text-muted-foreground">
                  {item.why}
                </p>
              </article>
            );
          })}
        </div>
      </Reveal>

      {/* Two sides table */}
      <Reveal delay={100}>
        <section className="mt-14">
          <div className="flex items-center gap-2 border-b border-border pb-3">
            <Scale className="h-4 w-4 text-accent" />
            <h2 className="font-display text-xl font-bold">Who paid</h2>
          </div>
          <div className="mt-4 divide-y divide-border/70 border border-border bg-card/40">
            {losers.map((row) => (
              <div key={row.title} className="grid gap-1 p-4 sm:grid-cols-[220px_1fr] sm:gap-6">
                <p className="font-display text-[0.92rem] font-bold text-foreground/85">
                  {row.title}
                </p>
                <p className="text-[0.85rem] leading-relaxed text-foreground/70">
                  {row.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={80}>
        <blockquote className="mt-14 border-y border-border bg-[#f7efe0]/60 px-6 py-10 text-center sm:px-14">
          <Quote className="mx-auto h-5 w-5 text-accent/40" />
          <p className="mx-auto mt-4 max-w-2xl font-display text-lg font-medium italic leading-relaxed sm:text-xl">
            “India became an exporter of gold in these years — the family
            jewellery of the poor financed the survival of the poor.”
          </p>
          <footer className="mt-4 font-mono text-[0.52rem] uppercase tracking-[0.2em] text-muted-foreground">
            A summary of the record, not a quotation
          </footer>
        </blockquote>
      </Reveal>

      {/* Global other side */}
      <Reveal delay={60}>
        <section className="mt-14">
          <div className="flex items-center gap-2 border-b border-border pb-3">
            <TrendingUp className="h-4 w-4 text-accent" />
            <h2 className="font-display text-xl font-bold">
              The other side, further out
            </h2>
          </div>
          <div className="mt-4 grid gap-px border border-border bg-border sm:grid-cols-3">
            {global.map((item) => (
              <div key={item.title} className="bg-card/70 p-5">
                <h3 className="font-display text-[0.98rem] font-bold leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-foreground/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={60}>
        <section className="mt-12 border border-border bg-card/50 p-6 sm:p-8">
          <p className="kicker">Why this page exists</p>
          <p className="mt-3 text-[0.92rem] leading-[1.85] text-foreground/80">
            In the simulation you can play the farmer who loses his land, the clerk
            whose salary is cut, or the businessman who buys the land. All three
            were real positions in 1930s India, and all three were shaped by the
            same collapse. The Depression did not ask whether its victims deserved
            it; it asked who held cash, who held land, and who could wait.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link to="/characters" className="btn-ink">
              Live the other side
            </Link>
            <Link to="/timeline" className="btn-ghost">
              See the timeline
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
}