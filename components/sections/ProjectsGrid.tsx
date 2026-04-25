import { projects } from "@/content/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ limit }: { limit?: number }) {
  const list = limit ? projects.slice(0, limit) : projects;
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {list.map((p, i) => (
        <div key={p.slug} id={p.slug} className="scroll-mt-28">
          <ProjectCard p={p} index={i} />
        </div>
      ))}
    </div>
  );
}
