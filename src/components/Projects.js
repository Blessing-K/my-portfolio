import "../App.css";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      {/* Bee-Live Project */}
      <div className="project-card">
        <h3>Bee-Live</h3>
        <p>A full-stack AI/ML study focus app built with React and AWS Amplify. It helps users identify their weakest courses and suggests improvement tips using AI.</p>
        <div className="project-buttons">
          <a href="https://github.com/Blessing-K/bee-live.git" target="_blank" rel="noopener noreferrer">View Code</a>
          <a href="https://bee-live-te68.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>

      {/* Productivity App */}
      <div className="project-card">
        <h3>Productivity App</h3>
        <p>A collaborative React-based full-stack app for managing tasks, tracking goals, and boosting productivity with motivational quotes.</p>
        <div className="project-buttons">
          <a href="https://github.com/Blessing-K/productivity-app.git" target="_blank" rel="noopener noreferrer">View Code</a>
          <a href="https://productivity-app-livid-psi.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>

      <p style={{ marginTop: "3rem", textAlign: "center" }}>Thanks for viewing! Watch out for more to come.</p>
    </section>
  );
}

export default Projects;
