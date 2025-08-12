'use client';

import type { ISourceOptions } from '@tsparticles/engine';
import { MoveDirection, OutMode } from '@tsparticles/engine';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { useEffect, useMemo, useState } from 'react';

function ParticleBackground() {
  const [init, setInit] = useState(false);
  const { resolvedTheme } = useTheme();

  // this should be run only once per application lifetime
  useEffect(() => {
    let mounted = true;
    (async () => {
      const [{ initParticlesEngine }, { loadSlim }] = await Promise.all([
        import('@tsparticles/react'),
        import('@tsparticles/slim'),
      ]);
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      if (mounted)
        setInit(true);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: resolvedTheme === 'dark' ? '#ffffff' : '#0b0b0b',
        },
        links: {
          color: resolvedTheme === 'dark' ? '#ffffff' : '#0b0b0b',
          distance: 90,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 0.8,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 120,
        },
        opacity: {
          value: { min: 0.1, max: 0.3 },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 0.5, max: 2 },
        },
      },
      detectRetina: true,
      pauseOnBlur: true,
    }),
    [resolvedTheme],
  );

  if (!init)
    return null;

  const LazyParticles = dynamic(() => import('@tsparticles/react').then(m => m.default), { ssr: false });
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <LazyParticles id="tsparticles" options={options} />
    </div>
  );
}

export default ParticleBackground;
