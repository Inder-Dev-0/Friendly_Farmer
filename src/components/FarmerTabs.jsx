export default function FarmerTabs({ activeTab, setActiveTab }) {
  const tabs = ["crops", "sales", "rentals", "rent-market"];
  return (
    <div className="flex gap-4 mt-8 border-b flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-2 px-4 capitalize ${
            activeTab === tab
              ? "border-b-2 border-green-600 text-green-600 font-semibold"
              : "text-gray-600"
          }`}
        >
          {tab === "rent-market" ? "Rent Equipment" : tab}
        </button>
      ))}
    </div>
  );
}