import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div className="mt-6 bg-gradient-to-r from-primaryColor to-secondColor ">
      <div className="sm:py-0 sm:mt-0 container">
        <div className="mx-auto px-4 flex">
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 min-h-[500px] items-center">
            <div className="space-y-5 text-center sm:text-left">
              <motion.h1
                className="text-4xl font-semibold flex"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-white font-4xl">
                  Facilitamos suas vendas e Impulsionamos seu negócio
                </h1>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white"
              >
                Aumente suas vendas personalizando planos com diversas
                frequências, tudo para atender às necessidades específicas dos
                seus clientes.
              </motion.p>
              <motion.div
                className="flex items-center space-x-5 justify-center sm:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link to={"/Login"} className="third-btn text-white">
                  Começe Agora
                </Link>
              </motion.div>
            </div>
            <motion.div
              className="order-1 sm:order-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div
                className="relative pb-9/16 mb-8 w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-md shadow-md"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
