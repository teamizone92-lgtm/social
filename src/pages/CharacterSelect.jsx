import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeading from "@/components/ui-kit/PageHeading";
import Reveal from "@/components/ui-kit/Reveal";
import CharacterCard from "@/components/game/CharacterCard";
import { characters, getCharacter } from "@/data/characters";
import { loadGame, startGame } from "@/lib/game";

export default function CharacterSelect() {
  const navigate = useNavigate();
  const [saved] = useState(() => loadGame());

  const handleSelect = (id) => {
    startGame(id);
    navigate("/simulation");
  };

  const inProgress = saved && !saved.finished;
  const inProgressCharacter = inProgress ? getCharacter(saved.characterId) : null;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
      <Reveal>
        <PageHeading
          kicker="Step one"
          title="Choose a life"
          lede="Three people, one collapse. Pick who you are for the next six years."
          stamp="Three lives"
        />
      </Reveal>

      {inProgress && (
        <Reveal delay={60}>
          <div className="mt-8 flex flex-col gap-3 border border-accent/40 bg-[#f7efe0]/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-accent">
                Journey in progress
              </p>
              <p className="mt-1 text-sm text-foreground/75">
                You are {inProgressCharacter?.name}, in {inProgressCharacter?.events?.[saved.round]?.year || "1934"} —
                decision {(saved.round || 0) + 1} of {inProgressCharacter?.events?.length}.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link to="/simulation" className="btn-ink inline-flex items-center gap-2">
                Resume
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      )}

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {characters.map((character, i) => (
          <Reveal key={character.id} delay={i * 90}>
            <CharacterCard character={character} onSelect={handleSelect} />
          </Reveal>
        ))}
      </div>

      <p className="mt-8 border-t border-border pt-4 text-center font-mono text-[0.5rem] uppercase tracking-[0.2em] text-muted-foreground">
        A new life replaces the one in progress
      </p>
    </div>
  );
}