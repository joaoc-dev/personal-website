'use client';

import type { Project } from '@/components/projects/types';
import { useMemo } from 'react';
import { useIsClient } from 'usehooks-ts';
import ProjectCard from '@/components/projects/project-card';
import { useBreakpointColumns } from '@/lib/hooks/useBreakpointColumns';

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const { columns } = useBreakpointColumns();

  const isClient = useIsClient();

  // Due to masonry style achieved via CSS columns, we need to reorder the items
  // so that the visual reading order across rows is preserved (1,2,3 / 4,5,6 / ...)
  const reorderedProjects = useMemo(() => {
    // On the server and first client render, avoid reordering to prevent hydration mismatches
    if (!isClient || columns === 1)
      return projects;

    const result: Project[] = [];

    // Calculate how many rows are needed to fit all projects given the column count
    const rows = Math.ceil(projects.length / columns);

    // Loop through each column first (0 to columns-1)
    for (let c = 0; c < columns; c++) {
      // Then loop through each row within that column (0 to rows-1)
      for (let r = 0; r < rows; r++) {
        // Calculate the index in the original projects array that would be
        // located at row r and column c in a row-major layout
        const idx = r * columns + c;

        // If the index is within bounds, push that project into the result array
        // This effectively reorders the array from row-major order to column-major order
        if (idx < projects.length)
          result.push(projects[idx]!);
      }
    }

    // Return the reordered array so that when rendered in a masonry layout (which
    // fills columns top-to-bottom), the visual order respects the original left-to-right,
    // top-to-bottom reading order.
    return result;
  }, [projects, columns, isClient]);

  return (
    <div className="columns-1 lg:columns-2 xl:columns-3 [column-gap:theme(spacing.8)]">
      {reorderedProjects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectsGrid;
