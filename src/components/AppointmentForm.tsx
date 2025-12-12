import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const AppointmentForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Frontend only - just show success message
    toast({
      title: "Rendez-vous demandé!",
      description: "Nous vous contacterons bientôt pour confirmer votre rendez-vous.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      vehicle: "",
      message: "",
    });
  };

  return (
    <form
        name="appointment"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="space-y-4"
      >
        {/* Hidden fields for Netlify */}
        <input type="hidden" name="form-name" value="appointment" />
        <p className="hidden">
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>

        <div>
          <Label htmlFor="name">Nom complet</Label>
          <Input id="name" name="name" required />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>

        <div>
          <Label htmlFor="phone">Téléphone</Label>
          <Input id="phone" name="phone" type="tel" required />
        </div>

        <div>
          <Label htmlFor="vehicle">Véhicule (Marque & Modèle)</Label>
          <Input id="vehicle" name="vehicle" placeholder="ex: Peugeot 308" required />
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Décrivez le problème de votre véhicule..."
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Envoyer la demande
        </Button>
      </form>
  );
};

export default AppointmentForm;
