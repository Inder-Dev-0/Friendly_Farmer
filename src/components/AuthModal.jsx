import { useState } from "react";

export default function AuthModal({ isOpen, setIsOpen, setUsername }) {
  const [isRegister, setIsRegister] = useState(false);

  const [inputName, setInputName] = useState("");
  const [inputState, setInputState] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [inputContact, setInputContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      setUsername(inputName); // Pass back to Navbar

      // Reset form
      setInputName("");
      setInputState("");
      setInputCity("");
      setInputContact("");
      setEmail("");
      setPassword("");

      setIsOpen(false);
      setIsRegister(false);
    } else {
      // Fake login
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg relative">
        <h2 className="text-xl font-bold mb-4 text-center">
          {isRegister ? "Register" : "Login"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                className="w-full p-3 border rounded-md"
                required
              />
              <input
                type="text"
                placeholder="State"
                value={inputState}
                onChange={(e) => setInputState(e.target.value)}
                className="w-full p-3 border rounded-md"
                required
              />
              <input
                type="text"
                placeholder="City"
                value={inputCity}
                onChange={(e) => setInputCity(e.target.value)}
                className="w-full p-3 border rounded-md"
                required
              />
              <input
                type="number"
                placeholder="Contact No."
                value={inputContact}
                onChange={(e) => setInputContact(e.target.value)}
                className="w-full p-3 border rounded-md"
                required
              />
            </>
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
  );
}