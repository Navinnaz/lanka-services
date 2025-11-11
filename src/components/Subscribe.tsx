import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Subscribe = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inscription réussie!",
      description: "Vous recevrez nos offres spéciales et actualités.",
    });
    setEmail("");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Restez Informé
          </h2>
          <p className="text-muted-foreground mb-8">
            Inscrivez-vous pour recevoir nos offres spéciales, promotions et événements.
          </p>
          
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              className="flex-1"
              required
            />
            <Button type="submit">
              S'inscrire
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
