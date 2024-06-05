import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Em construção</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Desculpe, a página que você está procurando está sendo construida.
      </p>
      <img
        src="/imagens/404.png"
        alt="Página não encontrada"
        className="max-w-xs"
      />
      <p className="text-gray-500 mt-4">Mas hey, pelo menos o gato está aqui!</p>
      <div className='pt-6'>
      <Link to={"/"} className='bg-customRed border-2 rounded-md border-customRed text-white py-2 px-4  transition-all hover:bg-red-500 hover:border-red-500'>
      
        Volte a Navegar
      </Link>
      </div>
    </div>
  );
};

export default Error404;
