import ProjectsGrid from '@/components/projects/projects-grid';
import projectsData from '@/lib/data/demos.json';

export default function DemosPage() {
  return (
    <div className="transition-opacity duration-300 ease-in-out opacity-0 [animation:fadeIn_0.5s_forwards]">
      <h1 className="mb-10">Demos</h1>
      <ProjectsGrid projects={projectsData.projects} />
    </div>
  );
}
