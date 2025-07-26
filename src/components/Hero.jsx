import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-primary">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-purple-500" />
          <div className="w-1 h-40 bg-gradient-to-b from-purple-500 to-transparent" />
        </div>

        <div>
          <h1 className="font-black text-white text-[40px] sm:text-[60px] lg:text-[80px] leading-tight mt-2">
            Hi, I'm <span className="text-purple-400">Siddharth Sadake</span>
          </h1>
          <p className="text-gray-300 font-medium text-[16px] sm:text-[26px] lg:text-[30px] mt-2">
            I'm a <span className="text-purple-500 font-bold">Developer</span>
            <br />
            <b>Bring on the challenges, I'm ready to soak up knowledge!</b>
          </p>
        </div>
      </div>

      <div className="absolute bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-400 flex justify-center items-start p-2 cursor-pointer hover:border-white transition-colors">
            <div className="w-3 h-3 rounded-full bg-gray-400 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
