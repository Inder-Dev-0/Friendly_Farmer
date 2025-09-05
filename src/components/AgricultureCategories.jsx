import { FaTools, FaSeedling, FaCogs } from "react-icons/fa";

const categories = [
  {
    title: "Tools for Agriculture",
    description:
      "Durable, farmer-tested tools to make planting, harvesting, and daily tasks easier.",
    icon: <FaTools className="text-3xl text-green-600" />,
    link: "/tools",
    bg: "bg-green-50",
  },
  {
    title: "Supplies for Agriculture",
    description:
      "Essential farming supplies to support your crops, soil, and irrigation systems.",
    icon: <FaSeedling className="text-3xl text-orange-500" />,
    link: "/supplies",
    bg: "bg-orange-50",
  },
  {
    title: "Parts for Agriculture",
    description:
      "High-quality replacement parts to keep your equipment running without downtime.",
    icon: <FaCogs className="text-3xl text-blue-600" />,
    link: "/parts",
    bg: "bg-blue-50",
  },
];

export default function AgricultureCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Explore Our Agriculture Essentials
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`${cat.bg} rounded-2xl p-8 shadow hover:shadow-lg transition flex flex-col`}
            >
              <div className="flex justify-center mb-4">{cat.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{cat.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{cat.description}</p>

              {/* Button always aligned at bottom */}
              <div className="mt-auto">
                <a
                  href={cat.link}
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md font-medium transition"
                >
                  Shop Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}