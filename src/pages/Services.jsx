import React, { useState } from "react";
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaPaperPlane } from "react-icons/fa";

export default function Services() {
  const [serviceType, setServiceType] = useState("Web Development");
  const [details, setDetails] = useState("");

  const handleOrder = (e) => {
    e.preventDefault();
    const subject = `Service Order: ${serviceType}`;
    const body = `Hello Makamesco CEO,\n\nI would like to order the following service:\nService: ${serviceType}\n\nDetails:\n${details}\n\nPlease contact me back.`;
    window.location.href = `mailto:marcasmatheka@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const services = [
    {
      icon: <FaCode className="text-4xl text-blue-400" />,
      title: "Software Development",
      desc: "Custom websites, web applications, and enterprise software solutions tailored to your needs.",
    },
    {
      icon: <FaServer className="text-4xl text-green-400" />,
      title: "Hosting Services",
      desc: "Reliable and fast web hosting via Digitexwebhosting.com and Makamesco Host.",
    },
    {
      icon: <FaMobileAlt className="text-4xl text-yellow-400" />,
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile applications for Android and iOS.",
    },
    {
      icon: <FaDatabase className="text-4xl text-purple-400" />,
      title: "Backend Services",
      desc: "Robust API development, database management, and cloud infrastructure.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8 md:p-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-green-400 mb-12 animate-fadeIn">
        Our Premium Services 🚀
      </h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-800 bg-opacity-60 p-6 rounded-xl hover:bg-gray-700 transition transform hover:scale-105 shadow-lg border-t-4 border-green-500">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Order Form Section */}
      <div className="max-w-2xl mx-auto bg-gray-800 bg-opacity-80 p-8 rounded-2xl shadow-2xl border border-gray-700">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-400">Order a Service</h2>
        <form onSubmit={handleOrder} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2 font-semibold">Select Service</label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full p-3 rounded bg-gray-900 border border-gray-600 focus:border-green-500 outline-none text-white"
            >
              <option>Web Development</option>
              <option>Hosting Services</option>
              <option>Mobile App Development</option>
              <option>Backend Engineering</option>
              <option>Followers Boosting</option>
              <option>Other</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2 font-semibold">Project Details</label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              rows="4"
              placeholder="Describe what you need..."
              className="w-full p-3 rounded bg-gray-900 border border-gray-600 focus:border-green-500 outline-none text-white"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
          >
            <FaPaperPlane /> Send Order to CEO
          </button>
        </form>
      </div>
    </div>
  );
}
