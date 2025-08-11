import { CircleSmall } from 'lucide-react';
import React from 'react';
import FadeInContent from '@/components/shared/fade-in-content';
import TextScramble from '@/components/shared/text-scramble';

function WhatIBuild({ delay }: { delay: number }) {
  return (
    <div>
      <FadeInContent delay={delay}>
        <div className="flex items-center gap-2 mb-3">
          <CircleSmall className="text-cyan-500" />
          <h2 className="text-xl font-bold">
            <TextScramble text="What I build" delay={delay} />
          </h2>
        </div>
      </FadeInContent>
      <FadeInContent delay={delay + 1050}>
        <p className="mb-6">Full-stack applications with</p>
        <ul className="grid space-y-4 space-x-4 md:grid-cols-2 list-disc list-inside">
          <li>
            <h3 className="font-bold text-md inline">Frontend</h3>
            <p>Next.js, React, Blazor</p>
          </li>
          <li>
            <h3 className="font-bold text-md inline">Backend</h3>
            <p>Express, .NET</p>
          </li>
          <li>
            <h3 className="font-bold text-md inline">Databases</h3>
            <p>MySQL, PostgreSQL, SQL Server, MongoDB</p>
          </li>
          <li>
            <h3 className="font-bold text-md inline">ORMs</h3>
            <p>Drizzle, Prisma, Entity Framework, Mongoose</p>
          </li>
          <li>
            <h3 className="font-bold text-md inline">CI/CD</h3>
            <p>GitHub Actions</p>
          </li>
          <li>
            <h3 className="font-bold text-md inline">Testing</h3>
            <p>Vitest, Vitest Browser, Storybook</p>
          </li>
        </ul>
      </FadeInContent>
    </div>
  );
}

export default WhatIBuild;
