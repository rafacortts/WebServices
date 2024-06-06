import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.h1 
        className="bg-clip-text text-transparent bg-gradient-to-r from-primaryColor to-secondColor text-4xl font-semibold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Em construção
      </motion.h1>
      <motion.p 
        className="text-lg text-gray-600 mb-8 text-center mt-3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Desculpe, a página que você está procurando está sendo construida.
      </motion.p>
      <motion.img
        src="/imagens/404.png"
        alt="Página não encontrada :("
        className="max-w-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      <motion.p 
        className="text-gray-500 mt-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Mas hey, pelo menos estamos está aqui!
      </motion.p>
      <motion.div 
        className='pt-6'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Link to={"/"} className='primary-btn text-white'>
          Volte a Navegar
        </Link>
      </motion.div>
    </div>
  );
};

export default Error404;
