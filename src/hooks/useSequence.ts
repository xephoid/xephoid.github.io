import { useState, useEffect } from "react";

export interface SequenceLine {
  prompt?: boolean;
  text: string;
  speed?: number;
  pauseAfter?: number;
  instant?: boolean;
}

export interface SequenceState {
  lines: Array<{ prompt: boolean; text: string; done: boolean }>;
  done: boolean;
}

export function useSequence(sequence: SequenceLine[]): SequenceState {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [pausing, setPausing] = useState(false);
  const [lines, setLines] = useState<Array<{ prompt: boolean; text: string; done: boolean }>>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    const current = sequence[lineIndex];
    if (!current) { setDone(true); return; }

    if (pausing) {
      const t = setTimeout(() => {
        setPausing(false);
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, current.pauseAfter ?? 400);
      return () => clearTimeout(t);
    }

    if (charIndex === 0) {
      // Instant lines appear fully immediately
      if (current.instant) {
        setLines((prev) => [
          ...prev,
          { prompt: current.prompt ?? false, text: current.text, done: true },
        ]);
        setPausing(true);
        return;
      }
      setLines((prev) => [
        ...prev,
        { prompt: current.prompt ?? false, text: "", done: false },
      ]);
    }

    const speed = current.speed ?? 45;
    const t = setTimeout(() => {
      const next = current.text.slice(0, charIndex + 1);
      setLines((prev) =>
        prev.map((l, i) =>
          i === prev.length - 1 ? { ...l, text: next } : l
        )
      );
      if (charIndex + 1 >= current.text.length) {
        setLines((prev) =>
          prev.map((l, i) => (i === prev.length - 1 ? { ...l, done: true } : l))
        );
        setPausing(true);
      } else {
        setCharIndex((c) => c + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [lineIndex, charIndex, pausing, done, sequence]);

  return { lines, done };
}