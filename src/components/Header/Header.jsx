import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id="home" className="header">
      <div className="container header__container">
        <h1 className='small'>Hello I&apos;m</h1>
        <h2 className='large'>Zachary Green</h2>
        <h3 className="text-light small">Full Stack Developer</h3>
        <CTA />
        <HeaderSocials />      
        <a className="scroll__down" href="#contact" aria-label="Scroll Down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header