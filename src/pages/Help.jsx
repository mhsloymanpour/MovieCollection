import React, { useState } from "react";
import {
  FaPaperPlane,
  FaPhone,
  FaEnvelope,
  FaHome,
  FaQuestionCircle,
  FaUser,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"; // Import the Header component

const Help = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Help request submitted:", { name, message });
    setIsSubmitted(true);
    setName("");
    setMessage("");
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Add Header component */}
      <Header />

      {/* Page content with adjusted top padding */}
      <div className="max-w-4xl mx-auto px-4 py-8 pt-24">
        {" "}
        {/* Added pt-24 to account for header */}
        <div className="flex items-center mb-6">
          <FaQuestionCircle className="text-3xl text-amber-500 mr-3" />
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
            Help Center
          </h1>
        </div>
        <p className="text-gray-400 mb-8">
          Having trouble? Contact our support team or browse our resources
          below.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-amber-500">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-500" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Describe your issue or question..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-medium transition-colors"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </button>

              {isSubmitted && (
                <p className="mt-3 text-green-400 text-sm">
                  Thank you, {name}! Your message has been sent successfully.
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-amber-500">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-gray-700 p-3 rounded-full mr-4">
                    <FaPhone className="text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone Support</h3>
                    <p className="text-gray-400">+98 (992)- 313-7379</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Available 8AM - 8PM EST, 7 days a week
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gray-700 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email Support</h3>
                    <p className="text-gray-400">Mamadpkfr@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Average response time: 2 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gray-700 p-3 rounded-full mr-4">
                    <FaHome className="text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Corporate Office</h3>
                    <p className="text-gray-400">123 Cinema Boulevard</p>
                    <p className="text-gray-400">Hollywood, CA 90210</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-amber-500">
                Quick Links
              </h2>
              <div className="space-y-3">
                <button
                  onClick={() => navigate("/faq")}
                  className="block w-full text-left px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
                >
                  Frequently Asked Questions
                </button>
                <button
                  onClick={() => navigate("/troubleshooting")}
                  className="block w-full text-left px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
                >
                  Troubleshooting Guide
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="block w-full text-left px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
                >
                  Additional Contact Options
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
