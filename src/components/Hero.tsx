import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mechanic.jpg";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import AppointmentForm from "./AppointmentForm";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mécanicien réparant une voiture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-bg/70" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-light-bg mb-6 leading-tight">
          Services de Réparation Auto Expert à Paris
        </h2>
        <p className="text-xl md:text-2xl text-light-bg/90 mb-8 max-w-3xl mx-auto">
          Réparations Peugeot, Renault et Citroën de confiance avec transparence
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Prendre un rendez-vous</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Réserver un Rendez-vous</DialogTitle>
            </DialogHeader>
              <AppointmentForm />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Hero;
