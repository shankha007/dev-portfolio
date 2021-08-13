import { RiComputerLine } from "react-icons/ri";
import { FaServer, FaChalkboardTeacher } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, IService, ISkill } from "./type";
import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build Beautiful and Scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend Development",
    about:
      "Handle Database, Server, API using <b>Express </b> & other popular Frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "I can develop Robust REST API using <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "A Daily Problem Solver in <b>HackerRank</b> and <b>CodeChef</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX Designer",
    about:
      "Stunning User Interface Designer using <b>Figma</b> and <b>Framer</b> ",
  },
  {
    Icon: FaChalkboardTeacher,
    title: "Teaching",
    about: "Professionally Teach Computer Languages, DS & Algo, Web-Dev",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Java",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Javascript",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Angular",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "Semantic UI",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "MySQL",
    level: "70",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Lightroom",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: IProject[] = [
  {
    id: 0,
    name: "Weather App",
    description:
      "This app will show you the weather of any location in the world at that particular time.",
    image_path: "/images/Weather.PNG",
    deployed_url: "https://shankha-weather-app.herokuapp.com/",
    github_url: "https://github.com/shankha007/weatherapp-web-server",
    category: ["javascript", "node"],
    key_techs: ["Node", "Handlebars", "Weather-API"],
  },
  {
    id: 1,
    name: "Burger Builder App",
    description:
      "In this web-app you can build your favorite burger and order it from some imaginary place.",
    image_path: "/images/Burger.PNG",
    deployed_url: "https://react-my-burger-ac061.web.app/",
    github_url: "https://github.com/shankha007/full-react-course",
    category: ["react"],
    key_techs: ["React", "Firebase", "CSS"],
  },
  {
    id: 2,
    name: "Dev Portfolio",
    image_path: "/images/Portfolio.PNG",
    deployed_url: "https://shankha-portfolio.vercel.app/",
    github_url: "https://github.com/shankha007/dev-portfolio",
    category: ["react", "next"],
    description:
      "It is a web app which is kind of a resume of a developer. It hold the details about the person, his/ her resume and projects.",
    key_techs: ["React", "Next", "Framer", "Tailwind CSS"],
  },

  {
    id: 3,
    name: "Anonymous Message App",
    image_path: "/images/Curiousmsg.PNG",
    deployed_url: "https://curious-bat.firebaseapp.com/",
    github_url: "https://github.com/BeingRitam/CuriousmsgApp",
    category: ["angular", "java"],
    description:
      "This website is to send messages to a person anonymously. You can send any kind of proposal to a person without revealing your identity.",
    key_techs: ["Angular", "Java", "Semantic UI"],
  },
  {
    id: 4,
    name: "Notes App",
    image_path: "/images/Notes.jpg",
    deployed_url: "https://www.google.com/",
    github_url: "https://github.com/shankha007/notes-app",
    category: ["node", "javascript"],
    description:
      "It is a console app using which you can create, update and delete notes.",
    key_techs: ["Node", "Chalk", "Yargs"],
  },
  {
    id: 5,
    name: "Expense Tracker App",
    image_path: "/images/Expense.PNG",
    deployed_url: "https://www.google.com/",
    github_url: "https://github.com/shankha007/expense-tracking-app",
    category: ["react"],
    description:
      "It is a web app which can track your expenses of every months and years.",
    key_techs: ["React", "HTML", "CSS"],
  },
  {
    id: 6,
    name: "Task Manager App",
    image_path: "/images/Task.PNG",
    deployed_url: "https://www.google.com/",
    github_url: "https://github.com/shankha007/task-manager-app",
    category: ["react"],
    description: "It is a web app using which you can create and delete tasks.",
    key_techs: ["React", "HTML", "CSS"],
  },
];
