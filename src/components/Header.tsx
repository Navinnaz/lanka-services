import { Wrench } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-dark-bg border-b border-dark-secondary sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* <Wrench className="w-8 h-8 text-primary" /> */}
            <h1 className="text-2xl font-bold text-light-bg">Lanka Services</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-light-bg hover:text-primary transition-colors">
              À propos
            </a>
            <a href="#gallery" className="text-light-bg hover:text-primary transition-colors">
              Galerie
            </a>
            <a href="#reviews" className="text-light-bg hover:text-primary transition-colors">
              Avis
            </a>
            <a href="#contact" className="text-light-bg hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
