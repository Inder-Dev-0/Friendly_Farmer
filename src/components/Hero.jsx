import { useState, useEffect } from "react";

export default function Hero() {
  const slides = [
    {
      id: 1,
      image: "https://about.oceanstatejoblot.com/wp-content/uploads/2024/02/SF_HowDoGreenhousesWork_Hero.webp",
      title: "Less weeding... More growing!",
      subtitle:
        "Innovative weed-free growing with multiple pre-burned patterns in a variety of sizes.",
      button: "Shop Quick-Plant Fabric",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/uploads/1411901100260f56b39b9/ab70b250?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "The Haven High Tunnel",
      subtitle: "Tunnel growing—reimagined. Roll-up sides, storm damage warranty, all materials, and free delivery.",
      button: "Haven High Tunnel",
    },
    {
      id: 3,
      image: "https://hartley-botanic.co.uk//wp-content/uploads/2019/12/HartleyBotanic-Malvern2018-Highgrow-3155.jpg",
      title: "The Guardian High Tunnel",
      subtitle: "Ultimate plant protection with room to grow! 6.5-ft side walls for full and easy access.",
      button: "Guardian High Tunnel",
    },
    {
      id: 4,
      image: "https://www.alitex.co.uk/wp-content/uploads/2024/09/Clivede-greenhouse-4-828x570.jpg",
      title: "Level Up your Tunnel Growing!",
      subtitle: "Introducing Caterpillar Tunnel Max with 50% more growing space, increased side wall height, and stronger metal.",
      button: "Order Caterpillar Tunnel Max",
    },
    {
      id: 5,
      image: "https://www.agrivi.com/wp-content/uploads/2021/05/Greenhouse-Farming-Exceeds-Weather-Limitations-1200x565.jpg",
      title: "New, Durable & Simple End Wall",
      subtitle: "Increase the lifespan and strength of your end wall & tunnel!",
      button: "Shop Framed Double Zipper End Wall",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1623136299195-570a06bdae6b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JlZW5ob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Innovative tools and supplies for small farms.",
      subtitle: "Equipping, edu­cating, and inspiring grow­ers worldwide.",
      button: "Shop Best Sellers",
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
