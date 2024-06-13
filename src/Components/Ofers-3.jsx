import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaSms, FaWhatsapp } from "react-icons/fa";

const SalesRecovery = () => {
  return (
    <div className="mt-6 bg-white p-4 sm:p-8 rounded-xl shadow-lg max-w-2xl mx-auto border border-slate-300">
      <div className="space-y-6">
        <motion.div
          className="flex flex-col justify-between items-center text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-4xl  mb-4">
            Recuperador de Vendas
          </h2>
          <div className="flex justify-center space-x-2 sm:space-x-4 mt-4">
            <span className="bg-transparent border border-black text-black py-2 px-4 rounded-lg flex items-center space-x-2">
              <FaEnvelope />
              <span>Email</span>
            </span>
            <span className="bg-transparent border border-black text-black py-2 px-4 rounded-lg flex items-center space-x-2">
              <FaSms />
              <span>SMS</span>
            </span>
            <span className="bg-transparent border border-black text-black py-2 px-4 rounded-lg flex items-center space-x-2">
              <FaWhatsapp />
              <span>WhatsApp</span>
            </span>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-gray-700"
        >
          Evite que seu cliente esqueça de pagar em dia, nosso recuperador envia
          mensagens relevantes para os seus clientes, o que aumenta as chances
          de conversão.
        </motion.p>
        <motion.div
          className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="space-y-2 sm:space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">
                Cobrança criada para Tulio Caldas
              </span>
              <span className="text-sm text-gray-500">22/11/2023 11:55</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-900">Mensagem enviada</span>
              <span className="text-sm text-gray-500">25/11/2023 19:12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-900">Mensagem visualizada</span>
              <span className="text-sm text-gray-500">25/11/2023 19:13</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-900">Pagamento aprovado</span>
              <span className="text-sm text-gray-500">25/11/2023 19:15</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SalesRecovery;
