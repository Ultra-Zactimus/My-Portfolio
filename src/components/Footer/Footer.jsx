import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer__container">
      <h2 id="footer" className="footer__logo">
        Zachary Green
      </h2>

      <ul className="permalinks">
        <li>
          <a href="#home" aria-label="Home">Home</a>
        </li>
        <li>
          <a href="#about" aria-label="About">About</a>
        </li>
        <li>
          <a href="#experience" aria-label="Experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio" aria-label="Portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact" aria-label="Contact">Contact</a>
        </li>
      </ul>
      
      <div className="footer__copyright">
        <small>&copy; Zachary Green 2022. All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;