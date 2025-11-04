function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="hero-inner">
        <h1 className="hero-title">Mosa Yaqoobi</h1>
        <p className="hero-tagline">
        Computer Science student passionate about building scalable software, 
        solving complex algorithmic problems, and exploring AI/ML applications.
        </p>
        <div className="hero-actions">
          <a className="btn" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
      <a
        className="scroll-cue"
        href="#projects"
        aria-label="Scroll to projects"
      >
        ▼
      </a>
    </section>
  );
}
export default Hero;
