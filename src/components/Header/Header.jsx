import Image from 'next/image';
import forest1 from '../../../public/forest1.jpg';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id="home" className="header">
      <div className="container header__container">
        <h1 className='small'>Hello I&lsquo;m</h1>
        <h2 className='large'>Zachary Green</h2>
        <h3 className="text-light small">Full Stack Developer</h3>
        <CTA />
        <HeaderSocials />
        <div className="header__image">
          <Image 
            src={forest1} 
            alt="code terminal" 
            className="img"
            width={1100}
            height={1000}
          />
        </div>        
        <a className="scroll__down" href="#contact" aria-label="Scroll Down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header