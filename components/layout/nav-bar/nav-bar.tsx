import { Github } from 'lucide-react';
import React from 'react';
import { ThemeToggle } from '../../theme/theme-toggle';
import NavLink from './nav-link';

function NavBar() {
  return (
    <nav className="flex justify-between items-center py-8 px-4">
      <NavLink href="/" label="João Carvalho">
        <span className="nav-link-logo">JC</span>
      </NavLink>
      <div className="flex items-center gap-4">
        <ul>
          <li>
            <NavLink href="https://github.com/joaoc-dev" label="Github">
              <Github className="nav-link-icon" />
            </NavLink>
          </li>
        </ul>
        <ThemeToggle />
      </div>

    </nav>

  );
}

export default NavBar;
