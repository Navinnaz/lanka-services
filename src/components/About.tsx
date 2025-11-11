import { CheckCircle2 } from "lucide-react";

const About = () => {
  const services = [
    "Réparations mécaniques expertes",
    "Entretien et maintenance",
    "Préparation Contrôle Technique",
    "Spécialistes Peugeot, Renault, Citroën",
    "Tarification transparente",
    "Service de qualité garantie",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            À Propos de Lanka Services
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Garage automobile de confiance à Paris, France, spécialisé dans les marques Peugeot, 
            Renault et Citroën. Nous fournissons des réparations mécaniques expertes, de l'entretien 
            et la préparation au Contrôle Technique avec une transparence totale et des prix clairs. 
            Notre engagement est de vous remettre sur la route en toute sécurité et fiabilité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors"
            >
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <span className="text-card-foreground font-medium">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
