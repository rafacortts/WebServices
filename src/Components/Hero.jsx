import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Teste from '../Img/teste.jpg';

const Hero = () => {
  return (
    <div className="mt-12">
      <div className="sm:py-0 sm:mt-0 container">
        <div className="mx-auto px-4 flex">
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 min-h-[500px] place-items-center w-full">
            <div className="space-y-5 text-center sm:text-left">
              <motion.h1
                className="text-4xl font-medium"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Lorem ipsum dolor sit amet.
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryColor to-secondColor">
                  Lorem ipsum dolor sit amet.
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
                velit?
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center sm:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link to={"/Em-Breve"} className="primary-btn text-white">
                  Veja Mais
                </Link>
                <button className="second-btn">
                  Veja Mais
                </button>
              </motion.div>
            </div>
            <motion.div
              className="order-1 sm:order-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {/* <img src={Teste} alt="Hero" className="w-full h-auto rounded-lg" /> */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
