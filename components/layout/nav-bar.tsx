import Link from 'next/link';
import React from 'react';
import { ThemeToggle } from '../ui/theme-toggle';

function NavBar() {
  return (
    <nav className="flex justify-between items-center py-8 px-4">
      <Link href="/">
        <span className="logo">JC</span>
      </Link>
      <ThemeToggle />
    </nav>

  );
}

export default NavBar;
