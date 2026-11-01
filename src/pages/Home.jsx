import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, Play, UserPlus } from "lucide-react";
import { Image } from "@/components/ui/image";
import { characters } from "@/data/characters";
import { loadGame } from "@/lib/game";

export default function Home() {
  const navigate = useNavigate();
  const [saved] = useState(() => loadGame());
  const active = saved ? characters.find((c) => c.id === saved.characterId) : null;
  const inProgress = saved && !saved.finished && active;

  return (
    <div>
      <section className="ink-panel relative overflow-hidden">
        <div className="grain pointer-events-none absolute inset-0 opacity-60" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% -10%, rgba(196,158,92,0.20), transparent 60%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-4xl px-4 py-16 text-center sm:py-24">
          <p className="font-mono text-[0.55rem] uppercase tracking-[0.3em] text-[hsl(var(--gold))]">
            An interactive history · 1929 – 1934
          </p>

          <h1 className="animate-ink mt-4 font-display text-[5.5rem] font-black leading-[0.78] tracking-tighter text-[hsl(var(--primary-foreground))] sm:text-[8rem]">
            1930
          </h1>
          <p className="mt-2 font-display text-xl font-semibold italic text-[hsl(var(--gold))] sm:text-2xl">
            A World in Crisis
          </p>

          <p className="mx-auto mt-6 max-w-xs text-[0.86rem] leading-relaxed text-white/55">
            Three Indians. Six years. One collapse. Every choice costs something.
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-2.5 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => navigate(inProgress ? "/simulation" : "/characters")}
              className="btn-gold"
            >
              <Play className="h-3.5 w-3.5" />
              {inProgress ? `Continue as ${active.name.split(" ")[0]}` : "Begin a Life"}
            </button>
            {inProgress && (
              <button
                type="button"
                onClick={() => navigate("/characters")}
                className="btn-ghost-light"
              >
                <UserPlus className="h-3.5 w-3.5" />
                New Life
              </button>
            )}
            <Link to="/how-to-play" className="btn-ghost-light">
              <BookOpen className="h-3.5 w-3.5" />
              How to Play
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-9 sm:px-6">
        <div className="grid gap-3 sm:grid-cols-3">
          {characters.map((character) => (
            <Link
              key={character.id}
              to="/characters"
              className="group relative block overflow-hidden border border-border bg-card/60 transition-colors hover:border-primary/50"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#d9c8a8]">
                <Image
                  src={character.portrait}
                  alt={`Portrait of ${character.name}`}
                  fittingType="fill"
                  focalPointX={0.5}
                  focalPointY={0.28}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#160f08] via-[#160f08]/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <p className="font-mono text-[0.48rem] uppercase tracking-[0.18em] text-[hsl(var(--gold))]">
                    {character.role} · {character.age}
                  </p>
                  <p className="font-display text-lg font-bold leading-tight text-[hsl(var(--primary-foreground))]">
                    {character.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-6 text-center font-mono text-[0.5rem] uppercase tracking-[0.24em] text-muted-foreground">
          Pick a life · Six decisions · One ending
        </p>
      </section>
    </div>
  );
}