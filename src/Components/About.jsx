import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex bg-gray-100 justify-center mt-10 p-4 ">
      <div className="container max-w-4xl text-center p-8  rounded-md bg-white border border-slate-200">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ">
          Impulsionamos suas vendas e seu posicionamento digital com o <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryColor to-secondColor">
           menor preço do mercado </span> 
        </h1>
        <p className="text-md sm:text-lg lg:text-xl text-gray-600 mb-8">
          Nossa missão é fornecer estratégias eficazes e acessíveis para aumentar sua presença online e maximizar suas vendas. 
          Confie em nós para levar seu negócio ao próximo nível.
        </p>
        <div className="relative pb-9/16 mb-8 w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-md shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
