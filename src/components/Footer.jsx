import React from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import resume from "../../public/Ovie Bazunu CV.pdf";

const Footer = () => {
  return (
    <div id="contact" className="w-full bg-[#312854] md:pl-20">
      <div className="max-w-[1540px] mx-auto font-semibold mx-auto px-8 py-6 text-lg lg:grid lg:grid-cols-4 lg:gap-8 lg:py-8 lg:px-20 pb-10">
        <div className="pb-4 text-white lg:p-0">
          <h1 className="text-2xl py-2 underline">Portfolio</h1>
          <div className="text-base">Built by Ovie Bazunu</div>
        </div>
        <div className="pb-4 text-white lg:p-0">
          <h1 className="text-2xl py-2 underline">Live Websites</h1>
          <div className="text-base pb-2 hover:opacity-70">
            <a href="https://giftkart.vercel.app" target="_blank">
              GiftKart
            </a>
          </div>
          <div className="text-base pb-2 hover:opacity-70">
            <a href="https://koopa-burgers.vercel.app" target="_blank">
              Koopa Burgers
            </a>
          </div>
          <div className="text-base pb-2 hover:opacity-70">
            <a href="https://www.oviebazunu.com" target="_blank">
              Ovie Portfolio
            </a>
          </div>
        </div>
        <div className="pb-4 text-white lg:p-0">
          <h1 className="text-2xl py-2 underline">Others</h1>
          <div className="text-base pb-2 hover:opacity-70">
            <a
              href={resume}
              target="_blank"
              download="Ovie Bazunu CV.pdf"
              rel="noopener noreferrer"
              locale={false}
            >
              <DescriptionIcon sx={{ fontSize: 25, paddingRight: "4px" }} />
              Resume
            </a>
          </div>
          <div className="text-base pb-2 hover:opacity-70">
            <a href="https://github.com/oviebazunu" target="_blank">
              <GitHubIcon /> GitHub
            </a>
          </div>
        </div>
        <div className="pb-4 text-white lg:p-0">
          <h1 className="text-2xl py-2 underline">Contact Me</h1>
          <div className="text-base pb-2 hover:opacity-70">
            <a href="mailto:obaz1717@gmail.com">
              <EmailIcon /> Email
            </a>
          </div>
          <div className="text-base pb-2 hover:opacity-70">
            <a
              href="https://www.linkedin.com/in/ovie-g-bazunu/"
              target="_blank"
            >
              <LinkedInIcon /> Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
