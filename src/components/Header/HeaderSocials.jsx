import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        aria-label="Zachary's LinkedIn"
        href="https://linkedin.com/in/zachary-alexander-green/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        aria-label="Zachary's Github"
        href="https://github.com/Ultra-Zactimus"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;