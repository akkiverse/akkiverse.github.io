import { useState, useEffect, useCallback } from 'react';

interface TypewriterOptions {
  /** Array of strings to cycle through */
  words: string[];
  /** Milliseconds per character typed */
  typeSpeed?: number;
  /** Milliseconds per character deleted */
  deleteSpeed?: number;
  /** Pause duration after fully typing a word */
  pauseDuration?: number;
}

interface TypewriterResult {
  displayText: string;
  isTyping: boolean;
}

/**
 * Custom hook that cycles through an array of words with a typewriter animation effect.
 * Respects prefers-reduced-motion by instantly showing the first word.
 */
export function useTypewriter({
  words,
  typeSpeed = 80,
  deleteSpeed = 40,
  pauseDuration = 2000,
}: TypewriterOptions): TypewriterResult {
  const prefersReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const [displayText, setDisplayText] = useState<string>(prefersReducedMotion ? (words[0] ?? '') : '');
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(!prefersReducedMotion);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const tick = useCallback(() => {
    if (prefersReducedMotion) return;

    const currentWord = words[wordIndex] ?? '';

    if (isPaused) {
      setIsPaused(false);
      setIsDeleting(true);
      return;
    }

    if (isDeleting) {
      setDisplayText((prev) => prev.slice(0, -1));
      if (displayText.length === 1) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      setDisplayText(currentWord.slice(0, displayText.length + 1));
      if (displayText.length === currentWord.length - 1) {
        setIsPaused(true);
        setIsTyping(false);
        setTimeout(() => setIsTyping(true), pauseDuration);
      }
    }
  }, [words, wordIndex, isDeleting, displayText, isPaused, pauseDuration, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const speed = isPaused ? pauseDuration : isDeleting ? deleteSpeed : typeSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, isPaused, typeSpeed, deleteSpeed, pauseDuration, prefersReducedMotion]);

  return { displayText, isTyping };
}
