import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`sticky -top-1 bg-gradient-to-r from-[#0e0f0f] via-[#0a1731] to-[#220e0d] text-gray-400 text-sm md:text-base ${
        isOpen ? "h-full" : "h-15"
      } p-3 z-20`}
      id="portfolio"
    >
      <div className="flex justify-between items-center">
        <div
          className={`flex-col md:flex-row md:flex-wrap gap-3 md:flex ${
            isOpen ? "flex" : "hidden"
          } md:items-center`}
        >
          {[
            "All",
            "Website",
            "Application",
            "Development",
            "Social",
            "Branding",
            "Dashboard",
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="block md:inline hover:text-blue-500 transition p-2"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-2">
          <select className="border border-blue-300 rounded w-28 px-2 py-2 text-sm bg-transparent text-white hover:cursor-pointer">
            <option value="automotive">Automotive 2+</option>
          </select>
          <select className="border border-gray-300 rounded px-2 py-2 text-sm bg-transparent text-white hover:cursor-pointer">
            <option value="Sort By">Sort By</option>
          </select>
        </div>

        <button
          onClick={toggleMenu}
          className="absolute right-4 md:hidden text-white top-5 cursor-pointer"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col space-y-2 mt-3 md:hidden">
          <select className="border border-blue-300 rounded w-34 px-2 py-2 text-sm bg-transparent text-white hover:cursor-pointer">
            <option value="automotive">Automotive 2+</option>
          </select>
          <select className="border border-gray-300 rounded w-34 px-2 py-2 text-sm bg-transparent text-white hover:cursor-pointer">
            <option value="Sort By">Sort By</option>
          </select>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
