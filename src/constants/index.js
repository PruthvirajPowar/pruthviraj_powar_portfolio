import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React.js, Flutter as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: " Identification Of Traffic Signal",
    image: project1,
    description:
      "Developed a deep learning-based Traffic Sign Recognition System for autonomous vehicles using CNN with TensorFlow and Keras. Trained on 50,000+ labeled images across 43 categories, achieving 95.66% accuracy through advanced image classification, data preprocessing, and augmentation. Implemented real-time inference and performance evaluation to enhance system reliability.",
    technologies: ["Deep Learning", "Python", "Flask", "HTML", "CSS"],
  },
  {
    title: " Expense Tracker Application",
    image: project2,
    description:
      "Developed a cross-platform expense tracking app using Flutter and Firebase, ensuring an intuitive user experience. Integrated Firebase Authentication for secure sign-ins and used Cloud Firestore for real-time data sync, improving app performance by 30%.",
    technologies: ["Flutter", "Firebase", "Firebase Authentication ", "Cloud Firestore"],
  },
  {
    title: "Inventory Management System",
    image: project4,
    description:
      "Developed a scalable MERN stack inventory management system for 200+ stock items and 50 suppliers. Implemented real-time stock tracking, automated reporting, and optimized MongoDB for a 25% improvement in order processing. Designed a user-friendly UI with React.js.",
    technologies: ["React.js", "Node.js ", "Express", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind", "HTML", "CSS",  "Bootstrap"],
  },
  
];

export const CONTACT = {
  address: "Peth Vadgaon, Kolhapur, Maharashtra",
  phoneNo: "+91 9356609350",
  email: "pruthvirajpowar75@gmail.com",
};
