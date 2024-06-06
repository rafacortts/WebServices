import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Leads = () => {
  return (
    <div className=" bg-gradient-to-r from-primaryColor to-secondColor">
      <div className="container py-0 sm:py-0">
        <div className="mx-auto px-4 flex flex-col items-center">
          <div className="mt-12 gap-6 min-h-[500px] items-center text-center space-y-6">
            <motion.h1
              className="text-white text-4xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae impedit amet officia exercitationem aliquid odit. Beatae
              distinctio obcaecati enim at dolore iste animi asperiores
              exercitationem, ipsum dolorem eveniet. Assumenda, quas.
            </motion.h1>
            <motion.div
              className="mt-5 pb-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link to={"/Em-Breve"} className="text-white third-btn">
                Veja Mais
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leads;
