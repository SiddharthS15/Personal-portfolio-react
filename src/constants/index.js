import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  html,
  css,
  reactjs,
  ubuntu,
  tailwind,
  mysql,
  linux,
  git,
  xavier,
  oist,
  aicte,
  cp,
  canspirit,
  linkedin,
  hackerrank,
  karate,
  portfolio,
  pglife,
  sortingvisualiser,
  aws,
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
    id: "extracurricular",
    title: "Extracurricular",
  },
  {
    id: "skills",
    title: "Skills",
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
  {
    name: "Java",
    icon: java,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Ubuntu",
    icon: ubuntu,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
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

const extracurricular = [
  {
    title: "1.5K+ Connections on LinkedIn",
    type: "Achievements",
    icon: linkedin,
    iconBg: "#007BB5",
    date: "April 2023",
    points: ["Credential ID: mohitsinghrajput"],
    credential: "https://www.linkedin.com/in/mohitsinghrajput/",
  },
  {
    title: "Java (Basic), CSS, SQL (Basic)-HackerRank",
    type: "Certification",
    icon: hackerrank,
    iconBg: "#050C18",
    date: "2022-2023",
    points: [
      "Credential ID: aac000e38dc9",
      "Credential ID: a274bb1292eb",
      "Credential ID: b024370fa737",
    ],
    credential: "https://www.hackerrank.com/certificates/aac000e38dc9",
  },
  // {
  //   title: "Web Development-Internshala",
  //   type: "Certification",
  //   icon: internshala,
  //   iconBg: "#1294C8",
  //   date: "Sept 2021",
  //   points: ["Credential ID: 281DB109-2DA8-A160-DCBC-C6C0F552B57C"],
  //   credential:
  //     "https://trainings.internshala.com/verify-certificate/?certificate_number=281DB109-2DA8-A160-DCBC-C6C0F552B57C",
  // },
  {
    title: "Combat Sport-Karate",
    type: "Extracurricular(Hobby)/Combat Sport",
    icon: karate,
    iconBg: "#CCCFD8",
    date: "2006-2020",
    points: [
      "State level Gold medalist in Kumite.",
      "Renshi Cup National Championship Bronze medalist in Kumite.",
    ],
  },
];

const projects = [
  {
    name: "3D Portfolio",
    description:
      "Web Portfolio in React JS which uses 3D graphics and animations to bring the content to life. The website is divided into several main sections, including an about, Education, project, connect and contact section. Each section is designed to showcase 3D's unique style and creativity, with an emphasis on interactivity and user engagement.",
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
        name: "framer-motion",
        color: "pink-text-gradient",
      },
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/mohitrajput2002/my-portfolio",
    live_project_link: "https://mohit-singh-rajput.vercel.app/",
  },
  {
    name: "PG Life",
    description:
      "The PG-Life Web Application is a platform designed to facilitate the management and search for Paying Guest (PG) accommodations. It allows users to explore available PG options, view details, and connect with potential landlords or tenants.",
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
    image: pglife,
    source_code_link: "https://github.com/mohitrajput2002/PG_Life",
    live_project_link: "https://github.com/mohitrajput2002/PG_Life",
  },
  {
    name: "Sorting Visualizer",
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
];

export {
  services,
  technologies,
  experiences,
  extracurricular,
  projects,
  education,
};
