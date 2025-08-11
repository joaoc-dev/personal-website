import Link from 'next/link';
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui-modified/tooltip';

interface NavLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
  isExternal?: boolean;
}

function NavLink({ href, label, children, isExternal }: NavLinkProps) {
  return (
    <Tooltip delayDuration={700}>
      <TooltipTrigger asChild>
        {isExternal
          ? (
              <a href={href} aria-label={label} className="nav-link" target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            )
          : (
              <Link href={href} aria-label={label} className="nav-link">
                {children}
              </Link>
            )}
      </TooltipTrigger>
      <TooltipContent
        side="top"
        sideOffset={20}
        showArrow={false}
        className="rounded-xs hidden md:block"
      >
        {label}
      </TooltipContent>
    </Tooltip>
  );
}

export default NavLink;
