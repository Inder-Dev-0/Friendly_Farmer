import { useState } from "react";
import FarmerInfo from "../components/FarmerInfo";
import FarmerTabs from "../components/FarmerTabs";
import CropsSection from "../components/CropsSection";
import SalesSection from "../components/SalesSection";
import RentalsSection from "../components/RentalsSection";
import RentMarketSection from "../components/RentMarketSection";

export default function FarmerProfile() {
  const [activeTab, setActiveTab] = useState("crops");

  const [farmer] = useState({
    name: "Ramesh Kumar",
    location: "Lucknow, Uttar Pradesh",
    contact: "+91 9876543210",
    img: "https://img.freepik.com/premium-vector/indian-farmer-holding-green-crops_1308360-47.jpg",
  });

  const [crops, setCrops] = useState([]);
  const [sales, setSales] = useState([]);
  const [rentals, setRentals] = useState([]);
  const [marketRentals, setMarketRentals] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white py-10 text-center">
        <h1 className="text-3xl font-bold">Farmer Profile</h1>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <FarmerInfo farmer={farmer} />
        <FarmerTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "crops" && <CropsSection crops={crops} setCrops={setCrops} />}
        {activeTab === "sales" && <SalesSection sales={sales} setSales={setSales} />}
        {activeTab === "rentals" && <RentalsSection rentals={rentals} setRentals={setRentals} />}
        {activeTab === "rent-market" && (
          <RentMarketSection marketRentals={marketRentals} setMarketRentals={setMarketRentals} />
        )}
      </div>
    </div>
  );
}
