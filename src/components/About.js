import "../App.css";

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-content">
        <div className="about-image">
          <img
            src="/assets/profile.jpg" 
            alt="Blessing"
            className="profile-pic"
          />
        </div>
        <div className="about-text">
          <h2 className="section-title">about me</h2>
          <div className="about-details">
            <p>
              I'm currently a <strong>Computer Programming and Analysis</strong> student at <strong>Humber Polytechnic</strong>. 
              I love building products that make a difference.
            </p>
            
            <p>Here are some technologies I've been working with:</p>
            
            <ul className="tech-list">
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Python</li>
              <li>Java</li>
              <li>SQL</li>
              <li>AWS (Amazon Web Services)</li>
            </ul>
            
            <p>
            Beyond work and studies, I&apos;m passionate about personal growth, whether it&apos;s diving into insightful books or exploring new ideas that push me to evolve. For fun, I dance to music - my perfect escape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;