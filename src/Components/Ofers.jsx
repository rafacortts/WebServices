import React from 'react';
import { motion } from 'framer-motion';
import { FaCamera, FaChalkboardTeacher, FaLaptop, FaBookOpen, FaUsers, FaClipboardList, FaBook, FaEnvelope, FaPenNib, FaStethoscope } from 'react-icons/fa';

const services = [
  { name: "Fotografia", icon: <FaCamera /> },
  { name: "Mentorias", icon: <FaChalkboardTeacher /> },
  { name: "Cursos", icon: <FaLaptop /> },
  { name: "Aulas", icon: <FaBookOpen /> },
  { name: "Grupos", icon: <FaUsers /> },
  { name: "Assessoria", icon: <FaClipboardList /> },
  { name: "E-Books", icon: <FaBook /> },
  { name: "Newsletter", icon: <FaEnvelope /> },
  { name: "Freelances", icon: <FaPenNib /> },
  { name: "Consultas", icon: <FaStethoscope /> },
];

const ServicesList = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white py-10">
      <div className="max-w-6xl w-full p-6 md:p-12 bg-gradient-to-r from-primaryColor to-secondColor rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-center">Criou algo fantástico? Te ajudamos a vender.</h1>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.ul
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {services.map((service, index) => (
              <motion.li
                key={index}
                className="p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow flex items-center space-x-2 bg-white text-black hover:bg-gray-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-2xl sm:text-3xl">{service.icon}</div>
                <h2 className="text-lg sm:text-xl font-semibold">{service.name}</h2>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            className="mt-8 md:mt-0 md:ml-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <img src="https://via.placeholder.com/400x400" alt="Side" className="w-full md:w-auto rounded-lg shadow-lg" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ServicesList;
