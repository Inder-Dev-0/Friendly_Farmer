import { FiCheckCircle } from "react-icons/fi";

const challenges = [
  "Endless weeds",
  "Complicated and intimidating irrigation systems",
  "Lack of affordable greenhouse space",
  "Long hours harvesting salad greens",
  "Cumbersome trellising systems",
  "Labor intensive microgreens harvesting",
  "Greenhouse getting too hot in the summer",
  "Losing plants to surprise early frosts",
];

export default function ChallengesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Do you face these challenges on your farm?
        </h2>

        {/* Grid Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10">
          {challenges.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <FiCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
              <p className="text-gray-800 text-base leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition">
          Shop Best Sellers
        </button>
      </div>
    </section>
  );
}