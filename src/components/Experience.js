import "../App.css";

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <h2 className="section-title">/ experience</h2>
      
      <div className="experience-grid">
        <div className="company-header">
          <h3>SOFTWARE ENGINEER INTERN @ Syntax Ready Inc</h3>
          <span className="date-range">Jan 2025 - Present</span>
        </div>
        <ul className="experience-list">
          <li className="experience-item">
            <span className="checkbox">[x]</span>
            Developed full-stack features using React and Node.js
          </li>
          <li className="experience-item">
            <span className="checkbox">[x]</span>
            Optimized database queries reducing response time by 30%
          </li>
        </ul>
        
        <div className="company-header">
          <h3>TECHNICAL ASSISTANT @ Find and Deliver</h3>
          <span className="date-range">June 2024 - Dec 2024</span>
        </div>
        <ul className="experience-list">
          <li className="experience-item">
            <span className="checkbox">[x]</span>
            Provided technical support for web applications
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;