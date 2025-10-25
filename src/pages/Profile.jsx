import React from "react";
import { FaLaptopCode, FaUniversity, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8 flex flex-col items-center">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mb-12">
        <img
          src="/Me.jpg"
          alt="Meshack Matheka"
          className="w-30 h-30 md:w-56 md:h-56 rounded-full border-4 border-green-500 shadow-[0_0_25px_#22c55e] object-cover mb-6 animate-spin-slow"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Meshack Matheka</h1>
        <p className="text-green-400 text-lg mb-4 font-medium">Full Stack Developer | Educator | Tech Innovator</p>
        <p className="max-w-2xl text-gray-300 leading-relaxed">
          I'm an <strong>Education Arts student at Garissa University</strong>, but my journey into technology started right after completing high school in <strong>2022</strong>.  
          What began as curiosity has grown into a deep passion for <strong>web development, automation, and innovation</strong>.  
          Through God’s grace, dedication, and long nights of learning, I’ve built projects that reflect both creativity and purpose.
        </p>
      </section>

      {/* About Section */}
      <section className="bg-gray-800 bg-opacity-60 p-8 rounded-2xl shadow-xl w-full md:w-4/5 mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-center text-green-400">About My Journey</h2>
        <p className="text-gray-300 leading-relaxed">
          After finishing Form Four, I began teaching myself programming using free online tutorials.  
          It wasn’t easy — many tutorials were long and sometimes boring 😅 — but I stayed focused,  
          believing that consistency would pay off. I experimented, built small tools, and slowly  
          mastered languages and frameworks. What kept me going was a strong belief that the future  
          belongs to those who build it — and for future developers, <strong>the future is luminous</strong>. 🌟  
        </p>

        <p className="mt-4 text-gray-300 leading-relaxed">
          Today, I’m proud to have created and contributed to projects that simplify learning,  
          improve accessibility, and promote creativity. My goal is to make technology relatable  
          and impactful — turning <strong>ideas into reality</strong> through <strong>Makamesco Tech</strong>.  
        </p>
      </section>

      {/* Personal Info */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-4/5">
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-green-400">Personal Information</h3>
          <ul className="space-y-3 text-gray-300">
            <li><FaEnvelope className="inline mr-3 text-green-400" /> <strong>Email:</strong> makamescodigitalsolutions@gmail.com</li>
            <li><FaPhone className="inline mr-3 text-green-400" /> <strong>Phone:</strong> +254 769995625</li>
            <li><FaMapMarkerAlt className="inline mr-3 text-green-400" /> <strong>Location:</strong> Garissa, Kenya</li>
            <li><FaUniversity className="inline mr-3 text-green-400" /> <strong>Institution:</strong> Garissa University</li>
            <li><FaLaptopCode className="inline mr-3 text-green-400" /> <strong>Languages:</strong> English, Swahili</li>
          </ul>
        </div>

        {/* Contact & Links */}
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-green-400">Let’s Connect</h3>
          <p className="text-gray-300 mb-4">
            I’m always open to collaborations, freelance work, and automation projects.  
            Feel free to reach out and let’s build something impactful together 🚀.
          </p>

          <div className="flex space-x-6 mt-4 justify-center md:justify-start">
            <a href="https://github.com/sesco001" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 text-2xl transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 text-2xl transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <footer className="mt-16 text-center text-gray-400 italic">
        “The code may compile or crash — but what matters is that we never stop building.” 💻
      </footer>
    </div>
  );
}
