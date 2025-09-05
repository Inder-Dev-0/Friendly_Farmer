import { FiArrowRight } from "react-icons/fi";

const products = [
  {
    id: 1,
    category: "TUNNELS",
    title: "Gothic Caterpillar Tunnel",
    description:
      "Easy-to-assemble and affordable year-round protection for your veggies, flowers, fruit, or animals!",
    image: "https://cdn.sanity.io/images/0yukpfvl/production/18eee89feac93812ed30040f7f672ebbb0141435-3024x3932.jpg",
    badge: "2025 REFRESH",
  },
  {
    id: 2,
    category: "TUNNELS",
    title: "The Haven High Tunnel",
    description:
      "Unparalleled protection for your plants. Peace of mind for you. Plus roll up sides!",
    image: "https://cdn.shopify.com/s/files/1/1338/7937/files/CaterpillarTunnel_480x480.jpg?v=1706217797",
    badge: "2025 REFRESH",
  },
  {
    id: 3,
    category: "COVERINGS",
    title: "Quick Plant Fabric",
    description:
      "Revolutionary weed-free growing with pre-burned patterns in UV stabilized landscape fabric that will last for years!",
    image: "https://cdn.shopify.com/s/files/1/0750/6737/products/LandscapeFabricwithHoles-7copy.jpg?v=1710877628",
  },
  {
    id: 4,
    category: "TUNNELS",
    title: "Guardian High Tunnel",
    description:
      "The ultimate protector for your plants! 21-ft wide plus 6.5-ft roll-up sides for efficient use of every square inch!",
    image: "https://fullbloomgreenhouse.com/wp-content/uploads/2023/11/greenhouse-guardian-inside.jpg",
  },
];

export default function ProductSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Innovative Small Farm Equipment
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition hover:scale-105"
            >
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>

              {/* Text Content */}
              <div className="absolute top-0 left-0 p-5 z-20 text-white">
                <p className="uppercase text-xs font-semibold tracking-wider">
                  {item.category}
                </p>
                <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                <p className="text-sm mt-2">{item.description}</p>
              </div>

              {/* Badge */}
              {item.badge && (
                <span className="absolute bottom-16 left-4 z-20 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded">
                  {item.badge}
                </span>
              )}

              {/* Arrow Button */}
              <button className="absolute bottom-4 right-4 z-20 bg-white text-gray-900 p-2 rounded-full shadow hover:bg-gray-100 transition">
                <FiArrowRight size={20} />
              </button>

              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[350px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}