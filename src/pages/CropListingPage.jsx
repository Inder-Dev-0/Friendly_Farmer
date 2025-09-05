import { useState } from "react";

const cropsData = [
  {
    id: 1,
    name: "Wheat",
    price: "₹2,200 / Quintal",
    img: "https://m.media-amazon.com/images/I/71xuH19n5YL._UF1000,1000_QL80_.jpg",
    category: "Grains",
  },
  {
    id: 2,
    name: "Rice",
    price: "₹3,000 / Quintal",
    img: "https://c.ndtvimg.com/2023-08/brlp7gk_uncooked-rice-or-rice-grains_625x300_18_August_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738",
    category: "Grains",
  },
  {
    id: 3,
    name: "Maize",
    price: "₹1,800 / Quintal",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/8/334836385/UJ/RM/IO/23524314/yellow-corn-maize.jpg",
    category: "Grains",
  },
  {
    id: 4,
    name: "Barley",
    price: "₹2,000 / Quintal",
    img: "https://naturallyella.com/wp-content/uploads/2016/12/barley-2.jpg",
    category: "Grains",
  },
  {
    id: 5,
    name: "Tomatoes",
    price: "₹40 / Kg",
    img: "https://www.richardjacksonsgarden.co.uk/wp-content/uploads/2021/04/AdobeStock_554658202_1200px.jpg",
    category: "Vegetables",
  },
  {
    id: 6,
    name: "Potatoes",
    price: "₹25 / Kg",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2vfYS9PH0lRtitUeE-Onr1KZbogBmX7_tog&s",
    category: "Vegetables",
  },
  {
    id: 7,
    name: "Onions",
    price: "₹30 / Kg",
    img: "https://arunachalobserver.org/wp-content/uploads/2024/12/full-frame-shot-of-onions-in-market-stall-562386223-59b97e59845b340010f8d76e.jpg",
    category: "Vegetables",
  },
  {
    id: 8,
    name: "Cauliflower",
    price: "₹35 / Kg",
    img: "https://thriftylesley.com/wp-content/uploads/2013/09/cauliflower.jpg",
    category: "Vegetables",
  },
  {
    id: 9,
    name: "Spinach",
    price: "₹20 / Bunch",
    img: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/05/spinach-1296x728-header.jpg?w=1155&h=1528",
    category: "Vegetables",
  },
  {
    id: 10,
    name: "Mangoes",
    price: "₹70 / Kg",
    img: "https://www.mangopoint.in/wp-content/uploads/2022/03/6-large.jpg",
    category: "Fruits",
  },
  {
    id: 11,
    name: "Bananas",
    price: "₹40 / Dozen",
    img: "https://hips.hearstapps.com/hmg-prod/images/ripe-yellow-bananas-at-the-shopping-market-fruits-royalty-free-image-1712833209.jpg",
    category: "Fruits",
  },
  {
    id: 12,
    name: "Apples",
    price: "₹120 / Kg",
    img: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/Do_Apples_Affect_Diabetes_and_Blood_Sugar_Levels-732x549-thumbnail-1-732x549.jpg",
    category: "Fruits",
  },
  {
    id: 13,
    name: "Oranges",
    price: "₹80 / Kg",
    img: "https://www.health.com/thmb/vyI49td0j52IBWf_vHVE_DGVZcU=/3950x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Stocksy_txp5e95690asrw300_Medium_934585-e870449543284eed8aa4be52fc09a4ed.jpg",
    category: "Fruits",
  },
  {
    id: 14,
    name: "Grapes",
    price: "₹90 / Kg",
    img: "https://rukminim2.flixcart.com/image/704/844/kvcpn680/plant-sapling/h/c/r/no-perennial-yes-grape-green-1-miraclegarden-original-imag89tv5zexzmpw.jpeg?q=90&crop=false",
    category: "Fruits",
  },
  {
    id: 15,
    name: "Pulses (Arhar/Toor Dal)",
    price: "₹5,500 / Quintal",
    img: "https://ritikart.com/cdn/shop/products/arhar-dal-premium_786f4e3c-0943-473e-8688-becab2b496a2_500x.jpg?v=1600676180",
    category: "Pulses",
  },
  {
    id: 16,
    name: "Pulses (Moong Dal)",
    price: "₹6,000 / Quintal",
    img: "https://vibrantliving.in/cdn/shop/files/MoongDalSplitSkinless.jpg?v=1731059585&width=2048",
    category: "Pulses",
  },
  {
    id: 17,
    name: "Pulses (Chana Dal)",
    price: "₹4,800 / Quintal",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkY6mnwJIP9PLO4aBjXQdcKudUkPov4pmL0g&s",
    category: "Pulses",
  },
  {
    id: 18,
    name: "Soybeans",
    price: "₹3,500 / Quintal",
    img: "https://gonefarmers.com/cdn/shop/products/image_38a270c5-4d4b-4b34-960c-8f8e23cca776_2048x.heic?v=1658505369",
    category: "Pulses",
  },
  {
    id: 19,
    name: "Sugarcane",
    price: "₹340 / Quintal",
    img: "https://images.squarespace-cdn.com/content/v1/53ffc0fbe4b0e9e8825f8b00/1624337170981-FP5EI0NVZLGQHUQ0S6OO/shutterstock_390975046.jpg",
    category: "Cash Crops",
  },
  {
    id: 20,
    name: "Cotton",
    price: "₹6,500 / Quintal",
    img: "https://cdn.britannica.com/72/270772-050-9B03FF80/Cotton-plants-in-a-field.jpg",
    category: "Cash Crops",
  },
];

export default function CropListingPage() {
  const [sortBy, setSortBy] = useState("default");
  const [filter, setFilter] = useState("All");

  const filteredCrops = cropsData.filter(
    (crop) => filter === "All" || crop.category === filter
  );

  const sortedCrops = [...filteredCrops].sort((a, b) => {
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
        <h1 className="text-3xl font-bold">Available Crops</h1>
        <p className="mt-2 text-lg">Fresh crops directly from farmers</p>
      </header>

      {/* Filters */}
      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <label className="font-medium">Filter by Category:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border p-2 rounded-md"
          >
            <option value="All">All</option>
            <option value="Grains">Grains</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits">Fruits</option>
          </select>
        </div>
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

      {/* Crop Grid */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sortedCrops.map((crop) => (
          <div
            key={crop.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col"
          >
            <img
              src={crop.img}
              alt={crop.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold text-lg mb-2">{crop.name}</h3>
              <p className="text-green-600 font-bold mb-4">{crop.price}</p>
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
