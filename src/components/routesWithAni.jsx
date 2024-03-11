import { Route, Routes, useLocation } from "react-router-dom";
import Mainpage from "./mainpage";
import Header from "./header";
import { useState } from "react";
import { useEffect } from "react";
import Rockps from "./rps";

function RoutesWithAni() {
  const [isFirstMount, setIsFirstMount] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsFirstMount(false);
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Mainpage isFirstMount={isFirstMount} />} />
        <Route path="/rps" element={<Rockps />} />
      </Routes>
    </div>
  );
}

export default RoutesWithAni;
