import { FaEnvelope, FaPhoneAlt, FaComments } from "react-icons/fa";

export default function CustomerSupport() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-600 text-white py-10 text-center">
        <h1 className="text-3xl font-bold">Customer Support</h1>
        <p className="mt-2 text-lg">We’re here to help you with anything you need</p>
      </header>

      <main className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-12">
        {/* Contact Options */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
              <FaEnvelope className="text-green-600 text-2xl" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">support@farmersfriend.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
              <FaPhoneAlt className="text-green-600 text-2xl" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
              <FaComments className="text-green-600 text-2xl" />
              <div>
                <h3 className="font-medium">Live Chat</h3>
                <p className="text-gray-600">Available 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Form */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
          <form className="bg-white p-6 rounded-lg shadow space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-md"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-md"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded-md h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md font-medium hover:bg-green-700 transition"
            >
              Submit
            </button>
          </form>
        </section>
      </main>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-white p-4 rounded-lg shadow">
            <summary className="cursor-pointer font-medium">How can I track my order?</summary>
            <p className="mt-2 text-gray-600">
              You can track your order in the "My Orders" section under your profile.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow">
            <summary className="cursor-pointer font-medium">What is your return policy?</summary>
            <p className="mt-2 text-gray-600">
              We accept returns within 7 days of delivery. Items must be unused and in original packaging.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow">
            <summary className="cursor-pointer font-medium">Do you provide customer support in Hindi?</summary>
            <p className="mt-2 text-gray-600">
              Yes, our support team is available in English and Hindi.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}