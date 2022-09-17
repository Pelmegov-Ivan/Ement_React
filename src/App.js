import "./App.css";
import React from "react";
import HomePage from "./components/HomePage";
import Footer1 from "./components/Footer1";
import Footer2 from "./components/Footer2";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MotionDesign from "./components/MotionDesign";
function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/motion" element={<MotionDesign />} />
        </Routes>
        <Footer1 />
        <Footer2 />
      </div>
    </BrowserRouter>
  );
}
export default App;
