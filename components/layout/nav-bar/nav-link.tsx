import Link from 'next/link';
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface NavLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

function NavLink({ href, label, children }: NavLinkProps) {
  return (
    <Tooltip delayDuration={700}>
      <TooltipTrigger>
        <Link href={href} aria-label={label} className="nav-link">
          {children}
        </Link>
      </TooltipTrigger>
      <TooltipContent side="top" sideOffset={20}>
        {label}
      </TooltipContent>
    </Tooltip>
  );
}

export default NavLink;
