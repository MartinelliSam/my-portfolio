import React, { useState, useEffect } from "react";
import Icons from "components/Icons.js";
import { scrollToTop } from "components/scrollUtils.js";
import "./ScrollButton.css";

const ScrollButton = () => {
  
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    const distanceFromTop = 500;

    if (scrolled > distanceFromTop) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <button
        id="scroll-button"
        onClick={scrollToTop}
        className={visible ? 'scroll-show' : ''}
      >
        <Icons name="ScrollButton" />
      </button>
    </>
  );
};

export default ScrollButton;
