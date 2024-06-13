import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const handleWhatsAppRedirect = () => {
    window.location.href = "https://wa.me/5521998095334";
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-8 text-gray-400 text-sm pb-8">
        <div className="text-center">
          <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primaryColor to-secondColor font-bold">Webservices</h1>
          <p className="text-gray-400">Simples, Confiável e Lucrativa</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/rafacortts"
              className="text-gray-400 hover:text-white"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/rafael-cortes-404b4b2a4/"
              className="text-gray-400 hover:text-white"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white font-semibold mb-2">Links Rápidos</h2>
          <ul>
            <li>
              <a href="/Saiba-Mais" className="hover:text-white">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="/Em-Breve" className="hover:text-white">
                Serviços
              </a>
            </li>
            <li>
              <a href="/Em-Breve" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="/Em-Breve" className="hover:text-white">
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-semibold mb-2">Termos Legais</h2>
          <ul>
            <li>
              <a href="/Privacidade" className="hover:text-white">
                Termos de Uso
              </a>
            </li>
            <li>
              <a href="/Privacidade" className="hover:text-white">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="/Privacidade" className="hover:text-white">
                Política de Cookies
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto text-center pt-6 border-t border-gray-700 text-gray-400 text-sm pb-8">
        <span>© 2024 - Webservices. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;
