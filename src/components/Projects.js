import "../App.css";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title reveal" style={{ "--delay": "0s" }}>
        Projects
      </h2>

      <div className="project-card reveal" style={{ "--delay": "0s" }}>
        <h3>Francopass</h3>
        <p>
          A cross-platform mobile application for French exam preparation,
          featuring interactive practice tests, vocabulary building, video
          lessons, and AI-powered speaking analysis. Built with React Native,
          Expo, Node.js, Express, and MongoDB.
        </p>
        <div className="project-buttons">
          <a
            href="https://github.com/Blessing-K/francopass-mobile-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
          <a
            href="https://drive.google.com/file/d/1Q28twNl1iHjYKQqeQDB8vJ1cT0qLmphu/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Video Demo
          </a>
        </div>
      </div>

      <div className="project-card reveal" style={{ "--delay": "0.12s" }}>
        <h3>Text Processing Pipeline</h3>
        <p>
          A JavaFX text processing pipeline that performs tokenization,
          normalization, frequency analysis, and n-gram generation, with
          optional persistence to a MySQL database.
        </p>
        <div className="project-buttons">
          <a
            href="https://github.com/Blessing-K/text-processing-pipeline-javafx-mysql"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
          <a
            href="https://drive.google.com/file/d/1wKsWLSANMw8BNAvLrcCMYBWL3xg-2n_x/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Video Demo
          </a>
        </div>
      </div>

      {/* Bee-Live Project */}
      <div className="project-card reveal" style={{ "--delay": "0.24s" }}>
        <h3>Bee-Live</h3>
        <p>
          A full-stack AI-powered study focus app built with React, AWS Amplify,
          Lambda, and DynamoDB. Users can add courses, get AI-generated study
          tips, and securely retrieve their saved data across sessions.
        </p>
        <div className="project-buttons">
          <a
            href="https://github.com/Blessing-K/bee-live.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
          <a
            href="https://bee-live.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>

      {/* Productivity App */}

      <p style={{ marginTop: "3rem", textAlign: "center" }}>
        Thanks for viewing! Watch out for more to come.
      </p>
    </section>
  );
}

export default Projects;
