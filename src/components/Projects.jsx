import React from "react";
import ProjectItem from "./items/ProjectItem";
import ecomWebsiteImg from "../assets/ecomHomepage.png";
import foodWebsiteImg from "../assets/koopaburger.png";
import portfolioImg from "../assets/portfoliohomepage.png";
import reactLogo from "../assets/React-icon.png";
import viteLogo from "../assets/vite-icon.png";

const projectData = [
  {
    title: "GiftKart",
    details: "A E-commerce site built using Vite & React ",
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
        name: "MUI 5",
        logo: viteLogo,
      },
      {
        name: "Firebase",
        logo: viteLogo,
      },
      {
        name: "Functions",
        logo: viteLogo,
      },
      {
        name: "Github",
        logo: viteLogo,
      },
      {
        name: "Vercel",
        logo: viteLogo,
      },
    ],
  },
  {
    title: "Koopa Burgers",
    details: "A E-commerce site built using Vite & React ",
    frontEnd: "Vite, React, Sass, Redux, MUI",
    backEnd: "Firebase Authentication, Firebase Storage, Stripe",
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
    ],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1540px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#353278]">
        Projects
      </h1>
      <p className="text-center py-8">
        The most recent projects which i have done. All of these projects range
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
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
