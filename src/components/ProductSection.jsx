import { FiArrowRight } from "react-icons/fi";

const products = [
  {
    id: 1,
    category: "EQUIPMENT",
    title: "Solar-Powered Water Pump",
    description:
      "Affordable, portable solar pump for irrigation—ideal for small farms with limited electricity access.",
    image: "https://icdn.tradew.com/file/202103/1574799/jpg/7793239.jpg?x-oss-process=image/quality,Q_90",
    badge: "INNOVATION 2025",
  },
  {
    id: 2,
    category: "EQUIPMENT",
    title: "Mini Seed Drill",
    description:
      "Compact seed drill designed for precise planting and reduced seed wastage, increasing yield efficiency.",
    image: "https://lirp.cdn-website.com/2adce84d/dms3rep/multi/opt/Front%2Bdisc%2B16-2-640w.jpg",
    badge: "FARM READY",
  },
  {
    id: 3,
    category: "EQUIPMENT",
    title: "Handheld Power Weeder",
    description:
      "Lightweight, fuel-efficient power weeder that reduces labor and time spent on weed management.",
    image: "https://s.alicdn.com/@sc04/kf/Hbc407e6b7b78479b89922b486a87effet.jpg",
  },
  {
    id: 4,
    category: "EQUIPMENT",
    title: "Low-Cost Drip Irrigation Kit",
    description:
      "DIY drip irrigation kit for water-efficient farming, designed to save up to 60% water usage.",
    image: "https://sc04.alicdn.com/kf/H8247eaa12a2f4004bb2328aecff712d8s.jpg",
  }
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