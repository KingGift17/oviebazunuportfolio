import React from "react";
import ProjectItem from "./items/ProjectItem";
import ecomWebsiteImg from "../assets/ecomHomepage.png";
import foodWebsiteImg from "../assets/koopaburger.png";
import portfolioImg from "../assets/portfoliohomepage.png";
import reactLogo from "../assets/React-icon.png";
import viteLogo from "../assets/vite-icon.png";
import firebaseLogo from "../assets/firebase-icon.png";
import fireauthLogo from "../assets/fireauth-icon.png";
import mui5Logo from "../assets/MUI5-icon.png";
import githubLogo from "../assets/GitHub-icon.png";
import vercelLogo from "../assets/vercel-icon.png";
import framerLogo from "../assets/framerMotion-icon.jpg";
import sassLogo from "../assets/Sass-icon.png";
import tailwindLogo from "../assets/tailwind-icon.png";

const projectData = [
  {
    title: "GiftKart",
    details:
      "A E-commerce site for buying and selling items. Built using Vite & React with the storage and authentication handled by Firebase and payment handled by Stripe ",
    frontEnd: "Vite, React, Sass, Redux, MUI",
    backEnd: "Firebase Authentication, Firebase Storage, Stripe",
    img: ecomWebsiteImg,
    websiteUrl: "https://giftkart.vercel.app",
    techStack: [
      {
        name: "React",
        logo: reactLogo,
      },
      {
        name: "Vite",
        logo: viteLogo,
      },
      {
        name: "Sass",
        logo: sassLogo,
      },
      {
        name: "MUI 5",
        logo: mui5Logo,
      },
      {
        name: "Firebase",
        logo: firebaseLogo,
      },
      {
        name: "Authentication",
        logo: fireauthLogo,
      },
      {
        name: "Github",
        logo: githubLogo,
      },
      {
        name: "Vercel",
        logo: vercelLogo,
      },
      {
        name: "Framer-Motion",
        logo: framerLogo,
      },
    ],
    design: [
      { color: "#9DC4B5" },
      { color: "#d6e5fb" },
      { color: "#ceebe9" },
      { color: "#e2f2b2" },
      { color: "#0a1d37" },
      { color: "#BAD9A2" },
      { color: "#484A39" },
    ],
  },
  {
    title: "Koopa Burgers",
    details: "A burger website created using vite & react along with MUI 5 ",
    frontEnd: "Vite, React, Sass, Redux, MUI",
    backEnd: "N/A",
    img: foodWebsiteImg,
    websiteUrl: "https://koopa-burgers.vercel.app",
    techStack: [
      {
        name: "React",
        logo: reactLogo,
      },
      {
        name: "Vite",
        logo: viteLogo,
      },
      {
        name: "MUI 5",
        logo: mui5Logo,
      },
      {
        name: "Github",
        logo: githubLogo,
      },
      {
        name: "Vercel",
        logo: vercelLogo,
      },
    ],
    design: [{ color: "#E78C49" }, { color: "#FFF" }, { color: "#121619" }],
  },
  {
    title: "Ovie G Bazunu Portfolio",
    details:
      "A portfolio for Ovie Bazunu detailing his projects, work timeline and employment information. Made using Vite with react along with tailwind css",
    frontEnd: "Vite, React, Tailwind, MUI",
    backEnd: "N/A",
    img: portfolioImg,
    websiteUrl: "https://oviebazunuportfolio.vercel.app",
    techStack: [
      { name: "React", logo: reactLogo },
      { name: "Vite", logo: viteLogo },
      { name: "Tailwind", logo: tailwindLogo },
      { name: "MUI 5", logo: mui5Logo },
      { name: "Github", logo: githubLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
    design: [
      { color: "#312854" },
      { color: "#343278" },
      { color: "#FFF" },
      { color: "#78716c" },
    ],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1540px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#353278]">
        Projects
      </h1>
      <p className="text-center text-base text-stone-700 py-8 ">
        The most recent projects which I have done. All of these projects range
        from using different parts of vite and react along with different tools
        for payment and authentication such as Firebase and Stripe.
      </p>
      <div className="py-6">
        {projectData.map((item, index) => (
          <ProjectItem
            key={index}
            title={item.title}
            details={item.details}
            frontEnd={item.frontEnd}
            backEnd={item.backEnd}
            image={item.img}
            websiteUrl={item.websiteUrl}
            techStack={item.techStack}
            design={item.design}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
