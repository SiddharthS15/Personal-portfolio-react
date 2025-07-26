import {
  mobile,
  backend,
  web,
  fullstack,
  // Programming Languages
  c,
  javascript,
  java,
  python,
  typescript,
  // Web Fundamentals
  html,
  css,
  githubo,

  // Frontend Libraries & Frameworks
  bootstrap,
  chakraUi,
  figma,
  framerMotion,
  materialUi,
  nextjs,
  reactjs,
  redux,
  tailwind,
  threejs,
  vuejs,
  // Backend Technologies & APIs
  django,
  express,
  flask,
  graphql,
  nodejs,
  restapi,
  // Databases
  firebase,
  mongodb,
  mysql,
  // Cloud & DevOps
  aws,
  docker,
  git,
  github,
  linux,
  ubuntu,
  // Data Science & Machine Learning
  matplotlib,
  numpy,
  pandas,
  scikit,
  // Other assets
  xavier,
  oist,

  aicte,
  cp,
  canspirit,
  ai,
  medipredict,
  fashion,
  sortingvisualiser,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Qualifications",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "leetcode",
    title: "LeetCode",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: fullstack,
  },
];

const education = [
  {
    title: "Bachelors in Information Technology",
    company_name: "Vishwakarma Institute of Information Technology, Pune",
    icon: oist,
    iconBg: "#fff",
    date: "2022-2026",
    points: [
      "Courses undertaken: Data Structures and Algorithms, Operating Systems, Database Management Systems, Object Oriented Programming, Image Processing & Computer Vision, Computer Network, Compiler Design, Cloud Computing, Design and Analysis of Algorithm, Artificial Intelligence, Machine Learning and Deep Learning, Data Science, Internet of Things.",
      "CGPA: 8.84/10",
    ],
  },
  {
    title: "Higher Secondary Education",
    company_name: "St. Xavier's High School and Junior College, Mahad",
    icon: xavier,
    iconBg: "#fff",
    date: "2021-2022",
    points: [
      "Courses undertaken: Physics, Chemistry and Mathematics.",
      "Percentage: 92.33%",
    ],
  },
  {
    title: "Senior Secondary Education",
    company_name: "St. Xavier's High School and Junior College, Mahad",
    icon: xavier,
    iconBg: "#fff",
    date: "2019-2020",
    points: [
      "Courses undertaken: English, Sanskrit, Marathi, Mathematics, Science and Social Studies.",
      "Percentage: 95.6%",
    ],
  },
];

const technologies = [
  // Programming Languages
  { name: "C", icon: c },
  { name: "Java", icon: java },
  { name: "JavaScript", icon: javascript },
  { name: "Python", icon: python },
  { name: "TypeScript", icon: typescript },

  // Web Fundamentals
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },

  // Frontend Libraries & Frameworks
  { name: "Bootstrap", icon: bootstrap },
  { name: "Chakra UI", icon: chakraUi },
  { name: "Figma", icon: figma },
  { name: "Framer Motion", icon: framerMotion },
  { name: "Material UI", icon: materialUi },
  { name: "Next.js", icon: nextjs },
  { name: "React JS", icon: reactjs },
  { name: "Redux", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Three.js", icon: threejs },
  { name: "Vue.js", icon: vuejs },

  // Backend Technologies & APIs
  { name: "Django", icon: django },
  { name: "Express.js", icon: express },
  { name: "Flask", icon: flask },
  { name: "GraphQL", icon: graphql },
  { name: "Node.js", icon: nodejs },
  { name: "REST API", icon: restapi },

  // Databases
  { name: "Firebase", icon: firebase },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },

  // Cloud & DevOps
  { name: "AWS", icon: aws },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
  { name: "GitHub", icon: githubo },
  { name: "Linux", icon: linux },
  { name: "Ubuntu", icon: ubuntu },

  // Data Science & Machine Learning
  { name: "Matplotlib", icon: matplotlib },
  { name: "NumPy", icon: numpy },
  { name: "Pandas", icon: pandas },
  { name: "Scikit-learn", icon: scikit },
];

