import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Restez Informé
          </h2>
          <p className="text-muted-foreground mb-8">
            Inscrivez-vous pour recevoir nos offres spéciales, promotions et
            événements.
          </p>

          {/* -------------- NETLIFY FORM -------------- */}
          <form
            name="subscribe"
            method="POST"
            action="/"
            data-netlify="true"
            className="flex gap-4 max-w-md mx-auto"
          >
            {/* Required hidden input for Netlify */}
            <input type="hidden" name="form-name" value="subscribe" />

            <Input
              type="email"
              name="email"               // IMPORTANT FOR NETLIFY
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              className="flex-1"
              required
            />

            <Button type="submit">S'inscrire</Button>
          </form>
          {/* ------------------------------------------- */}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
