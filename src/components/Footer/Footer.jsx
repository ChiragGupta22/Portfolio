const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white px-6 md:px-20 py-10 mt-20">
      {/* Top Section */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Chirag.dev
          </h2>
          <p className="mt-3 text-gray-400">
            MERN Stack Developer building fast, modern and responsive web
            applications.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold mb-2">Quick Links</h3>

          <a href="#home" className="text-gray-400 hover:text-white transition">
            Home
          </a>
          <a
            href="#about"
            className="text-gray-400 hover:text-white transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-400 hover:text-white transition"
          >
            Projects
          </a>
          <a
            href="#contactus"
            className="text-gray-400 hover:text-white transition"
          >
            Contact
          </a>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-gray-400">📧 chiragguptaworks@gmail.com</p>

          <div className="flex gap-4 mt-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/chirag-gupta-1b8050329/"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 px-3 py-2 rounded-full hover:bg-purple-500 transition"
            >
              🔗 LinkedIn
            </a>

            {/* Mail */}
            <a
              href="mailto:chiragguptaworks@gmail.com"
              className="bg-gray-800 px-3 py-2 rounded-full hover:bg-purple-500 transition"
            >
              ✉️ Email
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} Chirag Gupta. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
