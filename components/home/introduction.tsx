import React from 'react';
import FadeInContent from '@/components/shared/fade-in-content';

function Introduction({ delay }: { delay: number }) {
  return (
    <FadeInContent delay={delay}>
      <p>
        Hello! I'm João — a full-stack developer who loves learning new tech and building maintainable, scalable software.
        I believe what we create can and will likely outlast us, and that matters.
      </p>
    </FadeInContent>
  );
}

export default Introduction;
