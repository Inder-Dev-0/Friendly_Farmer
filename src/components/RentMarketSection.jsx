export default function RentMarketSection({ marketRentals, setMarketRentals }) {
  return (
    <div className="mt-6 grid md:grid-cols-2 gap-6">
      {marketRentals.map((item) => (
        <div key={item.id} className="bg-white shadow rounded-lg p-4 flex justify-between">
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-gray-500">Owner: {item.owner}</p>
            <p className="text-green-600">₹ {item.price}/day</p>
            <p className="text-gray-500">Available: {item.durationValue} {item.durationUnit}</p>
          </div>
          <button
            onClick={() => setMarketRentals(marketRentals.filter((m) => m.id !== item.id))}
            className="text-red-500 hover:underline"
          >
            Cancel
          </button>
        </div>
      ))}
    </div>
  );
}