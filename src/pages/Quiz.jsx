import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, RotateCcw, X } from "lucide-react";
import PageHeading from "@/components/ui-kit/PageHeading";
import Reveal from "@/components/ui-kit/Reveal";
import { quiz } from "@/data/reference";

const PASS_LINE = 0.7;

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [done, setDone] = useState(false);

  const question = quiz[index];
  const score = answers.reduce(
    (sum, choice, i) => sum + (choice === quiz[i].answer ? 1 : 0),
    0,
  );

  const pick = (choiceIndex) => {
    if (picked !== null) return;
    setPicked(choiceIndex);
    setAnswers((prev) => [...prev, choiceIndex]);
  };

  const next = () => {
    if (index === quiz.length - 1) {
      setDone(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setIndex(index + 1);
    setPicked(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const restart = () => {
    setIndex(0);
    setPicked(null);
    setAnswers([]);
    setDone(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (done) {
    const pct = Math.round((score / quiz.length) * 100);
    const passed = score / quiz.length >= PASS_LINE;
    return (
      <div className="mx-auto w-full max-w-3xl px-4 pt-10 sm:px-6 sm:pt-14">
        <Reveal>
          <p className="kicker">The examination hall</p>
          <h1 className="headline mt-2 text-3xl sm:text-4xl">Your result</h1>
        </Reveal>

        <Reveal delay={80}>
          <div className="paper-card mt-8 px-6 py-10 text-center">
            <p className="font-display text-6xl font-black leading-none tracking-tighter">
              {score}
              <span className="text-xl font-normal text-muted-foreground">
                /{quiz.length}
              </span>
            </p>
            <p className="mt-2 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-muted-foreground">
              {pct} per cent
            </p>
            <p className="mx-auto mt-5 max-w-lg font-display text-lg font-semibold italic leading-snug text-accent">
              {passed
                ? "You can read the 1930s — the prices, the rents and the politics."
                : "Half the picture is there. The timeline and the glossary will fill in the rest."}
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-2">
              <button type="button" onClick={restart} className="btn-ink inline-flex items-center gap-2">
                <RotateCcw className="h-3.5 w-3.5" />
                Try again
              </button>
              <Link to="/glossary" className="btn-ghost">
                Facts &amp; Glossary
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <section className="mt-10">
            <div className="border-b border-border pb-3">
              <h2 className="font-display text-xl font-bold">The answers</h2>
            </div>
            <ol className="mt-4 space-y-3">
              {quiz.map((q, i) => {
                const correct = answers[i] === q.answer;
                return (
                  <li key={q.question} className="border border-border bg-card/50 p-4">
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          correct
                            ? "bg-[#4f6b4a]/15 text-[#4f6b4a]"
                            : "bg-accent/15 text-accent"
                        }`}
                      >
                        {correct ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                      </span>
                      <div>
                        <p className="text-[0.88rem] font-semibold leading-snug">
                          {q.question}
                        </p>
                        <p className="mt-1 text-[0.82rem] text-muted-foreground">
                          Correct: <b className="text-foreground/80">{q.options[q.answer]}</b>
                          {!correct && answers[i] !== undefined && (
                            <> · Yours: {q.options[answers[i]]}</>
                          )}
                        </p>
                        <p className="mt-1.5 text-[0.8rem] leading-relaxed text-foreground/65">
                          {q.explanation}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        </Reveal>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pt-10 sm:px-6 sm:pt-14">
      <Reveal>
        <PageHeading
          kicker="Optional"
          title="Test Yourself"
          lede="Eleven questions on the Great Depression and India. Each answer comes with the reason, so a wrong guess is still a lesson."
        />
      </Reveal>

      <div className="mt-8 flex items-center gap-2">
        {quiz.map((q, i) => (
          <div
            key={q.question}
            className={`h-[3px] flex-1 transition-colors duration-500 ${
              i < index ? "bg-primary/60" : i === index ? "bg-accent" : "bg-border"
            }`}
          />
        ))}
      </div>

      <p className="mt-2 font-mono text-[0.52rem] uppercase tracking-[0.18em] text-muted-foreground">
        Question {index + 1} of {quiz.length}
      </p>

      <div key={index} className="animate-rise paper-card mt-5 px-5 py-6 sm:px-7 sm:py-8">
        <h2 className="headline text-xl leading-snug sm:text-2xl">
          {question.question}
        </h2>

        <div className="mt-6 space-y-2.5">
          {question.options.map((option, i) => {
            const isCorrect = i === question.answer;
            const isPicked = i === picked;
            let styles =
              "border-border bg-[#fbf6ea]/60 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-[#fdf9f0]";
            if (picked !== null) {
              if (isCorrect) styles = "border-[#4f6b4a] bg-[#eef2e6]";
              else if (isPicked) styles = "border-accent bg-[#f8e8e1]";
              else styles = "border-border/60 bg-transparent opacity-60";
            }
            return (
              <button
                key={option}
                type="button"
                onClick={() => pick(i)}
                disabled={picked !== null}
                className={`flex w-full items-center gap-3 border px-4 py-3 text-left transition-all duration-300 ${styles}`}
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-border/80 font-mono text-[0.58rem] text-muted-foreground">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1 text-[0.88rem] leading-relaxed">{option}</span>
                {picked !== null && isCorrect && (
                  <Check className="h-4 w-4 shrink-0 text-[#4f6b4a]" />
                )}
                {picked !== null && isPicked && !isCorrect && (
                  <X className="h-4 w-4 shrink-0 text-accent" />
                )}
              </button>
            );
          })}
        </div>

        {picked !== null && (
          <div className="animate-rise mt-6 border-l-2 border-accent/50 bg-[#f7efe0]/60 px-4 py-3">
            <p className="font-mono text-[0.52rem] uppercase tracking-[0.18em] text-accent">
              {picked === question.answer ? "Correct" : "Not quite"}
            </p>
            <p className="mt-1.5 text-[0.86rem] leading-relaxed text-foreground/75">
              {question.explanation}
            </p>
            <button
              type="button"
              onClick={next}
              className="btn-ink mt-4 inline-flex items-center gap-2"
            >
              {index === quiz.length - 1 ? "See my result" : "Next question"}
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}