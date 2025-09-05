import { useState } from "react";

export default function SalesSection({ sales, setSales }) {
    const [newSale, setNewSale] = useState({ item: "", buyer: "", amount: "" });

    const handleAddSale = (e) => {
        e.preventDefault();
        if (!newSale.item || !newSale.buyer || !newSale.amount) return;
        setSales([...sales, { id: sales.length + 1, ...newSale }]);
        setNewSale({ item: "", buyer: "", amount: "" });
    };

    return (
        <div className="mt-6 space-y-6">
            <div className="mt-6 space-y-6">
                {/* Add Sale Form */}
                <form
                    onSubmit={handleAddSale}
                    className="bg-white shadow p-4 flex flex-col md:flex-row gap-4 items-center"
                >
                    <input
                        type="text"
                        placeholder="Item"
                        value={newSale.item}
                        onChange={(e) => setNewSale({ ...newSale, item: e.target.value })}
                        className="border p-2 rounded-md flex-grow"
                    />
                    <input
                        type="text"
                        placeholder="Buyer"
                        value={newSale.buyer}
                        onChange={(e) => setNewSale({ ...newSale, buyer: e.target.value })}
                        className="border p-2 rounded-md flex-grow"
                    />
                    <input
                        type="text"
                        placeholder="Amount (₹)"
                        value={newSale.amount}
                        onChange={(e) => setNewSale({ ...newSale, amount: e.target.value })}
                        className="border p-2 rounded-md flex-grow"
                    />
                    <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md">
                        Add Sale
                    </button>
                </form>

                {/* Sales List */}
                <div className="overflow-x-auto">
                    <table className="w-full bg-white shadow rounded-lg">
                        <thead className="bg-green-100">
                            <tr>
                                <th className="p-3 text-left">Item</th>
                                <th className="p-3 text-left">Buyer</th>
                                <th className="p-3 text-left">Amount</th>
                                <th className="p-3 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sales.map((sale) => (
                                <tr key={sale.id} className="border-t">
                                    <td className="p-3">{sale.item}</td>
                                    <td className="p-3">{sale.buyer}</td>
                                    <td className="p-3 font-semibold">₹{sale.amount}</td>
                                    <td className="p-3">
                                        <button
                                            onClick={() => handleRemoveSale(sale.id)}
                                            className="text-red-500 hover:underline"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}