import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Landingscreen from "../src/pages/landingscreen/landingscreen";
import AboutIPro from "../src/pages/Aboutus/Aboutus";
import OurServices from "./pages/ourservices/ourservices";
import ContactUs from "./pages/Support/support";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Landingscreen/>} />
        <Route path="/about-us" element={<AboutIPro/>} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

