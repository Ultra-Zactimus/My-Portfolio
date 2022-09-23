import Image from 'next/image';
import forest1 from '../../../public/forest1.jpg';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id="home" className="header">
      <div className="container header__container">
        <h5>Hello I&lsquo;m</h5>
        <h1>Zachary Green</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="header__image">
          <Image 
            src={forest1} 
            alt="code terminal" 
            className="img"
          />
        </div>        
        <a className="scroll__down" href="#contact" aria-label="Scroll Down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header