import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaCcVisa, FaCcDiscover, FaCcMastercard, FaCcAmex, FaCcPaypal, FaApplePay } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us */}
        <div>
          <h3 className="font-bold mb-4">ABOUT US</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Our Mission</a></li>
            <li><a href="#" className="hover:text-white">Our History</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Trial Farmers</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="font-bold mb-4">CUSTOMER SUPPORT</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Satisfaction Guarantee</a></li>
            <li><a href="#" className="hover:text-white">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-white">Mobile Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold mb-4">FRIENDLY_FARMER NEWSLETTER</h3>
          <p className="text-sm mb-4">
            Join our occasional newsletter for product launches, growing tips, and announcements:
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Subscribe to Our Newsletter"
              className="w-full px-4 py-3 rounded-l-md bg-gray-800 text-gray-200 focus:outline-none"
            />
            <button className="bg-green-600 hover:bg-green-700 px-4 py-3 rounded-r-md text-white">
              →
            </button>
          </div>
          <div className="flex space-x-4 mt-6 text-gray-400">
            <a href="#" className="hover:text-white"><FaFacebookF size={22} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={22} /></a>
            <a href="#" className="hover:text-white"><FaYoutube size={22} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">© 2025 Farmers Friend.</p>
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          <FaCcVisa size={36} />
          <FaCcDiscover size={36} />
          <FaCcMastercard size={36} />
          <FaCcAmex size={36} />
          <FaApplePay size={36} />
          <FaCcPaypal size={36} />
        </div>
      </div>
    </footer>
  );
}