import { CiCreditCard1 } from "react-icons/ci";
import { AiOutlineGlobal } from "react-icons/ai";
import { LuUsers2 } from "react-icons/lu";
import { IoBagCheckOutline } from "react-icons/io5";
import { PiHandshake } from "react-icons/pi";
import { SiFastapi } from "react-icons/si";
import { TfiWorld } from "react-icons/tfi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { SlScreenSmartphone } from "react-icons/sl";

import React from "react";

const features = [
  { icon: <CiCreditCard1 />, text: "Receba cartão e Pix em até 2 dias" },
  { icon: <SiFastapi />, text: "Liberação do produto imediata" },
  { icon: <IoBagCheckOutline />, text: "Checkout builder" },
  { icon: <PiHandshake />, text: "Co-produção" },
  { icon: <TfiWorld/>, text: "Marketplace de Afiliados" },
  { icon: <LuUsers2/>, text: "Área de membros personalizável" },
  { icon: <SlScreenSmartphone/>, text: "Mobile app " },
  { icon: <HiOutlineRocketLaunch/>, text: "E muito mais…" },
];

const Kiwify = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8">
      <h1 className="text-4xl mb-2 text-center">
        A WebServices tem a melhor tecnologia
      </h1>
      <p className="mb-4 text-center">
        Nossa plataforma é simples e fácil de usar. Crie uma conta e comece a
        vender em 2 minutos.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-md shadow-lg text-center border-2 w-56 h-56 flex flex-col items-center justify-center"
          >
            <div className="text-5xl mb-4 text-primaryColor">{feature.icon}</div>
            <p className="text-lg">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kiwify;
