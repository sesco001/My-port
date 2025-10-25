import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Makamesco Host',
      desc: 'A free bot-hosting platform that supports GitHub repo and ZIP uploads with instant deployment.',
      stack: 'Node.js, Express, Tailwind, MongoDB',
    },
    {
      title: 'FezChat',
      desc: 'A Django-based full-stack chat app with OTP phone number login, secure backend, and modern UI.',
      stack: 'Django, React, Twilio API',
    },
    {
      title: 'GoodnessTech Music Downloader',
      desc: 'An online MP3 player and downloader with advanced search and modern design.',
      stack: 'React, Node, REST APIs',
    },
  ];

  return (
    <div className="p-8 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <p className="text-gray-600 mb-8">
        These are some of the key projects developed under <strong>Makamesco Tech</strong> — showcasing innovation, scalability, and impact.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-2">{proj.title}</h2>
            <p className="text-gray-600 mb-3">{proj.desc}</p>
            <p className="text-sm text-gray-500">
              <strong>Tech Stack:</strong> {proj.stack}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
