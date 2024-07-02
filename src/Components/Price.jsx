import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Price = () => {
  const [isYearly, setIsYearly] = useState(false);
  const Packs = [
    {
      nome: "Essencial",
      descricao: "Descrição do Pacote Básico",
      Mensal: "9,90",
      Anual: "99,90",
      beneficios: [
        { texto: "Imagens de Alta Qualidade", incluido: true },
        { texto: "Suporte 24/7", incluido: false },
        { texto: "Acesso a Novos Conteúdos", incluido: false },
        { texto: "Descontos Exclusivos", incluido: false },
      ],
    },
    {
      nome: "Essencial +",
      descricao: "Descrição do Pacote Intermediário",
      Mensal: "19,90",
      Anual: "199,90",
      beneficios: [
        { texto: "Imagens de Alta Qualidade", incluido: true },
        { texto: "Suporte 24/7", incluido: true },
        { texto: "Acesso a Novos Conteúdos", incluido: true },
        { texto: "Descontos Exclusivos", incluido: false },
      ],
    },
    {
      nome: "Premium",
      descricao: "Descrição do Pacote Avançado",
      Mensal: "29,90",
      Anual: "299,90",
      beneficios: [
        { texto: "Imagens de Alta Qualidade", incluido: true },
        { texto: "Suporte 24/7", incluido: true },
        { texto: "Acesso a Novos Conteúdos", incluido: true },
        { texto: "Descontos Exclusivos", incluido: true },
      ],
    },
  ];

  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10 container">
      <div className="text-center">
        <h2 className="text-4xl mb-2 text-center">
          Os <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryColor to-secondColor">Melhores Planos</span> do Mercado Para Turbinar Suas Vendas
        </h2>
        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 text-2xl">Mensal</span>
            <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
              <div
                className={`w-6 h-6 rounded-full ${
                  isYearly ? "bg-primaryColor ml-8" : "bg-gray-500"
                }`}
              ></div>
            </div>
            <span className="ml-8 text-2xl">Anual</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
        {Packs.map(({ nome, descricao, Mensal, Anual, beneficios }, index) => (
          <div
            key={index}
            className="border py-10 md:px-6 px-4 rounded-lg shadow-lg"
          >
            <h3 className="text-3xl font-bold text-center">{nome}</h3>
            <p className="text-center my-5">{descricao}</p>
            <p className="text-center mt-5 text-4xl font-bold">
              {isYearly ? `R$${Anual}` : `R$${Mensal}`} <span className="text-base font-medium">/{isYearly ? 'Anual' : 'Mensal'}</span>
            </p>
            <ul className="mt-4 space-y-2 px-4">
              {beneficios.map(({ texto, incluido }, i) => (
                <li key={i} className="flex gap-3 items-center">
                  {incluido ? (
                    <FaCheckCircle className="text-green-500 w-6 h-6" />
                  ) : (
                    <FaTimesCircle className="text-red-500 w-6 h-6" />
                  )}
                  {texto}
                </li>
              ))}
            </ul>
            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className="second-btn">
                Compre Agora
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
