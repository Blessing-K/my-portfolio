import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
        <ul className="nav-links">
            <li><a href="#home">Blessing K</a></li>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
        </ul>
        <div className="nav-icons">
            <a href="https://linkedin.com/in/boluwatito-kajopelaye-ola-15678b285" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Blessing-K" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="mailto:blessingkajopelayeola@gmail.com"><FaEnvelope /></a>
        </div>
    </nav>
  );
}

export default Navbar;
