'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import * as React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui-modified/tooltip';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Tooltip delayDuration={700}>
      <TooltipTrigger asChild>
        <button
          type="button"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="relative flex items-center nav-link nav-link-icon"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        sideOffset={20}
        showArrow={false}
        className="rounded-xs hidden md:block"
      >
        Toggle theme
      </TooltipContent>
    </Tooltip>

  );
}
