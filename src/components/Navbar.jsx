import { useState } from "react";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <>
      <nav className="w-full bg-white shadow-sm">
        <div className="flex items-center justify-between px-9 py-6">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img
              src="https://static.vecteezy.com/system/resources/previews/043/902/107/non_2x/farmer-logo-illustration-flat-2d-style-vector.jpg"
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
            <a
              href="/customer-support"
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-md"
            >
              Customer Support
            </a>
            {username ? (
              <a
                href="/profile"
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-md"
              >
                {username}
              </a>
            ) : (
              <FiUser
                onClick={() => setIsOpen(true)}
                className="h-6 w-6 text-gray-700 cursor-pointer"
              />
            )}
            <a href="/cart">
              <FiShoppingCart className="h-6 w-6 text-gray-700 cursor-pointer" />
            </a>
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setUsername={setUsername}
      />
    </>
  );
}
