import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const CertificationCard = ({ certification }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={certification.date}
      iconStyle={{ background: certification.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={certification.icon}
            alt={certification.issuer}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{certification.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {certification.issuer}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {certification.points.map((point, index) => (
          <li
            key={`certification-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
            {certification.credential && certification.credential !== "#" && (
              <>
                <br />
                <a 
                  href={certification.credential} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='text-blue-400 hover:text-blue-300 transition-colors'
                > 
                  View Certificate
                </a>
              </>
            )}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Professional Development
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Certifications & Achievements
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {certifications.map((certification, index) => (
            <CertificationCard
              key={`certification-${index}`}
              certification={certification}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
