import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const LeetCode = () => {
  const leetcodeStats = {
    username: "SiddharthS15",
    profileUrl: "https://leetcode.com/u/SiddharthS15/",
    totalSolved: "150+", // You can update this with actual stats
    easyProblems: "80+",
    mediumProblems: "60+",
    hardProblems: "10+",
    ranking: "Top 15%", // You can update this with actual ranking
  };

  const achievements = [
    {
      title: "Problem Solver",
      description: "Consistently solving algorithmic challenges",
      icon: "🧩"
    },
    {
      title: "Algorithm Expert",
      description: "Strong grasp of data structures and algorithms",
      icon: "⚡"
    },
    {
      title: "Code Optimizer",
      description: "Focus on efficient and clean solutions",
      icon: "🎯"
    }
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Competitive Programming
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          LeetCode Profile
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto"
        >
          Passionate about solving algorithmic challenges and improving problem-solving skills 
          through consistent practice on LeetCode. Here's my coding journey:
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {/* Main LeetCode Card */}
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          className="bg-tertiary p-10 rounded-3xl xs:w-[320px] w-full max-w-[400px]"
        >
          <div className="relative w-full h-[230px]">
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* LeetCode Logo/Icon */}
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-white">LC</span>
              </div>
              
              {/* Username */}
              <h3 className="text-white font-bold text-[24px] text-center">
                {leetcodeStats.username}
              </h3>
              
              {/* Stats Grid */}
              <div className="mt-4 grid grid-cols-2 gap-4 w-full">
                <div className="text-center">
                  <p className="text-[#915EFF] font-bold text-[18px]">{leetcodeStats.totalSolved}</p>
                  <p className="text-white text-[12px]">Total Solved</p>
                </div>
                <div className="text-center">
                  <p className="text-green-400 font-bold text-[18px]">{leetcodeStats.ranking}</p>
                  <p className="text-white text-[12px]">Ranking</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white text-[14px]">Easy:</span>
              <span className="text-green-400 font-semibold">{leetcodeStats.easyProblems}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-white text-[14px]">Medium:</span>
              <span className="text-yellow-400 font-semibold">{leetcodeStats.mediumProblems}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-white text-[14px]">Hard:</span>
              <span className="text-red-400 font-semibold">{leetcodeStats.hardProblems}</span>
            </div>
            
            {/* Visit Profile Button */}
            <button
              onClick={() => window.open(leetcodeStats.profileUrl, '_blank')}
              className="w-full bg-gradient-to-r from-[#915EFF] to-[#7c3aed] hover:from-[#7c3aed] to-[#915EFF] text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Visit LeetCode Profile
            </button>
          </div>
        </motion.div>

        {/* Achievements Cards */}
        <div className="flex flex-col gap-6 max-w-[500px]">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={fadeIn("left", "spring", index * 0.2 + 0.7, 0.75)}
              className="bg-black-200 p-6 rounded-2xl border border-[#915EFF]/20 hover:border-[#915EFF]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl">{achievement.icon}</div>
                <div>
                  <h4 className="text-white font-bold text-[18px] mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-secondary text-[14px]">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Programming Languages Used */}
          <motion.div
            variants={fadeIn("left", "spring", 1.3, 0.75)}
            className="bg-black-200 p-6 rounded-2xl border border-[#915EFF]/20"
          >
            <h4 className="text-white font-bold text-[18px] mb-3">
              Primary Languages
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Python", "JavaScript", "Java", "C++"].map((lang, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#915EFF]/20 text-[#915EFF] rounded-full text-sm font-medium"
                >
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        variants={fadeIn("up", "spring", 1.5, 0.75)}
        className="mt-12 text-center"
      >
        <p className="text-secondary text-[16px] mb-4">
          Want to collaborate on algorithmic challenges or discuss problem-solving approaches?
        </p>
        <button
          onClick={() => window.open(leetcodeStats.profileUrl, '_blank')}
          className="bg-transparent border-2 border-[#915EFF] text-[#915EFF] hover:bg-[#915EFF] hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
        >
          Connect on LeetCode
        </button>
      </motion.div>
    </>
  );
};

export default SectionWrapper(LeetCode, "leetcode");
