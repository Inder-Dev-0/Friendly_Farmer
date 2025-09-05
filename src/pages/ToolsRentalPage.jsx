import { useState } from "react";

const rentalTools = [
  {
    id: 1,
    name: "Tractor Plough",
    pricePerDay: 1200,
    img: "https://i1.sndcdn.com/artworks-BgbRy8XGLwyVtTyl-sLqIUA-t500x500.png",
  },
  {
    id: 2,
    name: "Hand Hoe",
    pricePerDay: 50,
    img: "https://shop.agrotis.in/wp-content/uploads/2021/08/ilm3.jpg",
  },
  {
    id: 3,
    name: "Sprayer Machine",
    pricePerDay: 200,
    img: "https://agriwow.com/wp-content/uploads/2024/09/1.jpg",
  },
  {
    id: 4,
    name: "Seed Drill",
    pricePerDay: 800,
    img: "https://5.imimg.com/data5/SELLER/Default/2022/12/WI/HO/QO/98465654/mild-steel-seed-drill.jpeg",
  },
];

export default function ToolsRentalPage() {
  const [duration, setDuration] = useState("day");
  const [sortBy, setSortBy] = useState("default");

  const calculatePrice = (tool) => {
    if (duration === "day") return tool.pricePerDay;
    if (duration === "week") return tool.pricePerDay * 6; // discount
    if (duration === "month") return tool.pricePerDay * 20; // discount
    return tool.pricePerDay;
  };

  const sortedTools = [...rentalTools].sort((a, b) => {
    if (sortBy === "low-high") return calculatePrice(a) - calculatePrice(b);
    if (sortBy === "high-low") return calculatePrice(b) - calculatePrice(a);
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-600 text-white py-10 text-center">
        <h1 className="text-3xl font-bold">Agricultural Tools on Rent</h1>
        <p className="mt-2 text-lg">Affordable rentals for farmers & businesses</p>
      </header>

      {/* Filters */}
      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Duration Selector */}
        <div className="flex items-center gap-3">
          <label className="font-medium">Rental Duration:</label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="border p-2 rounded-md"
          >
            <option value="day">Per Day</option>
            <option value="week">Per Week</option>
            <option value="month">Per Month</option>
          </select>
        </div>

        {/* Sorting */}
        <div>
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
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sortedTools.map((tool) => (
          <div
            key={tool.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col"
          >
            <img
              src={tool.img}
              alt={tool.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold text-lg mb-2">{tool.name}</h3>
              <p className="text-green-600 font-bold mb-4">
                ₹{calculatePrice(tool)} <span className="text-sm text-gray-500">/{duration}</span>
              </p>
              <button className="mt-auto bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}