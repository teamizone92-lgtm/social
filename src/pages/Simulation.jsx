import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Image } from "@/components/ui/image";
import EventPanel from "@/components/game/EventPanel";
import OutcomePanel from "@/components/game/OutcomePanel";
import StatPanel from "@/components/game/StatPanel";
import JourneyLog from "@/components/game/JourneyLog";
import { getCharacter } from "@/data/characters";
import { applyChoice, clearGame, loadGame, saveGame } from "@/lib/game";

export default function Simulation() {
  const navigate = useNavigate();
  const [game, setGame] = useState(() => loadGame());
  const [ledgerOpen, setLedgerOpen] = useState(false);
  const character = game ? getCharacter(game.characterId) : null;

  if (!game || !character) {
    return (
      <div className="mx-auto w-full max-w-md px-4 py-24 text-center sm:px-6">
        <p className="kicker">No journey in progress</p>
        <h1 className="headline mt-3 text-3xl">Choose a life first</h1>
        <Link to="/characters" className="btn-ink mt-7 inline-flex items-center gap-2">
          Choose a character
        </Link>
      </div>
    );
  }

  const events = character.events;
  const total = events.length;
  const round = Math.min(game.round || 0, total);
  const finished = game.finished || round >= total;
  const currentEvent = events[round];
  const logged = game.log?.[round];
  const chosen = logged
    ? currentEvent?.choices.find((c) => c.id === logged.choiceId)
    : null;

  const handleChoose = (choice) => {
    const next = applyChoice(game, character, currentEvent, choice);
    saveGame(next);
    setGame(next);
  };

  const handleContinue = () => {
    const advanced = { ...game, round: round + 1 };
    if (advanced.round >= total) {
      advanced.finished = true;
      saveGame(advanced);
      setGame(advanced);
      navigate("/results");
      return;
    }
    saveGame(advanced);
    setGame(advanced);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAbandon = () => {
    clearGame();
    navigate("/characters");
  };

  if (finished) {
    return (
      <div className="mx-auto w-full max-w-md px-4 py-24 text-center sm:px-6">
        <p className="kicker">The decade is over</p>
        <h1 className="headline mt-3 text-3xl">1934</h1>
        <Link to="/results" className="btn-ink mt-7 inline-flex items-center gap-2">
          See the results
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 pb-14 pt-5 sm:px-6">
      {/* HUD */}
      <div className="overflow-hidden border border-border bg-card shadow-[0_20px_40px_-34px_rgba(60,38,20,0.85)]">
        <div className="flex items-center gap-3 bg-ink px-4 py-3">
          <span className="relative h-11 w-11 shrink-0 overflow-hidden border border-white/20">
            <Image
              src={character.portrait}
              alt={character.name}
              fittingType="fill"
              focalPointX={0.5}
              focalPointY={0.3}
              className="h-full w-full object-cover"
            />
          </span>
          <div className="min-w-0">
            <p className="font-mono text-[0.46rem] uppercase tracking-[0.2em] text-[hsl(var(--gold))]">
              {character.role} · {character.place}
            </p>
            <p className="truncate font-display text-lg font-bold leading-tight text-[hsl(var(--primary-foreground))]">
              {character.name}
            </p>
          </div>
          <div className="ml-auto text-right">
            <p className="font-mono text-[0.44rem] uppercase tracking-[0.18em] text-white/35">
              Decision {round + 1} / {total}
            </p>
            <p className="font-display text-xl font-black leading-none text-[hsl(var(--gold))]">
              {currentEvent.year}
            </p>
          </div>
        </div>

        <div className="flex gap-1 bg-ink px-4 pb-3">
          {events.map((event, i) => (
            <span
              key={event.year + i}
              className={`h-1 flex-1 transition-colors duration-500 ${
                i < round
                  ? "bg-[hsl(var(--gold))]/60"
                  : i === round
                    ? "bg-[hsl(var(--gold))]"
                    : "bg-white/10"
              }`}
            />
          ))}
        </div>

        <div className="px-4 py-4 sm:px-5">
          <StatPanel character={character} state={game} />
        </div>
      </div>

      {/* Event / outcome */}
      <div className="mt-4">
        {!chosen ? (
          <EventPanel
            event={currentEvent}
            index={round}
            total={total}
            onChoose={handleChoose}
          />
        ) : (
          <OutcomePanel
            choice={chosen}
            character={character}
            onContinue={handleContinue}
            isLast={round === total - 1}
          />
        )}
      </div>

      {/* Ledger */}
      <div className="mt-4 border border-border bg-card/60">
        <button
          type="button"
          onClick={() => setLedgerOpen((v) => !v)}
          className="flex w-full items-center justify-between px-4 py-3 text-left"
        >
          <span className="font-mono text-[0.52rem] uppercase tracking-[0.18em] text-foreground/70">
            Your ledger · {(game.log || []).length} / {total}
          </span>
          <ChevronDown
            className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-300 ${
              ledgerOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {ledgerOpen && (
          <div className="animate-fade border-t border-border px-4 py-4">
            <JourneyLog log={game.log || []} />
          </div>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <Link
          to="/characters"
          className="font-mono text-[0.52rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
        >
          Switch life
        </Link>
        <button
          type="button"
          onClick={handleAbandon}
          className="font-mono text-[0.52rem] uppercase tracking-[0.16em] text-muted-foreground underline decoration-dotted underline-offset-4 transition-colors hover:text-accent"
        >
          Abandon
        </button>
      </div>
    </div>
  );
}