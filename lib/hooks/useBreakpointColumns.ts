'use client';

import { useMediaQuery } from 'usehooks-ts';

/**
 * Returns responsive column info based on Tailwind lg/xl breakpoints.
 *
 * Breakpoints:
 * - lg (≥1024px): 2 columns
 * - xl (≥1280px): 3 columns
 * - otherwise: 1 column
 */
export function useBreakpointColumns(): {
  isLgUp: boolean;
  isXlUp: boolean;
  columns: number;
} {
  const isLgUp = useMediaQuery('(min-width: 1024px)');
  const isXlUp = useMediaQuery('(min-width: 1280px)');
  const columns = isXlUp ? 3 : isLgUp ? 2 : 1;
  return { isLgUp, isXlUp, columns };
}
