import { Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé!",
      description: "Nous vous répondrons bientôt avec un devis.",
    });
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-light-bg text-center mb-4">
            Contactez-Nous
          </h2>
          <p className="text-xl text-light-bg/90 text-center mb-12">
            Mieux encore, venez nous voir en personne!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-dark-secondary p-6 rounded-lg border border-primary/20">
                <h3 className="text-2xl font-bold text-light-bg mb-6">Lanka Services</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-light-bg/70 text-sm">Téléphone</p>
                      <a href="tel:0753242899" className="text-light-bg text-lg hover:text-primary transition-colors">
                        07 53 24 28 99
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-light-bg/70 text-sm">Adresse</p>
                      <p className="text-light-bg">Paris, France</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-light-bg/70 text-sm">Horaires</p>
                      <p className="text-light-bg">Ouvert aujourd'hui</p>
                      <p className="text-primary font-semibold">09:00 – 17:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-dark-secondary p-6 rounded-lg border border-primary/20">
                <p className="text-light-bg mb-4">
                  Envoyez-nous un message nous informant de ce qui se passe avec votre véhicule, 
                  et nous vous répondrons bientôt avec un devis.
                </p>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Décrivez le problème de votre véhicule..."
                  className="mb-4 min-h-[150px] bg-dark-bg text-light-bg"
                  required
                />
                <Button type="submit" className="w-full">
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
