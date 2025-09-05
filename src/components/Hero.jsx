import { useState, useEffect } from "react";

export default function Hero() {
  const slides = [
  {
    id: 1,
    image: "https://media.licdn.com/dms/image/v2/C5112AQETMaqennf4Ng/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1559983513205?e=2147483647&v=beta&t=zFMxnZayu_YWk5vaYwLCb-84Daweu2Te4wNjiQ0RNf0",
    title: "Blockchain Ledger",
    subtitle: "Transparent, tamper-proof agri-supply chain records with trust and traceability.",
    button: "Learn More",
  },
  {
    id: 2,
    image: "https://www.agrifabrix.in/static/media/TraceFabriX.0cf13ed7665fe771890f.jpg",
    title: "Digital Quality Certificates",
    subtitle: "Moisture %, grading, FSSAI standards – verified and stored on-chain.",
    button: "See How It Works",
  },
  {
    id: 3,
    image: "https://www.statcan.gc.ca/o1/sites/default/files/2023-07/Farm_Direct_Sales_Article1366x768.jpg",
    title: "Direct Farmer-to-Buyer Sales",
    subtitle: "Empowering B2B & B2C with fair pricing, eliminating middlemen exploitation.",
    button: "Explore Marketplace",
  },
  {
    id: 4,
    image: "https://www.affordableschools.net/wp-content/uploads/2020/04/Specialties-in-Agriculture-Science-scaled-e1586282107962.jpg",
    title: "Regional Specialization",
    subtitle: "Onions from Nashik, Wheat from Punjab, Rice from UP – identity preserved.",
    button: "View Regions",
  },
  {
    id: 5,
    image: "https://agrichain.com/wp-content/uploads/2025/03/03-2025-The-Future-of-AgTech.png",
    title: "Solving Supply Chain Challenges",
    subtitle: "No more middlemen, opacity, or distressed pricing – farmers get their fair share.",
    button: "Understand the Problem",
  },
  {
    id: 6,
    image: "https://www.euractiv.com/wp-content/uploads/sites/2/2024/12/GettyImages-1318237749.jpg",
    title: "Future of AgriTech",
    subtitle: "AI bargaining, QR-traceability, farmer credit scoring, and multilingual apps.",
    button: "Discover Innovations",
  },
];


  const [current, setCurrent] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[75vh] overflow-hidden">
      {/* Slides wrapper */}
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full flex-shrink-0 relative bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 bg-opacity-40"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition">
                {slide.button}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-6 flex space-x-3 justify-center w-full z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-8 rounded-full transition ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
