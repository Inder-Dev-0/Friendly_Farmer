import { FiCheckCircle } from "react-icons/fi";

const challenges = [
  "Opaque supply chains dominated by middlemen who exploit farmers with low prices",
  "Lack of real-time price discovery and market transparency for farmers",
  "Smallholder farmers stuck in cycles of debt and limited bargaining power",
  "Fragmented digital platforms with limited reach and siloed solutions",
  "Low trust in centralized platforms due to lack of verifiable traceability",
  "High dependence on intermediaries for logistics, warehousing, and credit",
  "Regulatory restrictions from APMC mandis and compliance burdens (FSSAI, GST)",
  "Limited farmer-friendly tech interfaces (language, literacy, accessibility)",
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
        <a href="/crops" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition">
          Shop Best Sellers
        </a>
      </div>
    </section>
  );
}