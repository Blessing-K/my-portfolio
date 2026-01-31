import "../App.css";

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-content">
        <div className="about-image reveal" style={{ "--delay": "0s" }}>
          <img
            src="/assets/profile.jpg"
            alt="Blessing"
            className="profile-pic"
          />
        </div>
        <div className="about-text reveal" style={{ "--delay": "0.12s" }}>
          <h2 className="section-title reveal" style={{ "--delay": "0.12s" }}>
            About Me
          </h2>
          <div className="about-details">
            <p>
              I'm currently a <strong>Computer Programming and Analysis</strong>{" "}
              student at <strong>Humber Polytechnic</strong>. I love building
              products that make a difference.
            </p>

            <p>Here are some technologies I've been working with:</p>

            <ul className="tech-list">
              <li className="reveal" style={{ "--delay": "0.24s" }}>
                Java
              </li>
              <li className="reveal" style={{ "--delay": "0.28s" }}>
                Python
              </li>
              <li className="reveal" style={{ "--delay": "0.32s" }}>
                JavaScript
              </li>
              <li className="reveal" style={{ "--delay": "0.36s" }}>
                React Native
              </li>
              <li className="reveal" style={{ "--delay": "0.40s" }}>
                React.js
              </li>
              <li className="reveal" style={{ "--delay": "0.44s" }}>
                Spring Boot
              </li>
              <li className="reveal" style={{ "--delay": "0.48s" }}>
                Node.js
              </li>
              <li className="reveal" style={{ "--delay": "0.52s" }}>
                SQL
              </li>
              <li className="reveal" style={{ "--delay": "0.56s" }}>
                AWS (Amazon Web Services)
              </li>
            </ul>

            <p className="reveal" style={{ "--delay": "0.60s" }}>
              Beyond work and school, I&apos;m big on personal growth, mostly
              through podcasts and YouTube (books and I are still negotiating
              😅). I love dancing, it&apos;s my therapy, and I thrive around
              ambitious friends who hype my wild ideas like “I want to build a
              mansion in the sky” and they go, “WHEN ARE WE STARTING?”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
