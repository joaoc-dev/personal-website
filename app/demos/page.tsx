import type { Metadata } from 'next';
import ProjectsGrid from '@/components/projects/projects-grid';
import projectsData from '@/lib/data/demos.json';

export const metadata: Metadata = {
  title: 'Demos',
  description: 'A curated set of interactive demos and projects by João Carvalho.',
  alternates: { canonical: '/demos' },
  openGraph: {
    title: 'Demos | João Carvalho',
    url: '/demos',
  },
};

export default function DemosPage() {
  return (
    <div className="transition-opacity duration-300 ease-in-out opacity-0 [animation:fadeIn_0.5s_forwards]">
      <h1 className="mb-10 text-xl font-bold">Demos</h1>
      <ProjectsGrid projects={projectsData.projects} />
    </div>
  );
}
