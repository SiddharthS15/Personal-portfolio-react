import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { githubo } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_project_link,
  live_project_status,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleLiveProjectClick = () => {
    if (live_project_link) {
      window.open(live_project_link, "_blank");
    } else {
      setShowPopup(true);
    }
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        className='bg-tertiary p-4 sm:p-5 rounded-2xl w-full max-w-[400px] mx-auto'
      >
        <div className='relative w-full h-[200px] sm:h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-2 sm:m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={githubo}
                alt='source code'
                className='w-6 h-6 sm:w-8 sm:h-8 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-4 sm:mt-5'>
          <h3 className='text-white font-bold text-[20px] sm:text-[22px] lg:text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px]'>{description}</p>
        </div>

        <div className='mt-3 sm:mt-4 flex flex-wrap gap-2 justify-center sm:justify-start'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[11px] sm:text-[12px] lg:text-[14px] ${tag.color} px-2 py-1 rounded-full bg-black-200/50`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        {/* Live Project Button - Always show */}
        <button 
          onClick={handleLiveProjectClick}
          className="mt-3 sm:mt-4 bg-primary hover:bg-primary-dark text-white px-3 sm:px-4 py-2 sm:py-3 rounded-md font-medium w-full transition-colors text-sm sm:text-base"
        >
          {live_project_link ? "Live Project" : "Live Project"}
        </button>

        {/* Popup for projects without live links */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-tertiary p-4 sm:p-6 rounded-xl max-w-xs sm:max-w-sm w-full mx-4 relative">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-2 right-2 text-white hover:text-gray-300 text-xl font-bold w-8 h-8 flex items-center justify-center"
              >
                ×
              </button>
              <h3 className="text-white font-bold text-base sm:text-lg mb-3 pr-8">Live Project Status</h3>
              <p className="text-secondary text-xs sm:text-sm mb-4 leading-relaxed">
                {live_project_status || "This project is currently in development."}
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-[#915EFF] hover:bg-[#7c3aed] text-white px-4 py-2 rounded-md font-medium w-full transition-colors text-sm"
              >
                Understood
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="px-4 sm:px-0">
        <p className={`${styles.sectionSubText} text-center sm:text-left`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-center sm:text-left`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex px-4'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[14px] sm:text-[16px] lg:text-[17px] max-w-3xl leading-[24px] sm:leading-[28px] lg:leading-[30px] text-center mx-auto'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 px-4 sm:px-0'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* Want to see more section */}
      <motion.div 
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="mt-12 sm:mt-16 bg-black-100/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl border border-[#915EFF]/20 mx-4 sm:mx-0"
      >
        <div className="text-center">
          <h3 className="text-white font-bold text-[20px] sm:text-[22px] lg:text-[24px] mb-3 sm:mb-4">
            Want to see more projects?
          </h3>
          <p className="text-secondary text-[13px] sm:text-[15px] lg:text-[16px] mb-4 sm:mb-6 max-w-2xl mx-auto leading-[20px] sm:leading-[24px] px-2">
            Check out my complete collection of projects work on GitHub. 
            You can also explore the source code for this portfolio website.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-4">
            {/* GitHub Profile Button */}
            <button
              onClick={() => window.open("https://github.com/SiddharthS15", "_blank")}
              className="flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-[#333] to-[#555] hover:from-[#555] hover:to-[#777] text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 w-full sm:w-auto sm:min-w-[180px] lg:min-w-[200px]"
            >
              <img src={githubo} alt="GitHub" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              <span className="text-xs sm:text-sm lg:text-base">Visit GitHub Profile</span>
            </button>

            {/* Portfolio Source Code Button */}
            <button
              onClick={() => window.open("https://github.com/SiddharthS15/Personal-portfolio-react", "_blank")}
              className="flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-[#915EFF] to-[#7c3aed] hover:from-[#7c3aed] hover:to-[#915EFF] text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 w-full sm:w-auto sm:min-w-[180px] lg:min-w-[200px]"
            >
              <img src={githubo} alt="GitHub" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              <span className="text-xs sm:text-sm lg:text-base">Portfolio Source Code</span>
            </button>
          </div>

          {/* Additional info */}
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center text-secondary text-[10px] sm:text-[12px] lg:text-[14px] px-2 sm:px-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Open Source Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>Regular Contributions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>Clean Code Practices</span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
