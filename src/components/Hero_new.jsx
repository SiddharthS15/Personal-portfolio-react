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
                <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                    I develop 3D visuals, user <br className="sm:block hidden" />
                    interfaces and web applications
                </p>
                {/* Added roles text */}
                <div className="mt-4 flex gap-3">
                    <span className="px-3 py-1 bg-[#915EFF]/20 text-[#915EFF] rounded-full text-sm font-semibold">Developer</span>
                    <span className="px-3 py-1 bg-[#915EFF]/20 text-[#915EFF] rounded-full text-sm font-semibold">Designer</span>
                </div>
            </div>
        </div>

        <ComputersCanvas isLightOn={isLightOn} />

        {/* Light Bulb Toggle Button - Near Computer Screen */}
        <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 z-20">
            <div className="flex flex-col items-center">
                <button
                    onClick={() => setIsLightOn(!isLightOn)}
                    className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                        isLightOn 
                            ? 'bg-yellow-400 border-yellow-500 text-yellow-900 shadow-lg shadow-yellow-300/50' 
                            : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
                    }`}
                    title={isLightOn ? "Turn off light" : "Turn on light"}
                >
                    <span className="text-2xl">💡</span>
                </button>
                
                {/* Light Rays Animation */}
                {isLightOn && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="absolute w-20 h-20 border-2 border-yellow-300/30 rounded-full animate-ping"></div>
                        <div className="absolute w-24 h-24 border border-yellow-200/20 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                        <div className="absolute w-28 h-28 border border-yellow-100/10 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                    </div>
                )}
                
                {/* Label */}
                <div className="mt-2 text-center">
                    <span className="text-xs text-white/60 font-medium">
                        {isLightOn ? 'Lights On' : 'Lights Off'}
                    </span>
                </div>
            </div>
        </div>

        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
            <a href="#about">
                <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
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
