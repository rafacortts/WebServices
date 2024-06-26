import React, { useEffect, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../Img/Logo.png";

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
    { link: "Início", path: "/" },
    { link: "Serviços", path: "/Em-Breve" },
    { link: "Projetos", path: "/Em-Breve" },
    { link: "Sobre", path: "/Saiba-Mais" },
    { link: "FAQ", path: "/Privacidade" },
  ];

  const handleWhatsAppRedirect = () => {
    window.location.href = "/Login";
  };

  return (
    <header
      className={`w-full bg-white fixed top-0 left-0 right-0 border-b border-slate-200 ${
        sticky ? "header-fixed" : ""
      }`}
      style={{ zIndex: 1000 }}
    >
      <nav
        className={`py-4 lg:px-14 px-4 ${
          sticky
            ? "sticky top-0 left-0 right-0 border-0 bg-white/70 backdrop-blur-md duration-100"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <Link
            to={"/"}
            className="text-2xl flex items-center space-x-3 text-center"
          >
            <img src={Logo} alt="Logo" className="h-10" />{" "}
            {/* Adicione o logo aqui */}
          </Link>
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="text-base hover:text-primaryColor relative after:block after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:bg-primaryColor after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
          </ul>

          <div className="space-x-5 lg:flex hidden items-center">
            <button onClick={handleWhatsAppRedirect} className="second-btn">
              Login
            </button>
            <button
              onClick={handleWhatsAppRedirect}
              className="primary-btn flex items-center gap-1.5 text-white font-medium"
            >
              <FiUser className="text-lg" />
              <span>Cadastrar</span>
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {menuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6 " />
              )}
            </button>
          </div>
        </div>

        <div
          className={`space-y-4 px-4 mt-16 py-7 ${
            menuOpen ? "block fixed top-0 right-0 left-0 bg-white" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base hover:secondColor"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </Link>
          ))}

          {/* Botões de Login e Cadastro no menu mobile */}
          <div className=" items-center mt-4">
            <button
              onClick={handleWhatsAppRedirect}
              className="second-btn   mb-3"
            >
              Login
            </button>
            <button
              onClick={handleWhatsAppRedirect}
              className="primary-btn  flex  gap-1.5 text-white font-medium"
            >
              <FiUser className="text-lg " />
              <span>Cadastrar</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
