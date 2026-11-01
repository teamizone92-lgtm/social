import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BookMarked,
  BookOpen,
  CalendarClock,
  HelpCircle,
  Play,
  Scale,
  Users,
  X,
} from "lucide-react";

const items = [
  { to: "/characters", label: "New Life", sub: "Choose a character", icon: Users },
  { to: "/how-to-play", label: "How to Play", sub: "The rules, quickly", icon: BookOpen },
  { to: "/timeline", label: "Timeline", sub: "1929 – 1934", icon: CalendarClock },
  { to: "/glossary", label: "Glossary", sub: "Facts and terms", icon: BookMarked },
  { to: "/quiz", label: "Quiz", sub: "Test yourself", icon: HelpCircle },
  { to: "/other-side", label: "Other Side", sub: "Who gained", icon: Scale },
];

export default function MenuOverlay({ open, onClose, resume }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="ink-panel fixed inset-0 z-50 overflow-y-auto">
      <div className="mx-auto flex min-h-full w-full max-w-3xl flex-col px-4 py-6 sm:px-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-[hsl(var(--gold))]">
            Menu
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {resume && (
          <Link
            to="/simulation"
            onClick={onClose}
            className="mt-4 flex items-center gap-4 border border-[hsl(var(--gold))]/50 bg-[hsl(var(--gold))]/10 px-4 py-4 transition-colors hover:bg-[hsl(var(--gold))]/20"
          >
            <Play className="h-5 w-5 shrink-0 text-[hsl(var(--gold))]" />
            <span className="min-w-0">
              <span className="block font-display text-lg font-bold leading-tight text-[hsl(var(--primary-foreground))]">
                Resume — {resume.name}
              </span>
              <span className="block font-mono text-[0.5rem] uppercase tracking-[0.18em] text-white/50">
                {resume.year} · decision {resume.round} of {resume.total}
              </span>
            </span>
          </Link>
        )}

        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {items.map(({ to, label, sub, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              onClick={onClose}
              className="group flex items-center gap-3 border border-white/10 bg-white/[0.04] px-4 py-3.5 transition-colors hover:border-[hsl(var(--gold))]/60 hover:bg-white/[0.08]"
            >
              <Icon className="h-4 w-4 shrink-0 text-white/45 transition-colors group-hover:text-[hsl(var(--gold))]" />
              <span>
                <span className="block font-display text-base font-bold leading-tight text-[hsl(var(--primary-foreground))]">
                  {label}
                </span>
                <span className="block font-mono text-[0.48rem] uppercase tracking-[0.16em] text-white/40">
                  {sub}
                </span>
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-auto pt-8 text-center font-mono text-[0.5rem] uppercase tracking-[0.22em] text-white/30">
          Press Esc to return · progress saved on this device
        </p>
      </div>
    </div>
  );
}