import { projects } from "@/content/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ limit }: { limit?: number }) {
  const list = limit ? projects.slice(0, limit) : projects;
  return (
    <div className="grid gap-10">
      {list.map((project, i) => (
        <ProjectCard key={project.slug} project={project} index={i} />
      ))}
    </div>
  );
}
