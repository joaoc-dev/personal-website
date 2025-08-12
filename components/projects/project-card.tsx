'use client';

import type { Project } from '@/components/projects/types';
import { ArrowUpRight, Github } from 'lucide-react';
import { useRef, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useBreakpointColumns } from '@/lib/hooks/useBreakpointColumns';
import { useIsElementInCenter } from '@/lib/hooks/useIsElementInCenter';
import { cn } from '@/lib/utils';
import { ProjectMedia } from './project-media';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  // Check if the pointer is fine (mouse) or coarse (touch)
  const isFinePointer = useMediaQuery('(hover: hover) and (pointer: fine)');
  const isCoarsePointer = !isFinePointer;

  // Check if the grid is in single column mode
  const { columns } = useBreakpointColumns();
  const isSingleColumn = columns === 1;

  // Check if the project card is centered in the viewport
  const projectRef = useRef<HTMLDivElement>(null);
  const isCentered = useIsElementInCenter(projectRef);

  // Determines if the project card is active/highlighted when the pointer is coarse (touch)
  const coarseActive = isCoarsePointer && isSingleColumn ? isCentered : false;

  // Determines if the project card is active/highlighted when the pointer is fine (mouse)
  const [isHoverActive, setIsHoverActive] = useState(false);

  // Determines if the project card is active/highlighted
  const isActive = isFinePointer ? isHoverActive : coarseActive;

  // Fine pointer(mouse) behavior: attach hover handlers
  const hoverHandlers = isFinePointer
    ? ({
        onPointerEnter: () => setIsHoverActive(true),
        onPointerLeave: () => setIsHoverActive(false),
      } as const)
    : {};

  return (
    <div
      ref={projectRef}
      data-card-id={project.id}
      {...hoverHandlers}
      className={cn(
        // Base styles
        'break-inside-avoid mb-8 transition-transform duration-300 ease-in-out',
        // Desktop hover scale via class, mobile/in-view scale via state
        'hover:scale-105',
        isActive && 'scale-105',
      )}
    >
      <Card className="rounded-xs overflow-hidden pt-0">
        <ProjectMedia project={project} isActive={isActive} />
        <CardHeader className="flex flex-col gap-2">
          <div className="flex gap-2 flex-wrap">
            {(project.tags ?? []).map(tag => (
              <Badge key={tag} className="rounded-xs">{tag}</Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between">
          <a className="text-link flex items-center gap-2" href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <span>Live</span>
            <ArrowUpRight />
          </a>
          <a className="text-link flex items-center gap-3" href={project.github} target="_blank" rel="noopener noreferrer">
            <span>Repo</span>
            <Github className="size-4" />
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ProjectCard;
