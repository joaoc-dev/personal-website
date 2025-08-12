import { CircleSmall } from 'lucide-react';
import React from 'react';
import FadeInContent from '@/components/shared/fade-in-content';
import TextScramble from '@/components/shared/text-scramble';

function HowIWork({ delay }: { delay: number }) {
  return (
    <div>
      <FadeInContent delay={delay}>
        <div className="flex items-center gap-2 mb-3">
          <CircleSmall className="text-cyan-500" />
          <h2 className="text-xl font-bold">
            <TextScramble text="How I work" delay={delay} />
          </h2>
        </div>
      </FadeInContent>
      <FadeInContent delay={delay + 850}>
        <p>
          I view coding as a creative effort and a way of bringing ideas to life.
          I enjoy creating something that is beautiful to use and a pleasure to maintain.
        </p>
      </FadeInContent>
    </div>
  );
}

export default HowIWork;
