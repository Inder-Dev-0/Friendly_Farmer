import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const initialCart = [
  {
    id: 1,
    name: "Hybrid Seeds Pack",
    price: 1200,
    img: "https://greenparadiselive.com/cdn/shop/files/capsicumseeds_1_1200x1200.png?v=1714736617",
    quantity: 2,
  },
  {
    id: 2,
    name: "Tractor Plough (Rental / Day)",
    price: 1200,
    img: "https://i1.sndcdn.com/artworks-BgbRy8XGLwyVtTyl-sLqIUA-t500x500.png",
    quantity: 1,
  },
];

export default function CartPage() {
  const [cart, setCart] = useState(initialCart);

  const handleQuantityChange = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-600 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Your Cart</h1>
      </header>

      {/* Cart Content */}
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-24 h-20 object-cover rounded"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-green-600 font-bold">₹{item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <label className="text-sm">Qty:</label>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      className="w-16 border rounded-md p-1 text-center"
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                    />
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FaTrash />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Summary */}
        <div className="bg-white p-6 rounded-lg shadow h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <p className="flex justify-between mb-2">
            <span>Total Items:</span> <span>{cart.length}</span>
          </p>
          <p className="flex justify-between font-semibold text-lg border-t pt-2">
            <span>Subtotal:</span> <span>₹{subtotal}</span>
          </p>
          <button
            disabled={cart.length === 0}
            className={`w-full mt-6 py-3 rounded-md font-medium transition ${
              cart.length === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}