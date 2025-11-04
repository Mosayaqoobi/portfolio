import ExperienceCard from "./ExperienceCard.jsx";
import { experience } from "../experience.js";

function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="experience-grid">
        {experience.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;

