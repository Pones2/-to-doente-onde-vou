import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={null} />
      <Route path="/resultado" element={null} />
      <Route path="*" element={null} />
    </Routes>
  );
};

export default Router;
