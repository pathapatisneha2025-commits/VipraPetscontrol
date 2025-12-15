import Navbar  from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import CtaSection from "./components/CtaSetion";
import Footer from "./components/FooterSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features></Features>
      <Services/>
      <WhyChooseUs/>
      <CtaSection/>
      <Footer/>
    </>
  );
}

export default App;
