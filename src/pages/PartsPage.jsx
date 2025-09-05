import { useState } from "react";

const partsData = [
  {
    id: 1,
    name: "Tractor Engine Filter",
    price: "₹2,500",
    img: "https://m.media-amazon.com/images/I/81phDeFgkVL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 2,
    name: "Plough Blade",
    price: "₹1,200",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/9/348123248/TY/RL/FZ/127621971/fbmmbp-36-4-mounted-mould-board-plough.jpg",
  },
  {
    id: 3,
    name: "Water Pump Motor",
    price: "₹7,800",
    img: "https://m.media-amazon.com/images/I/71oBd-FfDnL.jpg",
  },
  {
    id: 4,
    name: "Irrigation Pipe Connector",
    price: "₹350",
    img: "https://image.made-in-china.com/2f0j00mcIplkinCUuH/Drip-Irrigation-Pipe-Connector-Universal-Adapter-Pipe-Fittings-PP-Connector-Compression-Fitting.webp",
  },
];

export default function PartsPage() {
  const [sortBy, setSortBy] = useState("default");

  const sortedParts = [...partsData].sort((a, b) => {
    const priceA = parseInt(a.price.replace(/\D/g, ""));
    const priceB = parseInt(b.price.replace(/\D/g, ""));
    if (sortBy === "low-high") return priceA - priceB;
    if (sortBy === "high-low") return priceB - priceA;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-600 text-white py-10 text-center">
        <h1 className="text-3xl font-bold">Parts for Agriculture</h1>
        <p className="mt-2 text-lg">Spare parts and accessories for modern farming</p>
      </header>

      {/* Filter & Sort */}
      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-700 font-medium">{sortedParts.length} parts available</p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="default">Sort by: Default</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sortedParts.map((part) => (
          <div
            key={part.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col"
          >
            <img
              src={part.img}
              alt={part.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold text-lg mb-2">{part.name}</h3>
              <p className="text-green-600 font-bold mb-4">{part.price}</p>
              <button className="mt-auto bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}