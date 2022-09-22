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
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://google.com">
          <FaFacebook />
        </a>
        <a href="https://google.com">
          <FiInstagram />
        </a>
        <a href="https://google.com">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Zachary Green 2022. All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;