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

  useEffect(() => {
    if (!isActive || !videoRef.current)
      return;

    const video = videoRef.current;
    void video.play().catch(() => {});
  }, [isActive]);

  return (
    <div className="relative w-full aspect-video border-b border-foreground/5 overflow-hidden rounded-t-xs">
      {project.screenshot
        ? (
            <Image
              src={project.screenshot}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          )
        : (
            <div className="absolute inset-0 bg-muted" />
          )}

      {isActive && (
        <video
          ref={videoRef}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-200',
            isReady ? 'opacity-100' : 'opacity-0',
          )}
          preload="metadata"
          loop
          muted
          playsInline
          aria-hidden
          poster={project.screenshot}
          key={project.id}
          onLoadedData={() => setIsReady(true)}
        >
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
