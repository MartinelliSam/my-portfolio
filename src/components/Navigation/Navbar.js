import './Navbar.css';
import { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Logo from 'assets/BlackWhiteMinimalistLogo@syammasfitria.png';

export default function Navbar({ burgerOpen, toggleBurger }) {


  useEffect(() => {
    const glass = document.getElementById('glass-bar');
    window.addEventListener('scroll', () => {
      if(window.innerWidth > 990) {
        if (window.scrollY < 800) {
          glass.className = '';
        } else {
          glass.className = 'glass';
        }
      } 
    });
  }, []);

  return (
    <nav>
      <ul id='glass-bar' className={`${burgerOpen ? "navbar-show" : "navbar-hide"}`}>
        <img src={Logo} alt='logo'/>
        <li><Link to="#about" className='navlink'>A propos</Link></li>
        <li><Link to="#projects" className='navlink'>Mes projets</Link></li>
        <li><Link to="#skills" className='navlink'>Compétences</Link></li>
        <li><Link to="#contact" className='navlink'>Contact</Link></li>
      </ul>
  </nav>
  )
}



