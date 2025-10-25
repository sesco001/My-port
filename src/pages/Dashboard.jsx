import React, { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaPython,
  FaNodeJs,
  FaWhatsapp, // ✅ add this import
} from "react-icons/fa";

export default function Dashboard() {
  const [ip, setIp] = useState("Fetching...");
  const [battery, setBattery] = useState("Checking...");
  const featuresRef = useRef(null);

  // ✅ Fetch IP
  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIp(data.ip))
      .catch(() => setIp("Unavailable"));
  }, []);

  // ✅ Fetch Battery Info
  useEffect(() => {
    if (navigator.getBattery) {
      navigator.getBattery().then((batteryInfo) => {
        const updateBattery = () => setBattery(`${Math.round(batteryInfo.level * 100)}%`);
        updateBattery();
        batteryInfo.addEventListener("levelchange", updateBattery);
      });
    } else {
      setBattery("Not Supported");
    }
  }, []);

  // ✅ Typing Animation
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: [
        "Welcome to Makamesco Home 🌍",
        "Where We Change Ideas into Reality 💡",
        "Let's Build. Let's Grow. Let's Create. 🚀",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  // ✅ Scroll to Features
  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="p-8 text-gray-100 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold mb-4 text-green-400 animate-fadeIn">
          Makamesco Dashboard
        </h1>
        <span className="typing text-2xl font-semibold text-gray-300"></span>

        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-6 text-gray-400">
          <p>
            🌐 IP Address: <span className="text-green-400 font-semibold">{ip}</span>
          </p>
          <p>
            🔋 Battery: <span className="text-green-400 font-semibold">{battery}</span>
          </p>
        </div>
      </div>

      {/* Tech Icons Section */}
      <div className="relative flex justify-center mb-16">
        <div className="flex space-x-10">
          <FaHtml5 className="text-5xl text-orange-500" />
          <FaCss3Alt className="text-5xl text-blue-500" />
          <FaJsSquare className="text-5xl text-yellow-400" />
          <FaReact className="text-5xl text-cyan-400" />
          <FaNodeJs className="text-5xl text-green-500" />
          <FaPython className="text-5xl text-blue-400" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="text-center mb-16">
        <button
          onClick={() => (window.location.href = "/projects")}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold mx-3 shadow-md hover:shadow-green-600/50 transition transform hover:scale-105"
        >
          Explore Our Services
        </button>
        <button
          onClick={() => (window.location.href = "/profile")}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold mx-3 shadow-md hover:shadow-green-600/50 transition transform hover:scale-105"
        >
          Know more about us
        </button>
      </div>

      {/* Features Section */}
      <section ref={featuresRef} className="mt-16">
        <h3 className="text-4xl font-bold mb-8 text-center text-green-400 animate-fadeIn">
          Our Features
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🤖",
              title: "Unlimited Access",
              desc: "Here is where you will always find my projects all in one place.",
            },
            {
              icon: "📝",
              title: "Kamusi",
              desc: "Search English words, check pronunciation, and improve your language skills.",
            },
            {
              icon: "📄",
              title: "Assignment Submission",
              desc: "Submit tasks on Learn and Earn and get them done by professionals.",
            },
            {
              icon: "💻",
              title: "Services",
              desc: "We offer WhatsApp bots, web design, and development services to help you grow.",
            },
            {
              icon: "💰",
              title: "Earn Daily",
              desc: "Complete tasks posted by our partners on the Earn page and get rewarded.",
            },
            {
              icon: (
                <a
                  href="https://whatsapp.com/channel/0029Vb5wVbsEQIanKXKYrq1c"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-green-500 text-5xl hover:scale-110 transition-transform inline" />
                </a>
              ),
              title: "Makamesco Network",
              desc: "Join a growing tech community that supports creativity, innovation, and collaboration.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-70 p-6 rounded-xl text-center hover:bg-green-700 transition transform hover:scale-105 shadow-lg"
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
