function ExperienceCard({ title, company, location, period, description, skills, href }) {
  const content = (
    <div className="experience-card">
      <div className="experience-header">
        <div>
          <h3>{title}</h3>
          <p className="experience-company">{company}</p>
          <p className="experience-meta">
            {location} • {period}
          </p>
        </div>
      </div>
      <p className="experience-description">{description}</p>
      {skills && skills.length > 0 && (
        <div className="experience-skills">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="experience-link">
        {content}
      </a>
    );
  }

  return content;
}

export default ExperienceCard;

