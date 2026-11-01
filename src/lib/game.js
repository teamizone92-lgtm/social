import { getCharacter } from "@/data/characters";

const STORAGE_KEY = "crisis1930_v1";

export const clamp = (value, min = 0, max = 100) =>
  Math.max(min, Math.min(max, value));

export function loadGame() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const state = JSON.parse(raw);
    if (!state || !state.characterId || !getCharacter(state.characterId)) {
      return null;
    }
    return state;
  } catch {
    return null;
  }
}

export function saveGame(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable — the game still runs in memory */
  }
}

export function clearGame() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

export function startGame(characterId) {
  const character = getCharacter(characterId);
  if (!character) return null;
  const state = {
    characterId,
    round: 0,
    money: character.start.money,
    wellbeing: character.start.wellbeing,
    hope: character.start.hope,
    log: [],
    finished: false,
    startedAt: new Date().toISOString(),
  };
  saveGame(state);
  return state;
}

export function applyChoice(state, character, event, choice) {
  const applied = {
    ...state,
    money: state.money + (choice.effects.money || 0),
    wellbeing: clamp(state.wellbeing + (choice.effects.wellbeing || 0)),
    hope: clamp(state.hope + (choice.effects.hope || 0)),
    log: [
      ...state.log,
      {
        year: event.year,
        headline: event.headline,
        eventId: event.headline,
        choiceId: choice.id,
        choiceLabel: choice.label,
        outcome: choice.outcome,
        effects: choice.effects,
      },
    ],
  };
  applied.characterId = character.id;
  return applied;
}

export function moneyScore(state, character) {
  const start = character.start.money;
  const ratio = (state.money - start) / Math.max(start, 1);
  return clamp(50 + ratio * 50);
}

export function finalScore(state, character) {
  if (!state || !character) return 0;
  return Math.round(
    state.wellbeing * 0.4 + state.hope * 0.35 + moneyScore(state, character) * 0.25,
  );
}

export function verdict(score) {
  if (score >= 72) return "strong";
  if (score >= 45) return "steady";
  return "failing";
}

export function verdictLabel(score) {
  if (score >= 72) return "You came through";
  if (score >= 45) return "You survived — at a price";
  return "The Depression broke through";
}

export const formatMoney = (amount) => {
  const n = Math.round(amount);
  const sign = n < 0 ? "−" : "";
  return `${sign}₹${Math.abs(n).toLocaleString("en-IN")}`;
};

export const formatDelta = (amount) => {
  if (!amount) return "no change";
  const n = Math.round(amount);
  return `${n > 0 ? "+" : "−"}₹${Math.abs(n).toLocaleString("en-IN")}`;
};

export const statDelta = (value) => {
  if (!value) return "no change";
  return `${value > 0 ? "+" : "−"}${Math.abs(value)}`;
};