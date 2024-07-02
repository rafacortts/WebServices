import React from "react";
import {  FaCheckCircle } from "react-icons/fa";


const Lps = () => {
  const beneficios = [
    {
      titulo: "Tenha acesso à melhor UX/UI",
      descricao: "Desfrute da melhor experiência de usuário e design de interface.",
    },
    {
      titulo: "Aumente sua produtividade",
      descricao: "Aumente sua produtividade com ferramentas eficientes.",
    },
    {
      titulo: "Expanda sua rede de contatos",
      descricao: "Conecte-se com profissionais influentes em sua área.",
    },
    {
      titulo: "Melhore sua visibilidade online",
      descricao: "Aumente sua presença digital e seja reconhecido.",
    },
    {
      titulo: "Melhore suas vendas",
      descricao: "Aumente sua presença digital e seja reconhecido.",
    },
  ];

  return (
    <div className="container mx-auto px-4 mt-12">
      <h2 className="text-4xl text-center">
        Ter sua loja online é mais <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryColor to-secondColor">simples </span>do que você imagina
      </h2>
      <div className="flex flex-wrap justify-center mt-12">
        <div className="p-2 w-full lg:w-1/2 flex flex-col items-center">
          <img
            src="https://via.placeholder.com/500x500"
            alt="Land Page 1"
            className="mb-6 rounded-md shadow-md"
          />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {beneficios.map(({ titulo, descricao }, index) => (
            <div key={index} className="flex items-start mb-8">
              <FaCheckCircle
                size={24}
                className="mr-4 mb-2 text-green-500"
                aria-label="Check icon"
              />
              <div>
                <h5 className="-mt-1 text-xl font-semibold text-gray-800">
                  {titulo}
                </h5>
                <p className="text-md text-gray-600">{descricao}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-center ">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Lps;
