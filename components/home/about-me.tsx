import { CircleSmall } from 'lucide-react';
import React from 'react';
import FadeInContent from '@/components/shared/fade-in-content';
import TextScramble from '@/components/shared/text-scramble';

function AboutMe({ delay }: { delay: number }) {
  return (
    <div>
      <FadeInContent delay={delay}>
        <div className="flex items-center gap-2 mb-3">
          <CircleSmall className="text-cyan-500" />
          <h2 className="text-xl font-bold">
            <TextScramble text="About me" delay={delay} />
          </h2>
        </div>
      </FadeInContent>
      <FadeInContent delay={delay + 900}>
        <ul className="list-disc list-inside">
          <li>
            10 years in software development (from .NET WinForms to modern web
            stacks)
          </li>
          <li>Bachelor in Computing Sciences</li>
          <li>Experience in healthcare, archival, and ed-tech domains</li>
          <li>Playing piano, drawing, and ex-motorcyclist</li>
        </ul>
      </FadeInContent>
    </div>
  );
}

export default AboutMe;
