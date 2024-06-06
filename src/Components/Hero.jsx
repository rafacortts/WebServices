import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Teste from "../Img/teste.jpg";
import { MdOndemandVideo } from "react-icons/md";
import { FiUser } from "react-icons/fi";


const Hero = () => {
  return (
    <div className="mt-12 border-b border-slate-300 ">
      <div className="sm:py-0 sm:mt-0 container">
        <div className="mx-auto px-4 flex">
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 min-h-[500px] items-center">
            <div className="space-y-5 text-center sm:text-left">
              <motion.h1
                className="text-4xl font-semibold"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1>
                  Transformamos sonhos em realidade, levando sucesso de forma{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryColor to-secondColor">
                     simples, confiável e lucrativa.
                  </span>
                </h1>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
               Impulsione seus produtos e serviços digitais — com a menor taxa do mercado.   
              </motion.p>
              <motion.div
                className="flex items-center space-x-5 justify-center sm:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link to={"/Em-Breve"} className="primary-btn text-white">
                  Começe Agora
                </Link>
                <Link
                  to={"/Em-Breve"}
                  className="second-btn flex items-center gap-2"
                >
                  <MdOndemandVideo className="" /> Saiba Mais
                </Link>
              </motion.div>
            </div>
            <motion.div
              className="order-1 sm:order-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <img
                src={Teste}
                alt="Hero"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
