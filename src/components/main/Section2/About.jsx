import { User, Code2, Briefcase } from "lucide-react";

export default function About() {
  return (
    <div className="px-6 md:px-20 py-20 bg-[#F9F9FF] " id="about">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12">
        About <span className="text-purple-500">Me</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side (Image) */}
        <div className="flex justify-center">
          <div className="relative group">
            {/* Glow Background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>

            {/* Image */}
            <img
              src="/ChiragGupta.jpeg"
              alt="Chirag Gupta"
              className="relative w-72 h-80 object-cover rounded-2xl shadow-xl border-4 border-white transform group-hover:scale-105 transition duration-300"
            />

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center py-2 rounded-b-2xl opacity-0 group-hover:opacity-100 transition duration-300">
              MERN Developer 🚀
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">I'm Chirag Gupta </h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            I am a passionate MERN Stack Developer focused on building fast,
            responsive, and user-friendly web applications. I love solving
            real-world problems using modern technologies.
          </p>

          {/* Info Cards */}
          <div className="grid gap-4">
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
              <User className="text-purple-500" />
              <span>Frontend & Backend Developer</span>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
              <Code2 className="text-purple-500" />
              <span>Tech Stack: React, Node.js, MongoDB</span>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
              <Briefcase className="text-purple-500" />
              <span>Looking for Internship / Job Opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
