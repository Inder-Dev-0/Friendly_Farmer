import { useState } from "react";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("Raj");
  const [inputName, setInputName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      setUsername(inputName); // Save registered name
      setIsOpen(false); // Close modal
      setIsRegister(false); // Reset back to login mode
    } else {
      // Fake login
      setIsOpen(false);
    }
  };

  return <>
    <nav className="w-full bg-white shadow-sm">
      <div className="flex items-center justify-between px-9 py-6">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="https://static.vecteezy.com/system/resources/previews/043/902/107/non_2x/farmer-logo-illustration-flat-2d-style-vector.jpg" // replace with your logo path
            alt="Farmers Friend"
            className="h-8 w-auto"
          />
          <span className="text-xl font-semibold">FRIENDLY_FARMER</span>
        </a>

        {/* Search Bar */}
        <div className="flex items-center w-1/2 relative">
          <FiSearch className="absolute left-3 text-green-600 h-5 w-5" />
          <input
            type="text"
            placeholder="Search products"
            className="w-full border border-green-500 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <a href="/customer-support" className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-md">
            Customer Support
          </a>
          {username ? <a href="/profile" className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-md">
            {username}
          </a> : <FiUser onClick={() => setIsOpen(true)} className="h-6 w-6 text-gray-700 cursor-pointer" />}
          <a href="/cart"><FiShoppingCart className="h-6 w-6 text-gray-700 cursor-pointer" /></a>
        </div>
      </div>
    </nav>
    {/* Auth Modal */}
    {isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50">
        <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg relative">
          <h2 className="text-xl font-bold mb-4 text-center">
            {isRegister ? "Register" : "Login"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isRegister && (
              <input
                type="text"
                placeholder="Full Name"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                className="w-full p-3 border rounded-md"
                required
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-md"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-md"
              required
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md font-medium hover:bg-green-700 transition"
            >
              {isRegister ? "Register" : "Login"}
            </button>
          </form>

          {/* Switch Login/Register */}
          <p className="text-center text-sm text-gray-600 mt-4">
            {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsRegister(!isRegister)}
              className="text-green-600 font-medium hover:underline"
            >
              {isRegister ? "Login" : "Register"}
            </button>
          </p>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
      </div>
    )}
  </>
}
