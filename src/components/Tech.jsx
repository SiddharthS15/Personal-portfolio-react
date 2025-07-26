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

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-15">
        {technologies.map((technology) => (
          <div className='w-28 h-28 bg-gray-700 rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-gray-600 hover:shadow-lg hover:shadow-gray-500/20' key={technology.name}>
            <img src={technology.icon} alt={technology.name} className="w-16 h-16 object-contain" />
            <p className="text-white text-xs mt-2">{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");