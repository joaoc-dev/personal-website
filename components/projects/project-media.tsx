import type { Project } from '@/components/projects/types';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ProjectMediaProps {
  project: Project;
  isActive: boolean;
}

export function ProjectMedia({ project, isActive }: ProjectMediaProps) {
  const [isReady, setIsReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const screenshotSrc = project.screenshot.startsWith('/')
    ? project.screenshot
    : `/${project.screenshot}`;
  const videoSrc = project.video.startsWith('/')
    ? project.video
    : `/${project.video}`;

  useEffect(() => {
    if (!isActive || !videoRef.current)
      return;

    const video = videoRef.current;
    void video.play().catch(() => {});
  }, [isActive]);

  return (
    <div className="relative w-full overflow-hidden border-b border-base">
      {project.screenshot
        ? (
            <Image
              src={screenshotSrc}
              alt={`${project.title} screenshot`}
              width={1920}
              height={1080}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          )
        : (
            <div className="absolute inset-0 bg-muted" />
          )}

      {isActive && (
        <video
          ref={videoRef}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-200 z-10',
            isReady ? 'opacity-100' : 'opacity-0',
          )}
          preload="metadata"
          loop
          muted
          playsInline
          aria-hidden
          poster={screenshotSrc}
          key={project.id}
          onLoadedData={() => setIsReady(true)}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
