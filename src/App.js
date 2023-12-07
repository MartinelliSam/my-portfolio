import "./App.css";
import "./variables.css";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Loading from "components/Loading/Loading.js";
import Privacy from "components/Privacy/Privacy.js";
import Home from "components/Home.js";
import Notice from "components/Notice/Notice.js";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
};

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);
  if (loading && window.innerWidth > 800) {
    return <Loading />;
  }

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/notice" element={<Notice />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;