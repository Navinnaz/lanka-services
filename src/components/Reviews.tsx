import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Marie Dubois",
      rating: 5,
      comment: "Service excellent! Mon Peugeot 308 fonctionne comme neuve. Équipe professionnelle et prix honnêtes.",
    },
    {
      id: 2,
      name: "Pierre Martin",
      rating: 5,
      comment: "Très satisfait de la réparation de ma Renault Clio. Diagnostic précis et travail rapide. Je recommande vivement!",
    },
    {
      id: 3,
      name: "Sophie Laurent",
      rating: 5,
      comment: "Meilleur garage à Paris! Ils ont préparé ma Citroën C3 pour le contrôle technique. Service impeccable.",
    },
    {
      id: 4,
      name: "Jean Rousseau",
      rating: 5,
      comment: "Transparence totale sur les prix et le travail effectué. Mon Peugeot 208 roule parfaitement maintenant.",
    },
    {
      id: 5,
      name: "Claire Petit",
      rating: 5,
      comment: "Équipe très professionnelle et accueillante. Ils ont résolu mon problème de moteur rapidement. Merci!",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-foreground text-center mb-12">
          Ce Que Disent Nos Clients
        </h2>

        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/2">
                <Card className="border-border bg-card h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-card-foreground mb-4 italic">"{review.comment}"</p>
                    <p className="text-muted-foreground font-semibold">— {review.name}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
