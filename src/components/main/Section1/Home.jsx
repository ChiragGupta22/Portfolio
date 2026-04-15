import { ArrowDownToLine, ArrowRight } from "lucide-react";
import About from "../Section2/About";
import Project from "../Section3/Project";
import Contact from "../Section4/Contactus";

export default function Home() {
  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-between px-5 md:px-20 mt-10 md:mt-20 min-h-[78vh] gap-10"
        id="home"
      >
        {/* LEFT */}
        <div className="max-w-lg">
          {/* Status */}
          <div className="flex items-center gap-2 bg-red-500/20 border border-red-400 rounded-full px-3 py-1 w-fit mt-3">
            <h1 className="text-sm md:text-base">
              Available for opportunities
            </h1>
          </div>

          {/* Heading */}
          <div className="mt-4">
            <h3 className="text-3xl md:text-6xl">
              Hi, I'm{" "}
              <span className="font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Chirag
              </span>
            </h3>

            <h3 className="text-3xl md:text-6xl flex items-center gap-2">
              <span className="font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Gupta
              </span>
              👋
            </h3>
          </div>

          {/* Description */}
          <h5 className="mt-5 text-lg md:text-2xl text-gray-600">
            I build fast, responsive & user-friendly web applications using the
            MERN stack.
          </h5>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-purple-500 to-indigo-500 px-5 py-3 rounded-full text-white flex items-center justify-center gap-2">
              <ArrowRight size={18} />
              View My Work
            </button>

            <button className="px-5 py-3 flex items-center justify-center gap-2 border rounded-full bg-[#EEEEF6]">
              <ArrowDownToLine size={18} />
              Download Resume
            </button>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap mt-8 gap-3">
            {["React", "Node.js", "MongoDB", "Tailwind"].map((skill, i) => (
              <span
                key={i}
                className="bg-[#EEEEF6] text-sm px-4 py-1 rounded-xl"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-2 md:p-4 rounded-3xl">
            <img
              src="/ChiragGupta.jpeg"
              className="w-60 sm:w-72 md:w-96 rounded-2xl shadow-lg object-cover"
              alt="profile"
            />
          </div>
        </div>
      </div>

      {/* Sections */}
      <About />
      <Project />
      <Contact />
    </>
  );
}
