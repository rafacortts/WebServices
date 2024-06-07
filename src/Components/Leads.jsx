import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Teste from "../Img/LandPage1.png";
import Teste2 from "../Img/LandPage2.png";

const Leads = () => {
  return (
    <div className="bg-gradient-to-r from-primaryColor to-secondColor">
      <div className="container mx-auto px-4 py-0 sm:py-0">
        <div className="flex flex-col items-center text-center">
          <div className="mt-12 gap-6 min-h-[500px] items-center space-y-6">
            <motion.h1
              className="text-white text-4xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Sua primeira venda pode ser mais rápida do que você imagina
            </motion.h1>
            <motion.div
              className="mt-5 pb-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-white text-lg">
                No mundo digital de hoje, a velocidade é crucial. A primeira venda, aquele momento emocionante que valida seu esforço e paixão, pode estar muito mais próxima do que você imagina. E nós, especialistas em criação de sites e landing pages, estamos aqui para acelerar esse processo. Imagine ter um site profissional e uma landing page eficaz, ambos projetados para atrair e converter clientes de maneira eficiente. É exatamente isso que oferecemos: soluções digitais sob medida que colocam seu negócio à frente da concorrência.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="image-container">
                <img
                  src={Teste}
                  alt="Descrição da imagem 1"
                  className="object-cover"
                />
                <div className="overlay">
                  <span>Nome do Projeto 1</span>
                </div>
              </div>
              <div className="image-container">
                <img
                  src={Teste2}
                  alt="Descrição da imagem 2"
                  className="object-cover"
                />
                <div className="overlay">
                  <span>Nome do Projeto 2</span>
                </div>
              </div>
            </motion.div>
            <div className="mt-5 pb-5">
              <Link to="/Em-Breve" className="third-btn text-white">
                Veja Mais
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leads;
