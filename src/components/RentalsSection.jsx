import { useState } from "react";

export default function RentalsSection({ rentals, setRentals }) {
    const [newEquipment, setNewEquipment] = useState({ equipment: "", price: "", durationValue: "", durationUnit: "" });

    const handleAddRental = (e) => {
        e.preventDefault();
        if (!newEquipment.equipment || !newEquipment.price || !newEquipment.durationUnit || !newEquipment.durationValue) return;
        setRentals([
            ...rentals,
            { id: rentals.length + 1, rentedTo: "Available", ...newEquipment },
        ]);
        setNewEquipment({ equipment: "", price: "", durationUnit: "", durationValue: "" });
    };

    return (
        <div className="mt-6 space-y-6">
            <div className="mt-6 space-y-6">
                {/* Add Rental Form */}
                <form
                    onSubmit={handleAddRental}
                    className="bg-white shadow p-4 flex flex-col md:flex-row gap-4 items-center"
                >
                    <input
                        type="text"
                        placeholder="Equipment Name"
                        value={newEquipment.equipment}
                        onChange={(e) =>
                            setNewEquipment({ ...newEquipment, equipment: e.target.value })
                        }
                        className="border p-2 rounded-md flex-grow"
                    />
                    <input
                        type="text"
                        placeholder="Price (₹/day)"
                        value={newEquipment.price}
                        onChange={(e) => setNewEquipment({ ...newEquipment, price: e.target.value })}
                        className="border p-2 rounded-md flex-grow"
                    />
                    <div className="flex gap-2 flex-grow">
                        <input
                            type="number"
                            placeholder="Duration"
                            value={newEquipment.durationValue || ""}
                            onChange={(e) => setNewEquipment({ ...newEquipment, durationValue: e.target.value })}
                            className="border p-2 rounded-md w-1/2"
                        />
                        <select
                            value={newEquipment.durationUnit || ""}
                            onChange={(e) => setNewEquipment({ ...newEquipment, durationUnit: e.target.value })}
                            className="border p-2 rounded-md w-1/2"
                        >
                            <option value="">Select</option>
                            <option value="Day">Day</option>
                            <option value="Week">Week</option>
                            <option value="Month">Month</option>
                            <option value="Year">Year</option>
                        </select>
                    </div>

                    <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md">
                        Add Equipment
                    </button>
                </form>

                {/* Rental List */}
                <div className="grid md:grid-cols-2 gap-6">
                    {rentals.map((rent) => (
                        <div key={rent.id} className="bg-white shadow rounded-lg p-4 flex justify-between">
                            <div>
                                <h3 className="font-semibold">{rent.equipment}</h3>
                                <p className="text-green-600">₹{rent.price}/day</p>
                                <p className="text-gray-500">{rent.durationValue}{rent.durationUnit}</p>
                            </div>
                            <button
                                onClick={() => handleRemoveRental(rent.id)}
                                className="text-red-500 hover:underline"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}