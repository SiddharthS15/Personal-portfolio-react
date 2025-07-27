import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionHeadText} text-center`}>
          Skills.
        </h3>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-8 sm:mt-12 md:mt-15 px-4">
        {technologies.map((technology) => (
          <div
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gray-700/80 rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-gray-600/80 hover:shadow-lg hover:shadow-gray-500/20 p-2"
            key={technology.name}
          >
            <img 
              src={technology.icon} 
              alt={technology.name} 
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain" 
            />
            <p className="text-white text-[10px] sm:text-xs mt-1 sm:mt-2 text-center leading-tight">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");