import './Navbar.css';
import { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Logo from 'assets/BlackWhiteMinimalistLogo@syammasfitria.png';
import Burger from './Burger.js';

export default function Navbar() {

  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen)
  }
  
  useEffect(() => {
    const handleResize = () => {
      
      const mediaQuery = window.matchMedia('(max-width: 990px)');
      setBurgerOpen(!mediaQuery.matches); 
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

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
      <div className="burger" onClick={toggleBurger}>
        <Burger burgerOpen={burgerOpen}/>
      </div>
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



