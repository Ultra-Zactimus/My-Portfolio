import Image from "next/image";
import forest2 from "../../../public/forest2.png";
import { FaAward } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (  
    <section id="about" className="about">
      <h1 className="small">Get To Know</h1>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h1 className="small">Experience</h1>
              <small>6 Months of school, 1 month Internship</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h1 className="small">Projects</h1>
              <small>Dozens of apps in several languages & frameworks</small>
            </article>

            <article className="about__card">
              <GiStairsGoal className="about__icon" />
              <h1 className="small">Goals</h1>
              <small>Growing as a developer and creating a gaming app</small>
            </article>
          </div>
          <p>
            I am a Full Stack Developer from Northern California. I am passionate about creating beautiful UI/UX designs that myself and clients can be proud of. During the pandemic I attended Epicodus Coding School where I learned about coding and the dynamic of working in teams to create responsive designs. Adding me to your team means adding someone who loves what they do and the people they work with.
          </p>

          <a href="#contact" className="btn btn-primary" aria-label="Contact Me">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;