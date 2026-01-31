import "../App.css";

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <h2 className="section-title reveal" style={{ "--delay": "0s" }}>
        Experience
      </h2>

      <div className="experience-grid">
        <div className="company-header reveal" style={{ "--delay": "0.12s" }}>
          <h3>SOFTWARE ENGINEER INTERN @ Syntax Ready Inc</h3>
          <span className="date-range">Jan 2025 - Present</span>
        </div>
        <ul className="experience-list reveal" style={{ "--delay": "0.24s" }}>
          <li className="experience-item">
            <span className="checkbox">[x]</span>
            Teach Python programming to children aged 7–16 through interactive
            lessons and coding exercises
          </li>
          <li className="experience-item">
            <span className="checkbox">[x]</span>
            Mentor and coach young learners for hackathons, supported team
            winning 1st place at the SyntaxReady Summer AI Hackathon 2025
          </li>
          <li className="experience-item">
            <span className="checkbox">[x]</span>
            Collaborate with cross-functional teams to design and deploy
            scalable full-stack applications using React.js, Python
            (Django/Flask), Java (Spring Boot), and PostgreSQL, optimizing
            performance and user experience
          </li>
          <li className="experience-item">
            <span className="checkbox">[x]</span>
            Designed and developed a high-traffic voting tool using React,
            TypeScript and SQL
          </li>
          <li className="experience-item">
            <span className="checkbox">[x]</span>
            Leverage prompt engineering to create smart tech experiences
          </li>
          <li className="experience-item">
            <span className="checkbox">[x]</span>
            Follow Agile practices, collaborating on GitHub with version
            control, regular commits, and pull request
          </li>
        </ul>

        <div className="company-header reveal" style={{ "--delay": "0.36s" }}>
          <h3>VOLUNTEER SOFTWARE DEVELOPER @ Reactify.ca</h3>
          <span className="date-range">Dec 2024 - May 2025</span>
        </div>
        <ul className="experience-list reveal" style={{ "--delay": "0.48s" }}>
          <li className="experience-item">
            <span className="checkbox">[x]</span>
            Built a responsive 1:1 course page replica for the organization
            using React.js
          </li>
          <li className="experience-item">
            <span className="checkbox">[x]</span>
            Implemented pixel-perfect UI/UX while contributing 4 hours weekly to
            ongoing development
          </li>
          <li className="experience-item">
            <span className="checkbox">[x]</span>
            Collaborated with maintainers via GitHub to improve code quality and
            component structure
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
