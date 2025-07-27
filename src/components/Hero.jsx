import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isLightOn, setIsLightOn] = useState(true);

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };

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
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a <span className="text-[#915EFF] font-bold">Developer</span>, Freelancer, Designer & Learner
            <br />
            <b>Bring on the challenges, I'm ready to soak up knowledge!</b>
          </p>
        </div>
      </div>

      {/* Light Bulb Toggle Button */}
      <motion.div
        className="absolute top-[320px] right-[25%] sm:right-[25%] lg:right-[20%] z-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.button
          onClick={toggleLight}
          className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
            isLightOn 
              ? 'bg-yellow-400 shadow-yellow-400/50 shadow-lg' 
              : 'bg-gray-600 shadow-gray-600/30 shadow-md'
          } hover:scale-110 active:scale-95`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title={isLightOn ? "Turn lights off" : "Turn lights on"}
        >
          {/* Light Bulb Icon */}
          <motion.div
            className={`text-2xl sm:text-3xl transition-all duration-300 ${
              isLightOn ? 'text-white' : 'text-gray-400'
            }`}
            animate={{ 
              rotate: 180, // Keep pointing down
              scale: isLightOn ? 1 : 0.9
            }}
            transition={{ duration: 0.3 }}
          >
            💡
          </motion.div>
          
          {/* Glow Effect */}
          {isLightOn && (
            <motion.div
              className="absolute inset-0 rounded-full bg-yellow-400 opacity-30"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: "loop" 
              }}
            />
          )}
          
          {/* Light Rays Animation */}
          {isLightOn && (
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: '0 0',
                  }}
                  initial={{ 
                    rotate: i * 45,
                    x: 20,
                    y: -2,
                    opacity: 0 
                  }}
                  animate={{ 
                    rotate: i * 45,
                    x: [20, 30, 20],
                    y: -2,
                    opacity: [0, 1, 0] 
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    repeatType: "loop",
                    delay: i * 0.1
                  }}
                />
              ))}
            </div>
          )}
        </motion.button>
        
        {/* Status Text */}
        <motion.p
          className={`text-center text-xs sm:text-sm mt-2 font-medium transition-colors duration-300 ${
            isLightOn ? 'text-yellow-400' : 'text-gray-500'
          }`}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {isLightOn ? 'Lights On' : 'Lights Off'}
        </motion.p>
      </motion.div>

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
