import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Placeholder images - in production, these would be actual garage photos
const videos = [
  { id: 1, src: "/videos/lankaservices-vid1.mp4", alt: "" },
  { id: 2, src: "/videos/lankaservices-vid7.mp4", alt: "" },
  { id: 3, src: "/videos/lankaservices-vid2.mp4", alt: "" },
  { id: 4, src: "/videos/lankaservices-vid3.mp4", alt: "" },
  { id: 5, src: "/videos/lankaservices-vid4.mp4", alt: "" },
  { id: 6, src: "/videos/lankaservices-vid5.mp4", alt: "" },
  { id: 7, src: "/videos/lankaservices-vid6.mp4", alt: "" },
  { id: 8, src: "/videos/lankaservices-vid8.mp4", alt: "" },
  { id: 9, src: "/videos/lankaservices-vid9.mp4", alt: "" },
  { id: 10, src: "/videos/lankaservices-vid10.mp4", alt: "" },
  { id: 11, src: "/videos/lankaservices-vid11.mp4", alt: "" },
];

  const Gallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="gallery" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-light-bg text-center mb-4">
          Nos vidéos de réparation automobile
        </h2>
        <p className="text-light-bg/80 text-center mb-12 max-w-2xl mx-auto">
          Regardez nos mécaniciens experts à l'œuvre — des réparations réelles dans notre atelier.
        </p>

        {/* ✅ Mobile Carousel */}
        <div className="relative md:hidden" ref={emblaRef}>
          <div className="flex">
            {videos.map((video) => (
              <div
                key={video.id}
                className="flex-[0_0_100%] px-4 box-border flex-shrink-0"
              >
                <div className="bg-dark-secondary rounded-lg overflow-hidden border border-primary/20">
                  <video
                    src={video.src}
                    className="w-full h-full object-cover aspect-[9/16]"
                    controls
                    preload="metadata"
                  />
                  <p className="text-center text-light-bg/60 mt-2 text-sm">{video.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Left button */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary/20 hover:bg-primary/40 p-2 rounded-full text-light-bg transition"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right button */}
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary/20 hover:bg-primary/40 p-2 rounded-full text-light-bg transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>


        {/* ✅ Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              className="aspect-[9/16] bg-dark-secondary rounded-lg overflow-hidden border border-primary/20 hover:border-primary transition-all hover:scale-105"
            >
              <video
                src={video.src}
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              />
              <p className="text-center text-light-bg/60 mt-2 text-sm">{video.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;