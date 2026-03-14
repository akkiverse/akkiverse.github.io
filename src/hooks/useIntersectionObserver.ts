import { useEffect, useRef, useState } from 'react';

interface IntersectionOptions {
  threshold?: number;
  rootMargin?: string;
  /** Once true, never goes back to false */
  once?: boolean;
}

/**
 * Observes when an element enters the viewport.
 * Returns a ref to attach to the target element and an `isVisible` boolean.
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLElement>({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  once = true,
}: IntersectionOptions = {}) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
