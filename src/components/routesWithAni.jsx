import { Route, Routes, useLocation } from "react-router-dom";
import Mainpage from "./mainpage";
import Header from "./header";
import Footer from "./footer";
import { useState } from "react";
import { useEffect } from "react";
import Rockps from "./rps";
import ContactPage from "./Contact";

import ProjectPage from "./projectpage";

function RoutesWithAni() {
  const [isFirstMount, setIsFirstMount] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsFirstMount(false);
    }
  }, [location.pathname]);

  return (
    <div className="relative pb-80">
      <Header />
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Mainpage isFirstMount={isFirstMount} />} />
        <Route path="/rps" element={<Rockps />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/projectpage/:id" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default RoutesWithAni;
