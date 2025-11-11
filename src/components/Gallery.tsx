const Gallery = () => {
  // Placeholder images - in production, these would be actual garage photos
  const images = [
    { id: 1, alt: "Atelier de réparation" },
    { id: 2, alt: "Diagnostic automobile" },
    { id: 3, alt: "Entretien véhicule" },
    { id: 4, alt: "Réparation moteur" },
    { id: 5, alt: "Contrôle technique" },
    { id: 6, alt: "Service client" },
  ];

  return (
    <section id="gallery" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-light-bg text-center mb-4">
          Explorez notre parcours de réparation auto en images
        </h2>
        <p className="text-light-bg/80 text-center mb-12 max-w-2xl mx-auto">
          Découvrez notre atelier professionnel et notre équipe d'experts au travail
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image) => (
            <div
              key={image.id}
              className="aspect-video bg-dark-secondary rounded-lg overflow-hidden border border-primary/20 hover:border-primary transition-all hover:scale-105"
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-light-bg/60 text-sm">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
