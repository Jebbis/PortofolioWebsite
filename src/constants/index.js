import { meta, laurea, tuusmet, rainmaker } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  pricewise,
  react,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },

  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },

  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },

  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Sales Manager",
    company_name: "Tuusmet",
    icon: tuusmet,
    iconBg: "#fbc3bc",
    date: "Apr 2018 - Jan 2024",
    points: [
      "Acted as the primary point of contact for named clients, ensuring their needs were met.",
      "Led multiple bigger and smaller projects.",
      "Developed solutions to enhance the work effiency using digital platforms.",
      "Managed all IT-related affairs.",
    ],
  },
  {
    title: "Team Leader",
    company_name: "Rainmaker",
    icon: rainmaker,
    iconBg: "#accbe1",
    date: "Sep 2017 - Mar 2018",
    points: [
      "Recruited and trained new sales personnel.",
      "Responsible for sales performance in my sales team.",
      "Assisted to plan sales campaigns.",
    ],
  },
];

export const schools = [
  {
    title: "Business Information Technology",
    company_name: "Laurea University of Applied Sciences",
    icon: laurea,
    iconBg: "#accbe1",
    date: "Aug 2021 - Present",
    points: [
      "Completed University of Helsinki MOOC Part 1+2 with Java.",
      "Other notable courses: Fullstack, SQL, RPA ",
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Jebbis",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/lasse-h%C3%A4m%C3%A4l%C3%A4inen-09b869181/",
  },
];

export const projects = [
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Notion Clone",
    description:
      "Built a clone of Notion, allowing users to create notes with many different features such as: Notion-style editor, Light and Dark mode, Infinite children documents, Trash can, Authentication, Full mobile responsiviness and many more.",
    link: "https://github.com/Jebbis/Notion",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Storage App",
    description:
      "Developed a web application which acts as a admin dashboard. Where user can create clients that can have storages and track the storages",
    link: "https://github.com/Jebbis/stroageapp",
  },

  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "3D Portfolio Website",
    description:
      "Made this awesome 3D portfolio website using a tutorial as a foundation and customized it to align with my visual preferences and aesthetic.",
    link: "https://github.com/Jebbis/PortofolioWebsite",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Tuusmet Oy - Website",
    description:
      "At my previous company, there was a significant demand for modern, up-to-date websites. I took the initiative to design and develop these websites independently and updated the visual branding on the website",
    link: "https://tuusmet.fi",
  },
];
