import "../App.css";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">projects</h2>

      {/* Bee-Live Project */}
      <div className="project-card">
        <h3>Bee-Live</h3>
        <p>A full-stack AI-powered study focus app built with React, AWS Amplify, Lambda, and DynamoDB. Users can add courses, get AI-generated study tips, and securely retrieve their saved data across sessions.</p>
        <div className="project-buttons">
          <a href="https://github.com/Blessing-K/bee-live.git" target="_blank" rel="noopener noreferrer">View Code</a>
          <a href="https://bee-live.vercel.app/login" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>

      {/* Productivity App */}
      <div className="project-card">
        <h3>Productivity App</h3>
        <p>A collaborative full-stack productivity app built with react and modern web tools. Helps users manage tasks, set and track personal goals, and provides curated motivational quotes, ultimately enhancing overall productivity.</p>
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
