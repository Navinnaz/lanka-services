import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import BeforeAfter from "@/components/BeforeAfter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <BeforeAfter />
      <Gallery />
      <Reviews />
      <Contact />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Index;
