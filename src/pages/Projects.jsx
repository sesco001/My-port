import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Boosting Panel",
      desc: "A professional social media management and automation panel where clients focus on content while we handle engagement, boosting, and growth analytics.",
      stack: "Node.js, Express, TailwindCSS, MongoDB",
      demo: "https://makamescodigitalsolutions.com",
      github: "https://github.com/sesco001", // Add GitHub repo link here
      image: "/Boost.jpg", // Example placeholder in /public
    },
    {
      title: "Makamesco MD (WhatsApp Bot Multidevice)",
      desc: "An advanced WhatsApp bot system with antidelete, auto-typing, song download, and group automation features. Designed for reliability and custom workflows.",
      stack: "Node.js, Baileys, MongoDB",
      demo: "#", // Add your deployment/demo link
      github: "https://github.com/sesco001", // Add GitHub repo link here
      image: "/Bot.jpg",
    },
    {
      title: "Learn and Earn Hub",
      desc: "A digital workspace for students and comrades to earn by completing assigned academic or creative tasks. Includes referral earnings (under development).",
      stack: "React, Vite, Node.js",
      demo: "https://react-dun-six-42.vercel.app/",
      github: "https://github.com/sesco001",
      image: "/le.jpg",
    },
    {
      title: "Kamusi / Dictionary",
      desc: "An English–Swahili dictionary that provides translations, definitions, and pronunciation using text-to-speech. Built for students and language learners.",
      stack: "React, Express, RapidAPI, TTS API",
      demo: "https://makamesco-kamusi-sandy.vercel.app/search.html?",
      github: "https://github.com/sesco001",
      image: "/Kamusi.jpg",
    },
    {
      title: "Music Downloader",
      desc: "A fast MP3 downloader that allows users to search, stream, and download music — includes a one-click share feature.",
      stack: "React, Node.js, REST APIs",
      demo: "https://maka-music-downloader.onrender.com/",
      github: "https://github.com/sesco001",
      image: "/Player.jpg",
    },
    {
      title: "X Video Downloader",
      desc: "A privacy-focused video downloader that allows users to fetch, preview, and save adult videos securely with clean interface and optimized speed.",
      stack: "Node.js, Puppeteer, React",
      demo: "https://xvideo-downloader.onrender.com/",
      github: "https://github.com/sesco001",
      image: "/Xv.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-10">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-green-400 mb-6">
        My Projects 🚀
      </h1>
      <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
        These are some of the key innovations developed under <strong>Makamesco Tech</strong> — each crafted to simplify digital life, enhance productivity, and inspire developers across Africa.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-gray-800 bg-opacity-60 rounded-2xl shadow-lg hover:shadow-green-500/20 transition transform hover:scale-105 overflow-hidden"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-green-400 mb-2">
                {proj.title}
              </h2>
              <p className="text-gray-300 mb-3">{proj.desc}</p>
              <p className="text-sm text-gray-400 mb-4">
                <strong>Tech Stack:</strong> {proj.stack}
              </p>

              <div className="flex justify-between items-center">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition"
                >
                  <FaGithub className="mr-2" /> Source Code
                </a>
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-400 hover:text-green-300 transition"
                >
                  View Demo <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-20 text-center text-gray-500 italic">
        “Building digital solutions that empower communities.” – Makamesco Tech 🌍
      </footer>
    </div>
  );
}
