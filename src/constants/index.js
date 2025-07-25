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
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
  cert7,
  cert8,
  cert9,
  cert10,
  cert11,
  cert12,
  cert13,
  cert14,
  cert15,
  cert16,
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
    id: "certifications",
    title: "Certifications",
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

const certifications = [
  {
    title: "Java (Basic) - HackerRank",
    issuer: "HackerRank",
    icon: cert1,
    iconBg: "#00EA64",
    date: "2023",
    points: ["Credential ID: aac000e38dc9"],
    credential: "https://www.hackerrank.com/certificates/aac000e38dc9",
  },
  {
    title: "CSS - HackerRank",
    issuer: "HackerRank",
    icon: cert2,
    iconBg: "#00EA64",
    date: "2023",
    points: ["Credential ID: a274bb1292eb"],
    credential: "https://www.hackerrank.com/certificates/a274bb1292eb",
  },
  {
    title: "SQL (Basic) - HackerRank",
    issuer: "HackerRank",
    icon: cert3,
    iconBg: "#00EA64",
    date: "2022",
    points: ["Credential ID: b024370fa737"],
    credential: "https://www.hackerrank.com/certificates/b024370fa737",
  },
  {
    title: "Web Development - Internshala",
    issuer: "Internshala",
    icon: cert4,
    iconBg: "#1294C8",
    date: "Sept 2021",
    points: ["Credential ID: 281DB109-2DA8-A160-DCBC-C6C0F552B57C"],
    credential: "https://trainings.internshala.com/verify-certificate/?certificate_number=281DB109-2DA8-A160-DCBC-C6C0F552B57C",
  },
  {
    title: "React.js Fundamentals",
    issuer: "Coursera",
    icon: cert5,
    iconBg: "#0056D3",
    date: "2024",
    points: ["Advanced React concepts and component lifecycle"],
    credential: "#",
  },
  {
    title: "JavaScript ES6+ Mastery",
    issuer: "Udemy",
    icon: cert6,
    iconBg: "#A435F0",
    date: "2024",
    points: ["Modern JavaScript features and best practices"],
    credential: "#",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: cert7,
    iconBg: "#FF9900",
    date: "2024",
    points: ["Cloud computing fundamentals and AWS services"],
    credential: "#",
  },
  {
    title: "Python Programming",
    issuer: "CodeAcademy",
    icon: cert8,
    iconBg: "#347AB7",
    date: "2023",
    points: ["Python fundamentals and data structures"],
    credential: "#",
  },
  {
    title: "Node.js Backend Development",
    issuer: "freeCodeCamp",
    icon: cert9,
    iconBg: "#0A0A23",
    date: "2024",
    points: ["Server-side JavaScript and API development"],
    credential: "#",
  },
  {
    title: "Database Management with MySQL",
    issuer: "Oracle",
    icon: cert10,
    iconBg: "#F80000",
    date: "2023",
    points: ["Database design and SQL optimization"],
    credential: "#",
  },
  {
    title: "Git & GitHub Mastery",
    issuer: "GitHub",
    icon: cert11,
    iconBg: "#181717",
    date: "2023",
    points: ["Version control and collaborative development"],
    credential: "#",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    icon: cert12,
    iconBg: "#0A0A23",
    date: "2022",
    points: ["HTML, CSS, and mobile-first design principles"],
    credential: "#",
  },
  {
    title: "Tailwind CSS Framework",
    issuer: "Tailwind Labs",
    icon: cert13,
    iconBg: "#06B6D4",
    date: "2024",
    points: ["Utility-first CSS framework mastery"],
    credential: "#",
  },
  {
    title: "Three.js 3D Graphics",
    issuer: "Three.js Academy",
    icon: cert14,
    iconBg: "#000000",
    date: "2024",
    points: ["3D web graphics and animations"],
    credential: "#",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "LeetCode",
    icon: cert15,
    iconBg: "#FFA116",
    date: "2023",
    points: ["Problem-solving and algorithmic thinking"],
    credential: "#",
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM",
    icon: cert16,
    iconBg: "#1261FE",
    date: "2024",
    points: ["Information security and ethical hacking basics"],
    credential: "#",
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
  certifications,
  projects,
  education,
};
