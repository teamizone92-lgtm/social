import React from "react";
import { formatMoney, moneyScore } from "@/lib/game";
import StatBar from "@/components/ui-kit/StatBar";

export default function StatPanel({ character, state, className = "" }) {
  const labels = character.statLabels;
  return (
    <div className={`space-y-3.5 ${className}`}>
      <StatBar
        label={labels.money}
        tone="money"
        value={moneyScore(state, character)}
        display={formatMoney(state.money)}
      />
      <StatBar
        label={labels.wellbeing}
        tone="wellbeing"
        value={state.wellbeing}
        display={`${state.wellbeing}`}
      />
      <StatBar
        label={labels.hope}
        tone="hope"
        value={state.hope}
        display={`${state.hope}`}
      />
    </div>
  );
}