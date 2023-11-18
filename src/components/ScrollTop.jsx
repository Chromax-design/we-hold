import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const path = useLocation();
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    toTop();
  }, [path]);
  return null;
};

export default ScrollTop;
