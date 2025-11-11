const Footer = () => {
  return (
    <footer className="bg-dark-bg border-t border-dark-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <Wrench className="w-6 h-6 text-primary" /> */}
              <h3 className="text-xl font-bold text-light-bg">Lanka Services</h3>
            </div>
            <p className="text-light-bg/70">
              Votre garage de confiance à Paris pour Peugeot, Renault et Citroën.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-light-bg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-light-bg/70 hover:text-primary transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-light-bg/70 hover:text-primary transition-colors">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-light-bg/70 hover:text-primary transition-colors">
                  Avis
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light-bg/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-light-bg mb-4">Contact</h4>
            <ul className="space-y-2 text-light-bg/70">
              <li>Paris, France</li>
              <li>
                <a href="tel:0753242899" className="hover:text-primary transition-colors">
                  07 53 24 28 99
                </a>
              </li>
              <li>Lun - Ven: 09:00 - 17:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-secondary pt-8 text-center">
          <p className="text-light-bg/60">
            © {new Date().getFullYear()} Lanka Services. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
