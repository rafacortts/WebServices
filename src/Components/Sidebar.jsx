import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineLogout, HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { MdDashboard } from "react-icons/md";
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../lib/constants';

const linkClass =
  'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-200 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { pathname } = useLocation();

  // Atualizar estado isMobile quando a largura da janela for alterada
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Função para abrir o menu lateral em dispositivos móveis
  const handleOpenSidebar = () => {
    if (isMobile) {
      setSidebarOpen(true);
    }
  };

  // Função para fechar o menu ao clicar em um link
  const handleLinkClick = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Botão de menu para dispositivos móveis */}
      <div className="md:hidden flex items-center p-4 bg-white ">
        <button onClick={handleOpenSidebar}>
          <HiOutlineMenu fontSize={28} />
        </button>
        {!isMobile && (
          <div className="flex items-center gap-2 ml-4">
            <MdDashboard fontSize={24} color={"#000"}/>
            <span className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-primaryColor to-secondColor font-bold">WebServices</span>
          </div>
        )}
      </div>

      {/* Menu lateral */}
      <div className={classNames(
        "fixed inset-0 z-40 transition-transform transform md:transform-none md:relative md:inset-auto md:z-auto",
        {
          "-translate-x-full md:translate-x-0": !sidebarOpen,
          "translate-x-0": sidebarOpen,
        },
        "bg-gray-100 w-60 p-3 flex flex-col"
      )}>
        <div className="flex items-center justify-between md:justify-start gap-2 px-1 py-3">
          <div className="flex items-center gap-2">
            <MdDashboard fontSize={24} color={"#000"} />
            {!isMobile && (
              <span className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-primaryColor to-secondColor font-bold">WebServices</span>
            )}
          </div>
          {/* Botão de fechar para dispositivos móveis */}
          <button onClick={() => setSidebarOpen(false)} className="md:hidden">
            <HiOutlineX fontSize={24} className="text-white" />
          </button>
        </div>
        <div className="py-8 flex flex-1 flex-col gap-0.5">
          {DASHBOARD_SIDEBAR_LINKS.map((link) => (
            <SidebarLink key={link.key} link={link} onClick={handleLinkClick} />
          ))}
        </div>
        <div className="flex flex-col gap-0.5 pt-2 border-t border-black">
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
            <SidebarLink key={link.key} link={link} onClick={handleLinkClick} />
          ))}
          <div className={classNames(linkClass, 'cursor-pointer text-red-700')} onClick={() => setSidebarOpen(false)}>
            <span className="text-xl">
              <HiOutlineLogout />
            </span>
            Sair
          </div>
        </div>
      </div>
      {/* Overlay para dispositivos móveis */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}

function SidebarLink({ link, onClick }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(pathname === link.path ? 'bg-neutral-200 text-white' : 'text-black', linkClass)}
      onClick={onClick} // Fechar o menu ao clicar em um link
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
}
