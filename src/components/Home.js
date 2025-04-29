import { ReactTyped } from "react-typed";
import "../App.css";

function Home() {
  return (
    <section id="home" className="section home">
      <h1>
        <ReactTyped
          strings={[
            "Hi, Blessing here.",
            "I love developing problem-solving products.",
            "I'm motivated by innovation and lifelong learning.",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </h1>
    </section>
  );
}

export default Home;
