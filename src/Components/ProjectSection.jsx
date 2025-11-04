import Card from "./Card.jsx";
import { projects } from "../projects.js";

function ProjectSection() {
  return (
    <section id="projects" className="sections">
      <h2>Projects</h2>
      <div className="experience-grid">
        {projects.map((p) => (
          <Card key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
export default ProjectSection;
