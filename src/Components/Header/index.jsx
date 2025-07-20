import { AlignLeft, X } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["home", "info", "projects", "skills", "contact"];

  return (
    <header id="home" className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#440241]/80 shadow-md" : "bg-[#440241]"
      } text-white`}>
      <nav className="flex justify-between items-center w-[90%] mx-auto py-5">
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-2xl cursor-pointer" onClick={() => scrollToSection("home")}>
            BensonDev
          </h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex font-bold gap-10 items-center">
          {menuItems.map((item) => (
            <li key={item} className="group relative cursor-pointer hover:text-[#F6339A] capitalize"onClick={() => scrollToSection(item)}>
              {item === "info" ? "My Info" : item}
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-pink-500 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center gap-4">
          <AlignLeft className="cursor-pointer" size={28} onClick={toggleMenu} />
          {/* <div className="cursor-pointer" onClick={toggleDark}> {dark ? <Moon /> : <Sun />} </div> */}
        </div>

        {/* Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={closeMenu}/> )}

        {/* Mobile Sidebar */}
        <div className={`fixed top-0 right-0 w-64 h-full bg-[#440241] z-50 p-6 transition-transform duration-300 ${ menuOpen ? "translate-x-0" : "translate-x-full" }`} >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Menu</h2>
            <X className="cursor-pointer" onClick={closeMenu} />
          </div>
          <ul className="flex flex-col gap-6">
            {menuItems.map((item) => (
              <li key={item} className="group relative cursor-pointer text-lg capitalize" onClick={() => scrollToSection(item)}> {item === "info" ? "My Info" : item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
