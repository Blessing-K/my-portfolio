import { ReactTyped } from "react-typed";
import "../App.css";

function Home() {
  return (
    <section id="home" className="section home">
      <div className="home-content">
        <h1 className="main-heading">
          <span className="hi-text">Hi, </span>
          <span className="name-text">Blessing</span> here
          <span className="blinking-cursor">|</span>
        </h1>
        <h2 className="sub-heading">
          <ReactTyped
            strings={[
              "I love developing problem-solving products.",
              "I'm motivated by innovation and lifelong learning.",
              "Let's build something amazing together!"
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </h2>
      </div>
    </section>
  );
}

export default Home;