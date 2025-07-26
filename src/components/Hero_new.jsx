import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isLightOn, setIsLightOn] = useState(true);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Siddharth Sadake</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 mb-30;`}>
            I'm a <span className="text-[#915EFF] font-bold mb-30">Developer</span>, Freelancer, Designer & Learner
            <br />
            <b>Bring on the challenges, I'm ready to soak up knowledge!</b>
          </p>
        </div>
      </div>

      {/* Torch Toggle Button */}
      <div className="absolute top-40 right-10 z-20">
        <button
          onClick={() => setIsLightOn(!isLightOn)}
          className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
            isLightOn 
              ? 'bg-yellow-400 border-yellow-500 text-yellow-900 shadow-lg shadow-yellow-300/50' 
              : 'bg-gray-700 border-gray-600 text-gray-300'
          }`}
          title={isLightOn ? "Turn off light" : "Turn on light"}
        >
          {isLightOn ? '🔦' : '🔦'}
        </button>
      </div>

      <ComputersCanvas isLightOn={isLightOn} />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer hover:border-white transition-colors">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
