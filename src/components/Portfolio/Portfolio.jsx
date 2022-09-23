import Image from "next/image";
import myWebpages from "./index";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h1 className="small">My Recent Work</h1>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {myWebpages.map(({ id, image, title, desc, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item--image">
                <Image 
                  src={image} 
                  alt={title} 
                  className="img"
                />
              </div>
              <h3>{title}</h3>
              <small>{desc}</small>
              <div className="portfolio__item--cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github"
                >
                  GitHub
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;