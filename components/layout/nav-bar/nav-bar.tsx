import { Github, Presentation } from 'lucide-react';
import React from 'react';
import { ThemeToggle } from '../../theme/theme-toggle';
import NavLink from './nav-link';

function NavBar() {
  return (
    <nav className="flex justify-between items-center py-8 px-4">
      <NavLink href="/" label="João Carvalho">
        <p className="nav-link-logo">JC</p>
      </NavLink>
      <div className="flex items-center gap-4">
        <ul className="flex items-center gap-4">
          <li>
            <NavLink href="/demos" label="Demos">
              <Presentation className="nav-link-icon" />
            </NavLink>
          </li>
          <li>
            <NavLink href="https://github.com/joaoc-dev" label="Github" isExternal>
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
