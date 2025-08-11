import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import FadeInContent from '@/components/shared/fade-in-content';

function GetInTouch({ delay }: { delay: number }) {
  return (
    <FadeInContent delay={delay}>
      <p className="mb-2">
        Feel free to check my
        {' '}
        <Link className="inline-flex items-center gap-1 group text-link" href="/demos" aria-label="View demos">
          demos
          <ArrowUpRight className="size-4 opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-300 ease-in-out" />
        </Link>
      </p>
      <p>
        Get in touch:
        {' '}
        {' '}
        <a href="mailto:contact@joao-carvalho.dev" className="text-link">contact@joao-carvalho.dev</a>
        {' '}
        ·
        {' '}
        <a
          href="https://github.com/joaoc-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          GitHub
        </a>
      </p>
    </FadeInContent>
  );
}

export default GetInTouch;