const experiences = [
  {
    title: "GSSO Digital Intern",
    company_name: "Colgate Palmolive",
    icon: cp,
    iconBg: "#fff",
    date: "July 2025 - present",
    points: [
      "I work on integrating and managing SAP Customer Data Cloud (Gigya) for secure user identity across global platforms.",
      "I configure screen-sets, consent flows, and social logins to ensure compliance and seamless user experience.",
      "I collaborate with backend and frontend teams to implement Gigya APIs and troubleshoot session issues.",
      "I also contribute to documentation and support digital transformation efforts within the team."
    ],
  },
  {
    title: "Intern",
    company_name: "Canspirit Artificial Intelligence",
    icon: canspirit,
    iconBg: "#fff",
    date: "Sep 2024 - Mar 2025",
    points: [
      "Collaborated with a team of 5 to develop a web-based QR code generation and management platform.",
      "Designed and implemented backend architecture using Python and Django, with structured database scripting for efficient data handling.",
      "Contributed to UI/UX design by creating intuitive, responsive interfaces using HTML, CSS, and JavaScript, ensuring a seamless user experience."
    ]
  },
  {
    title: "Data Analytics Virtual Intern",
    company_name: "AICTE",
    icon: aicte,
    iconBg: "#fff",
    date: "Oct 2024 - Nov 2024",
    points: [
      "Gained hands-on experience in real-world data analysis through structured modules and case studies.",
      "Performed data cleaning, transformation, and statistical analysis using Pandas and NumPy on large datasets.",
      "Visualized key insights and trends using Matplotlib and Seaborn to support data-driven decision making.",
    ],
  }
 
];

const projects = [
  {
    name: "AI Medical Assistance",
    description:
      "A web application leveraging Google's Gemini AI for advanced medical assistance. Users can interact with the AI for health-related queries, upload PDF medical reports for analysis, and recognize text from images or scanned documents. The system provides summarized outputs and insights based on the recognized content, enhancing accessibility and understanding of medical information.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "gemini-api",
        color: "pink-text-gradient",
      },
      
      {
        name: "ocr",
        color: "green-text-gradient",
      },
    ],
    image: ai,
    source_code_link: "https://github.com/SiddharthS15/gemini-medical-assistance",
    live_project_link: "https://gemini-medical-assistance.up.railway.app/",
    features: [
      "Chat with Gemini AI for medical queries",
      "Upload PDF reports for AI-powered summarization",
      "Recognize and extract text from images (OCR)",
      "Get clear, actionable outputs and summaries"
    ]
  },
  {
    name: "MediPredict AI",
    description:
      "AI-powered web application that helps users identify potential diseases based on selected symptoms. Built with Python Flask and machine learning (scikit-learn), the app features a modern responsive interface with dark/light themes where users can select symptoms from a comprehensive list and receive instant predictions with confidence scores, detailed disease descriptions, and helpful precautions.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: medipredict,
    source_code_link: "https://github.com/SiddharthS15/Disease_prediction_from_symptom",
    live_project_link: "https://web-production-7fc33.up.railway.app/",
  },
  {
    name: "Sorting Visualizer"  ,
    description:
      "The Sorting Visualizer is a web application that provides a visual representation of various sorting algorithms. It allows users to observe and understand how different sorting algorithms work by animating the sorting process.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: sortingvisualiser,
    source_code_link:
      "https://github.com/mohitrajput2002/sorting-visualizer-project.github.io.git",
    live_project_link: "https://sorting-visuallizer.netlify.app/",
  },
  {
    name: "Fashion Store",
    description:
      "The Fashion Store Web Application is a platform designed to facilitate the management and search for fashion products. It allows users to explore available fashion options, view details, and connect with potential sellers. Just buy the clothe (Men/Women). More functionalities coming soon.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: fashion,
    source_code_link: "https://github.com/SiddharthS15/E-com",
    live_project_link: "https://e-com-beta-orpin.vercel.app/index.html",
  },
];

export {
  services,
  technologies,
  experiences,
  projects,
  education,
};
