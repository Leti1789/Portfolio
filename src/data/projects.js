import imgProject1 from '../assets/projects/Encriptador image.jpg';
import imgProject2 from '../assets/projects/space-app.jpg';
import imgProject3 from '../assets/projects/Dogs.jpg';
import imgProject4 from '../assets/projects/Countries.png';
import imgProject5 from '../assets/projects/AluraFlix2.jpg';
import imgProject6 from '../assets/projects/CiberZone.png';


const projects = [
  {
    title: "Encriptador",
    image: imgProject1,
    description:
      "Welcome to Text Encryptor, an app for exchanging secret messages in a fun and secure way.",
    skills: ["HTML", "CSS", "Javascript"],
    demo: "https://leti1789.github.io/Encriptador/",
    source: "https://www.github.com",
  },
  {
    title: "Space App",
    image: imgProject2,
    description:
      "Project carried out with the aim of putting into practice the React styled-components library.",
    skills: ["HTML", "CSS", "React"],
    demo: "https://space-app-gules-gamma.vercel.app/",
    source: "https://github.com/Leti1789/Space_App",
  },
  {
    title: "Dogs",
    image: imgProject3,
    description:
      "The application allows users to search, filter, sort, and create dog breeds, integrating data from TheDogAPI.",
    skills: ["React","Redux", "Express", "Node", "Sequelize", "PostgreSQL"],
    demo: "https://www.example.com",
    source: "https://github.com/Leti1789/PI-dogs",
  },
  {
    title: "Countries",
    image: imgProject4,
    description:
      "The app allows you to explore countries, create tour activities, and filter or sort countries by continent, population, and activities.",
    skills: ["React","Redux", "Express", "Node", "Sequelize", "PostgreSQL"],
    demo: "https://www.example.com",
    source: "https://github.com/Leti1789/countries",
  },
  {
    title: "AluraFlix",
    image: imgProject5,
    description:
      "The project integrates functional components, hooks, contexts, and React Router to create a Single Page Application (SPA).",
    skills: ["HTML","CSS","React", "React Router"],
    demo: "https://www.example.com",
    source: "https://github.com/Leti1789/AluraFlix",
  },

  {
    title: "CiberZone",
    image: imgProject6,
    description:
      "Computer sales e-commerce site. 100% functional",
    skills: ["MongoDB", "Mongoose", "Typescript", "Javascript", "React", "Node", "Redux", "Express", "CSS", "Tailwind"],
    demo: "https://www.example.com",
    source: "https://github.com/chechesk/CyberZon3",
  },




];

export{projects}