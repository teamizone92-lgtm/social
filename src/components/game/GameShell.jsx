import React, { useMemo, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Image } from "@/components/ui/image";
import MenuOverlay from "@/components/game/MenuOverlay";
import { getCharacter } from "@/data/characters";
import { loadGame } from "@/lib/game";

export default function GameShell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const saved = useMemo(() => loadGame(), [pathname]);

  const character = saved ? getCharacter(saved.characterId) : null;
  const inProgress = saved && !saved.finished && character;
  const resume = inProgress
    ? {
        name: character.name,
        year: character.events[saved.round]?.year || "1934",
        round: (saved.round || 0) + 1,
        total: character.events.length,
      }
    : null;

  return (
    <div className="flex min-h-screen flex-col bg-ink">
      <header className="sticky top-0 z-40 border-b border-black/50 bg-ink/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-3 px-4 sm:px-6">
          <Link to="/" className="flex shrink-0 items-baseline gap-2">
            <span className="font-display text-xl font-black leading-none text-[hsl(var(--primary-foreground))]">
              1930
            </span>
            <span className="hidden font-mono text-[0.48rem] uppercase leading-tight tracking-[0.2em] text-white/35 sm:block">
              A World in Crisis
            </span>
          </Link>

          <div className="ml-auto flex items-center gap-2">
            {resume && (
              <Link
                to="/simulation"
                className="flex items-center gap-2 border border-white/12 bg-white/[0.05] py-1 pl-1 pr-3 transition-colors hover:border-[hsl(var(--gold))]/60"
              >
                <span className="relative h-7 w-7 shrink-0 overflow-hidden border border-white/20">
                  <Image
                    src={character.portrait}
                    alt={character.name}
                    fittingType="fill"
                    focalPointX={0.5}
                    focalPointY={0.3}
                    className="h-full w-full object-cover"
                  />
                </span>
                <span className="hidden leading-tight sm:block">
                  <span className="block font-display text-[0.78rem] font-bold text-[hsl(var(--primary-foreground))]">
                    {character.name.split(" ")[0]}
                  </span>
                  <span className="block font-mono text-[0.44rem] uppercase tracking-[0.16em] text-[hsl(var(--gold))]">
                    {resume.year} · {resume.round}/{resume.total}
                  </span>
                </span>
              </Link>
            )}

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2 border border-white/12 px-3 py-2 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-white/70 transition-colors hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))]"
            >
              <Menu className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Menu</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-background text-foreground">
        <Outlet />
      </main>

      <footer className="border-t border-black/50 bg-ink">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-3 sm:px-6">
          <p className="font-mono text-[0.48rem] uppercase tracking-[0.2em] text-white/30">
            1929 – 1934 · An interactive history
          </p>
          <p className="font-mono text-[0.48rem] uppercase tracking-[0.2em] text-white/30">
            Progress saved on this device
          </p>
        </div>
      </footer>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} resume={resume} />
    </div>
  );
}