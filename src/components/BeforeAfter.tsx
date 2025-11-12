import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const repairs = [
  {
    before: "/images/before-after-1.jpg",
    after: "/images/before-after-2.jpg",
    alt: "Réparation carrosserie et peinture",
  },
  {
    before: "/images/before-after-3.jpg",
    after: "/images/before-after-4.jpg",
    alt: "Réparation aile avant et peinture",
  },
];

export default function BeforeAfter() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Avant / Après Réparations
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {repairs.map((repair, index) => (
            <div key={index} className="shadow-lg rounded-lg overflow-hidden">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src={repair.before}
                    alt={`Avant - ${repair.alt}`}
                    width={600}
                    height={400}
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src={repair.after}
                    alt={`Après - ${repair.alt}`}
                    width={600}
                    height={400}
                  />
                }
              />
              <p className="text-center mt-3 font-medium">{repair.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
