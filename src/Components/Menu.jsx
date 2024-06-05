import React, { useEffect, useState } from 'react';
import { FaTimes, FaBars } from "react-icons/fa";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/Em-Breve" },
    { link: "Service", path: "/Em-Breve" },
    { link: "About", path: "/Em-Breve" },
    { link: "FAQ", path: "/Em-Breve" },
  ];

  const handleWhatsAppRedirect = () => {
    window.location.href = "/Em-Breve";
  };

  return (
    <header className="w-full bg-white fixed top-0 left-0 right-0 border-b border-gray-200 ">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          sticky
            ? "sticky top-0 left-0 right-0 border-0 bg-black duration-100"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a href="#" className="text-2xl flex items-center space-x-3">
            SuaLogoAqui
          </a>

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <a
                key={path}
                href={path}
                className=" f block text-base hover:text-customRed relative after:block after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:bg-customRed after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
              >
                {link}
              </a>
            ))}
          </ul>

          <div className="space-x-5 lg:flex hidden items-center">
            <button
              onClick={handleWhatsAppRedirect}
              className="bg- border-2 border-customRed  py-2 px-4 transition-all duration-300 rounded-md hover:bg-transparent hover:text-black hover:border-1 hover:border-customRed"
            >
             Contato
            </button>
            <button
              onClick={handleWhatsAppRedirect}
              className="bg-customRed border-2 rounded-md border-customRed text-white py-2 px-4  transition-all hover:bg-red-500 hover:border-red-500"
            >
              Cadastrar
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className=" focus:outline-none"
            >
              {menuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`space-y-4 px-4 mt-16 py-7  ${
            menuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <a
              key={path}
              href={path}
              className="block text-base hover:text-customRed"
              onClick={() => setMenuOpen(false)} // Close the menu on click
            >
              {link}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Menu;
