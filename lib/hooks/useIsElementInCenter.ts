'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useEventListener } from 'usehooks-ts';

/**
 * Checks if an element is centered within the viewport.
 *
 * @param element - The element to check.
 * @param threshold - The threshold distance from the viewport center.
 * @returns True if the element is centered, false otherwise.
 */
function isElementInCenter(element: HTMLElement, threshold: number): boolean {
  // Get the element size and position relative to the viewport
  const rect = element.getBoundingClientRect();

  // rect.top is the distance from the viewport top to the element top edge
  // rect.height / 2 moves halfway down the element to its vertical center
  const elementCenterY = rect.top + rect.height / 2;

  // Calculate the vertical center of the viewport
  const viewportCenterY = window.innerHeight / 2;

  // Check if the element's center is within the threshold distance from the viewport center
  return Math.abs(elementCenterY - viewportCenterY) <= threshold;
}

/**
 * Custom hook to check if an element is centered within the viewport.
 *
 * @param elementRef - The ref object containing the element to check.
 * @returns True if the element is centered, false otherwise.
 */
export function useIsElementInCenter(
  elementRef: React.RefObject<HTMLElement | null>,
) {
  const [isCentered, setIsCentered] = useState(false);
  const threshold = 175;

  // Keep a single requestAnimationFrame scheduled at a time. This coalesces many
  // fast scroll/resize events into at most one compute per frame, preventing
  // layout thrashing and keeping scroll performance smooth
  const rafRef = useRef<number>(0);

  const checkCenter = useCallback(() => {
    const el = elementRef.current;
    if (!el) {
      setIsCentered(false);
      return;
    }

    setIsCentered(isElementInCenter(el, threshold));
  }, [elementRef, threshold]);

  // Schedule a compute on the next animation frame, canceling any pending one
  // This ensures we never run more than once per frame even if multiple events fire
  const scheduleCompute = useCallback(() => {
    if (rafRef.current)
      cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(checkCenter);
  }, [checkCenter]);

  // Use passive listeners, but route them through rAF scheduling
  useEventListener('scroll', scheduleCompute);
  useEventListener('resize', scheduleCompute);

  useEffect(() => {
    // Perform an initial compute on mount or when dependencies change.
    scheduleCompute();
    // On unmount, cancel any pending animation frame.
    return () => {
      if (rafRef.current)
        cancelAnimationFrame(rafRef.current);
    };
  }, [scheduleCompute]);

  return isCentered;
}
