'use client';

import dynamic from 'next/dynamic';

const DynamicParticlesBackgroundWrapper = dynamic(() => import('./particles-background'), {
  ssr: false,
});

export default DynamicParticlesBackgroundWrapper;
