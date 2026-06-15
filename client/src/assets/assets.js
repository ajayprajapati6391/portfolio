import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaNodeJs,
  FaStripe,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaCloud,
  FaRobot,
} from "react-icons/fa";
import profileImg from "../assets/profile.jpeg";
import cd from "../assets/cd.jfif";
import library from "../assets/library.png";
import age from "../assets/age.webp";
import sarkari from "../assets/sarkari.jfif";
import todo from "../assets/todo.webp";
import weather from "../assets/weather.png";

export const assets = {
  profileImg,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I love creating unique solutions to complex problems with cutting-edge technologies.",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "Beautiful design and user experience are at the heart of everything I create.",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write maintainable, efficient code following best practices and modern patterns.",
  },
];

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: ["Html", "Css", "JavaScript", "React"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Creating robust server-side applications and RESTful APIs.",
    tags: ["Node.js", "Express"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["MongoDB"],
  },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I use in my development workflow.",
    tags: ["Git & GitHub", "Ms office", "Vs Code"],
  },
];

export const projects = [
  {
    title: "CD/DVD Rental System",
    description:
      "A web-based rental management system for CDs and DVDs with user authentication, inventory management, and rental tracking features.",
    image: cd,
    tech: ["React", "Node.js", "Express", "MongoDB"],
    demo: "#",
    code: "https://github.com/ajayprajapati6391/cd-dvd-rental-systems",
  },
  {
    title: "Library Management System",
    description:
      "A full-stack MERN application to manage books, users, and borrowing records with authentication, admin dashboard, and real-time database operations.",
    image: library,
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    demo: "#",
    code: "https://github.com/ajayprajapati6391/Library-management-system",
  },
  {
    title: "To-Do List Application",
    description:
      "A simple productivity app to create, update, delete, and organize daily tasks with user authentication and persistent storage.",
    image: todo,
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    demo: "#",
    code: "https://github.com/ajayprajapati6391/To-do-List",
  },
  {
    title: "Age Calculator",
    description:
      "A simple web application built using HTML, CSS, and JavaScript to calculate age based on date of birth input.",
    image: age,
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://sage-froyo-18ac69.netlify.app/",
    code: "https://github.com/ajayprajapati6391/Calulator",
  },
  {
    title: "Sarkari Result Clone",
    description:
      "A static website clone of Sarkari Result built using HTML and CSS, focusing on layout design and responsive structure.",
    image: sarkari,
    tech: ["HTML", "CSS"],
    demo: "https://flourishing-zabaione-c36bf0.netlify.app/",
    code: "https://github.com/ajayprajapati6391/sarkariresult",
  },
  {
    title: "Weather App",
    description:
      "A responsive weather application that displays real-time weather data using a weather API. Users can search any city and view temperature, humidity, wind speed, and forecasts.",
    image: weather,
    tech: ["React", "Weather API", "Tailwind CSS"],
    demo: "https://currentweatherap.netlify.app/",
    code: "https://github.com/ajayprajapati6391/weather-app",
  },
];
