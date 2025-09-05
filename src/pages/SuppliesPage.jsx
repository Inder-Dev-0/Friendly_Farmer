import { useState } from "react";

const suppliesData = [
  {
    id: 1,
    name: "Hybrid Seeds Pack",
    price: "₹1,200",
    img: "https://greenparadiselive.com/cdn/shop/files/capsicumseeds_1_1200x1200.png?v=1714736617",
  },
  {
    id: 2,
    name: "Organic Fertilizer (10kg)",
    price: "₹850",
    img: "https://i0.wp.com/www.bigtoolbox.com/wp-content/uploads/2022/05/BTB-Blog-Organic.jpg",
  },
  {
    id: 3,
    name: "Pesticide Bottle (1L)",
    price: "₹600",
    img: "https://2.wlimg.com/product_images/bc-full/2024/2/5708189/tower-shape-hdpe-pesticide-bottle-1707908131-7293668.jpeg",
  },
  {
    id: 4,
    name: "Drip Irrigation Kit",
    price: "₹4,500",
    img: "https://growhoss.com/cdn/shop/products/Irrigation-8Mil-Kit_460x@2x.jpg?v=1691782933",
  },
];

export default function SuppliesPage() {
  const [sortBy, setSortBy] = useState("default");

  const sortedSupplies = [...suppliesData].sort((a, b) => {
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
        <h1 className="text-3xl font-bold">Supplies for Agriculture</h1>
        <p className="mt-2 text-lg">Affordable and high-quality farming supplies</p>
      </header>

      {/* Filter & Sort */}
      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-700 font-medium">{sortedSupplies.length} products available</p>
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
        {sortedSupplies.map((supply) => (
          <div
            key={supply.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col"
          >
            <img
              src={supply.img}
              alt={supply.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold text-lg mb-2">{supply.name}</h3>
              <p className="text-green-600 font-bold mb-4">{supply.price}</p>
              <button className="mt-auto bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}