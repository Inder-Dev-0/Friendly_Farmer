import { useState } from "react";

export default function CropsSection({ crops, setCrops }) {
  const [newCrop, setNewCrop] = useState({ name: "", price: "", qty: "" });

  const handleAddCrop = (e) => {
    e.preventDefault();
    if (!newCrop.name || !newCrop.price || !newCrop.qty) return;
    setCrops([...crops, { id: crops.length + 1, ...newCrop }]);
    setNewCrop({ name: "", price: "", qty: "" });
  };

  const handleRemoveCrop = (id) => {
    setCrops(crops.filter((crop) => crop.id !== id));
  };

  return (
    <div className="mt-6 space-y-6">
      {/* Add Crop Form */}
      <form
        onSubmit={handleAddCrop}
        className="bg-white shadow p-4 flex flex-col md:flex-row gap-4 items-center"
      >
        <input
          type="text"
          placeholder="Crop Name"
          value={newCrop.name}
          onChange={(e) => setNewCrop({ ...newCrop, name: e.target.value })}
          className="border p-2 rounded-md flex-grow"
        />
        <input
          type="text"
          placeholder="Price (₹)"
          value={newCrop.price}
          onChange={(e) => setNewCrop({ ...newCrop, price: e.target.value })}
          className="border p-2 rounded-md flex-grow"
        />
        <input
          type="text"
          placeholder="Quantity"
          value={newCrop.qty}
          onChange={(e) => setNewCrop({ ...newCrop, qty: e.target.value })}
          className="border p-2 rounded-md flex-grow"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md">
          Add Crop
        </button>
      </form>

      {/* Crop List */}
      <div className="grid md:grid-cols-2 gap-6">
        {crops.map((crop) => (
          <div
            key={crop.id}
            className="bg-white shadow rounded-lg p-4 flex justify-between"
          >
            <div>
              <h3 className="font-semibold">{crop.name}</h3>
              <p className="text-green-600">₹{crop.price}/kg</p>
              <p className="text-gray-500">Qty: {crop.qty}</p>
            </div>
            <button
              onClick={() => handleRemoveCrop(crop.id)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
