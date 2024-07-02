// src/components/Testimonials.js
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Rafael",
    username: "@rafael",
    image: "link_da_imagem_1", // substitua pelo link real da imagem
  },
  {
    name: "Cortes",
    username: "@cortes",
    image: "link_da_imagem_2", // substitua pelo link real da imagem
  },
  {
    name: "Soares",
    username: "@soares",
    image: "link_da_imagem_3", // substitua pelo link real da imagem
  },
];

const Header = () => {
  return (
    <header className=" text-center py-10">
      <h1 className="text-3xl font-bold">
        Veja o que nossos clientes estão falando
      </h1>
      <p>
      Confira alguns depoimentos em vídeo de nossos clientes:
      </p>
    </header>
  );
};

const Testimonials = () => {
  return (
    <div className="mb-10">
      <Header />
      <div className="flex flex-wrap justify-center gap-8 p-8 ">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-72 p-4">
            <img
              className="w-full h-auto rounded-md mt-4 mb-10"
              src={testimonial.image}
              alt={`Foto de ${testimonial.name}`}
            />
            <h3 className="mt-4 text-lg font-semibold text-center  mb-3">
              {testimonial.name}
            </h3>
            <p className="mt-2 text-sm text-gray-600 text-center">
              {testimonial.username}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link
          to="/Login"
          className=" primary-btn flex items-center text-white  gap-2"
          aria-label="Começe Agora"
        >
          Começe Agora <FaArrowRight className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default Testimonials;
