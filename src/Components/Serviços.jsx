import React from "react";
import { motion } from "framer-motion";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { FaArrowTrendDown, FaArrowTrendUp} from "react-icons/fa6";

const ServicesData = [
  {
    id: 1,
    heading: "Menores Taxas do Mercado",
    text: "Tenha acesso as menores Taxas do Mercado e Impulsione suas vendas.",
    icon: <FaArrowTrendDown className="text-6xl" />,
  },
  {
    id: 2,
    heading: "Impulsione suas Vendas",
    text: "Investir em landing pages  é essencial para aumentar suas Vendaas",
    icon: <FaArrowTrendUp className="text-6xl" />,
  },
  {
    id: 3,
    heading: "Alta Retenção de Leads",
    text: "Investir em landing pages  é essencial para aumentar suas conversões.",
    icon: <MdOutlineRocketLaunch className="text-6xl" />,
  },
  {
    id: 4,
    heading: "O Saque Mais Rápido",
    text: "Invista em estratégias de marketing digital para impulsionar suas vendas e aumentar sua presença online.",
    icon: <MdOutlineRocketLaunch className="text-6xl" />,
  },
];

const Services = () => {
  return (
    <div className="shadow-md">
      <div className="container mx-auto mt-12 items-center pb-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {ServicesData.map(({ id, heading, text, icon }) => (
            <motion.div 
              key={id} 
              className="space-y-3 text-center p-5 "
              whileHover={{ scale: 1.00 }}
              whileTap={{ scale: 1.00 }}
            >
              <div className="flex justify-center">{icon}</div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">{heading}</h1>
              <p className="text-sm sm:text-base lg:text-lg">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
