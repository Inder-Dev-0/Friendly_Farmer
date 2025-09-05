import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function AuthNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [inputName, setInputName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      setUsername(inputName); // Save name
      setIsLoggedIn(true); // Mark user as logged in
      setIsOpen(false);
      setIsRegister(false);
    } else {
      // Fake login
      setIsLoggedIn(true);
      setIsOpen(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-green-600 text-white">
        <h1 className="text-lg font-bold">Farmers Friend</h1>

        {/* If logged in show Profile + Logout */}
        {isLoggedIn ? (
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white text-green-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition">
              <FaUserCircle className="text-xl" />
              {username || "Profile"}
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-white text-green-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition"
          >
            Login
          </button>
        )}
      </nav>

      {/* Auth Modal */}
      {isOpen && !isLoggedIn && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
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
  );
}