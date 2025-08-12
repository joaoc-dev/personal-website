'use client';

import { useEffect } from 'react';
import { useScramble } from 'use-scramble';
import { useMediaQuery } from 'usehooks-ts';

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TextScramble({ text, className, delay = 0 }: TextScrambleProps) {
  const { ref, replay } = useScramble({ text, scramble: 15, tick: 2, speed: 0.9, playOnMount: false });
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      if (!prefersReducedMotion)
        replay();
    }, delay);
    return () => window.clearTimeout(timeoutId);
  }, [delay, replay, prefersReducedMotion]);

  return <span ref={ref} className={className} />;
}
