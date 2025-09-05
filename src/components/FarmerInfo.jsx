export default function FarmerInfo({ farmer }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row items-center gap-6">
      <img src={farmer.img} alt={farmer.name} className="w-32 h-32 rounded-full" />
      <div>
        <h2 className="text-2xl font-bold">{farmer.name}</h2>
        <p className="text-gray-600">{farmer.location}</p>
        <p className="text-gray-800 mt-2">Contact: {farmer.contact}</p>
      </div>
    </div>
  );
}