import type { Metadata } from 'next';
import AboutMe from '@/components/home/about-me';
import GetInTouch from '@/components/home/get-in-touch';
import HowIWork from '@/components/home/how-i-work';
import Introduction from '@/components/home/introduction';
import WhatIBuild from '@/components/home/what-i-build';

export const metadata: Metadata = {
  title: 'Full Stack Developer Portfolio',
  description: 'João Carvalho — full-stack developer crafting scalable, maintainable web apps.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 max-w-screen-md w-full mx-auto ">
      <section>
        <Introduction delay={100} />
      </section>
      <section>
        <WhatIBuild delay={600} />
      </section>
      <section>
        <HowIWork delay={2200} />
      </section>
      <section>
        <AboutMe delay={3400} />
      </section>
      <section>
        <GetInTouch delay={4800} />
      </section>
    </div>
  );
}
