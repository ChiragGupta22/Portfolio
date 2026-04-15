import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "MERN Todo App",
    desc: "A full-stack todo application with authentication and CRUD operations.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    live: "https://todofrontend-pi-five.vercel.app/",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
  },
  {
    title: "Currency Converter",
    desc: "A responsive app to convert currencies in real-time using API integration.",
    tech: ["React", "HTML", "CSS", "API"],
    live: "https://currencyconvertor01.vercel.app/",
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5",
  },
  {
    title: "Admin Dashboard UI",
    desc: "A clean and responsive dashboard UI built using HTML and CSS with modern layout design.",
    tech: ["HTML", "CSS"],
    live: "https://lustrous-dango-5b3792.netlify.app/",
    image:
      "https://images.unsplash.com/photo-1526656001029-20a71b17f7ba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
export default function Projects() {
  return (
    <div
      className="px-6 md:px-20 py-20 bg-[#F9F9FF] min-h-screen"
      id="projects"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-purple-500">Projects</span>
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              <p className="text-gray-600 text-sm mb-4">{project.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Live Button Only */}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-xl hover:opacity-90 transition"
              >
                <ExternalLink size={18} />
                View Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
