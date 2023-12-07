import { useState, useEffect } from 'react';
import Burger from './Burger';
import Navbar from './Navbar';

export default function Navigation() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  
  
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

  return (
    <>
      <div className="burger" onClick={toggleBurger}>
        <Burger burgerOpen={burgerOpen} toggleBurger={toggleBurger}/>
      </div>
      <Navbar burgerOpen={burgerOpen} />
    </>
  );
}
