import Navbar from "components/Navbar/Navbar.js";
import Header from "components/Header/Header.js";
import About from "components/About/About.js";
import ProjectsList from "components/Projects/ProjectsList.js";
import Skills from "components/Skills/Skills.js";
import Contact from "components/Contact/Contact.js";
import Footer from "components/Footer/Footer.js";
import ScrollButton from "components/ScrollButton/ScrollButton.js";
import ReturnToTop from "components/ReturnToTop/ReturnToTop.js";

import { useCallback, useState, useEffect } from "react";
import { loadFull } from "tsparticles";

import Particles from "react-tsparticles";
import particlesConfig from "particlesConfig.js";


const Home = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
      />
      <Navbar />
      <Header />
      <About />
      <ProjectsList />
      <Skills />
      <Contact />
      {windowWidth < 650 && <ReturnToTop />}
      <Footer />
      <ScrollButton />
    </div>
  );
};

export default Home;
