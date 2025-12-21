import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENT IMPORTS
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import CtaSection from "./components/CtaSetion";
import Footer from "./components/FooterSection";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUs";
import ServicePage from "./pages/ServiPage";

// OPTIONAL PAGES (if you create them later)
// import AboutPage from "./pages/AboutPage";
// import ServicesPage from "./pages/ServicesPage";
// import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Router>
      <>
        {/* COMMON NAVBAR */}
        <Navbar />

        <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Features />
                <Services />
                <WhyChooseUs />
                <CtaSection />
              </>
            }
          />

          {/* OPTIONAL ROUTES */}
          <Route path="/about" element={<AboutUsPage/>} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer/>
      </>
    </Router>
  );
}
