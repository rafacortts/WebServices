import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Teste from "../Img/LandPage1.png";
import Teste2 from "../Img/LandPage2.png";

const Leads = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Teste, Teste2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-gradient-to-r from-primaryColor to-secondColor min-h-screen">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-center text-center">
          <div className="md:w-1/2 md:pr-6">
            <motion.h1
              className="text-white text-4xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Sua primeira venda pode ser mais rápida do que você imagina
            </motion.h1>
            <motion.div
              className="text-white text-lg leading-7 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p>
                No mundo digital de hoje, a velocidade é crucial. A primeira venda, aquele momento emocionante que valida seu esforço e paixão, pode estar muito mais próxima do que você imagina. E nós, especialistas em criação de sites e landing pages, estamos aqui para acelerar esse processo. Imagine ter um site profissional ou landing page eficaz, ambos projetados para atrair e converter clientes de maneira eficiente. É exatamente isso que oferecemos: soluções digitais sob medida que colocam seu negócio à frente da concorrência.
              </p>
            </motion.div>
            <div className="flex justify-center">
              <Link
                to="/Em-Breve"
                className="third-btn text-white flex items-center hover:underline"
              >
                Veja Mais <FaArrowRight className="ml-1" />
              </Link>
            </div>
          </div>
          <motion.div
            className="md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0 }}
            >
              <div className="image-container relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={images[currentImageIndex]}
                  alt={`Descrição da imagem ${currentImageIndex + 1}`}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100 duration-300">
                  <div className="text-center text-white">
                    <Link
                      to={"/Em-Breve"}
                      className="font-bold text-3xl hover:underline"
                    >
                      {currentImageIndex === 0 ? "Projeto Astra" : "Projeto Hoppers"}
                    </Link>
                    <p className="text-sm">
                      {currentImageIndex === 0
                        ? "Um site inovador focado em soluções tecnológicas."
                        : "Uma landing page que maximiza conversões."}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Leads;
