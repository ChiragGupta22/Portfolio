import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="px-6 md:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Chirag.dev
        </h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#home" className="hover:text-purple-500">
            Home
          </a>
          <a href="#about" className="hover:text-purple-500">
            About
          </a>
          <a href="#projects" className="hover:text-purple-500">
            Projects
          </a>
          <a href="#contactus" className="hover:text-purple-500">
            Contact
          </a>
        </div>
        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">
          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
