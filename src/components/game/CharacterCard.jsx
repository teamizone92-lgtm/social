import React from "react";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { formatMoney } from "@/lib/game";

function ProfileRow({ label, value }) {
  return (
    <div className="grid grid-cols-[62px_1fr] gap-2">
      <dt className="pt-0.5 font-mono text-[0.5rem] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
        {label}
      </dt>
      <dd className="text-[0.78rem] leading-relaxed text-foreground/70">{value}</dd>
    </div>
  );
}

export default function CharacterCard({ character, onSelect }) {
  const labels = character.statLabels;
  const firstName = character.name.split(" ")[0];

  return (
    <article className="group flex h-full flex-col border border-border bg-card/60 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_28px_50px_-38px_rgba(60,38,20,0.9)]">
      <div className="photo-frame m-3 mb-0 shrink-0">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#d9c8a8]">
          <Image
            src={character.portrait}
            alt={`Portrait of ${character.name}`}
            fittingType="fill"
            focalPointX={0.5}
            focalPointY={0.35}
            className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-[#8a5a2b] opacity-[0.14] mix-blend-multiply" />
        </div>
        <p className="mt-2 text-center font-mono text-[0.5rem] uppercase tracking-[0.2em] text-muted-foreground">
          Plate {character.plate} · {character.place}
        </p>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <div className="flex items-baseline justify-between gap-2">
          <p className="kicker">{character.role}</p>
          <p className="font-mono text-[0.5rem] uppercase tracking-[0.16em] text-muted-foreground">
            Age {character.age}
          </p>
        </div>
        <h3 className="mt-1.5 font-display text-xl font-bold leading-tight">
          {character.name}
        </h3>
        <p className="mt-1 text-[0.72rem] italic leading-snug text-foreground/60">
          {character.occupation}
        </p>
        <p className="mt-2.5 font-display text-[0.9rem] italic leading-snug text-foreground/75">
          {character.tagline}
        </p>
        <p className="mt-3 text-[0.83rem] leading-relaxed text-foreground/70">
          {character.bio}
        </p>

        <dl className="mt-4 space-y-2.5 border-t border-border/70 pt-3">
          <ProfileRow label="Family" value={character.family} />
          <ProfileRow label="Finances" value={character.finances} />
        </dl>

        <div className="mt-3.5">
          <p className="font-mono text-[0.5rem] uppercase tracking-[0.18em] text-accent">
            Unique challenges
          </p>
          <ul className="mt-1.5 space-y-1">
            {character.challenges.map((challenge) => (
              <li
                key={challenge}
                className="flex gap-2 text-[0.78rem] leading-snug text-foreground/70"
              >
                <span className="mt-[0.42rem] h-[3px] w-[3px] shrink-0 rounded-full bg-accent/60" />
                {challenge}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-4">
          <div className="border-t border-border/70 pt-3">
            <p className="font-mono text-[0.5rem] uppercase tracking-[0.18em] text-muted-foreground">
              Begins with
            </p>
            <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.58rem] text-foreground/70">
              <span>
                {labels.money}{" "}
                <b className="text-foreground">{formatMoney(character.start.money)}</b>
              </span>
              <span>
                {labels.wellbeing}{" "}
                <b className="text-foreground">{character.start.wellbeing}</b>
              </span>
              <span>
                {labels.hope} <b className="text-foreground">{character.start.hope}</b>
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelect(character.id)}
            className="btn-ink mt-4 flex w-full items-center justify-center gap-2"
          >
            Begin as {firstName}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </article>
  );
}