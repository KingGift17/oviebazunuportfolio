import React from "react";
import { TypeAnimation } from "react-type-animation";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div id="homepage">
      <div className="w-full h-screen object-cover object-left">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm: text-5xl text-4xl font-bold text-gray-800">
            Ovie G Bazunu Portfolio
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            <TypeAnimation
              sequence={[
                "I'm a Front-End Developer",
                2000,
                "I'm a Programmer",
                2000,
                "I'm a Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={40}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>
          <div>
            <a href="https://github.com/KingGift17" target="_blank">
              <GitHubIcon sx={{ fontSize: 30, cursor: "pointer" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/ovie-g-bazunu/"
              target="_blank"
            >
              <LinkedInIcon sx={{ fontSize: 30, cursor: "pointer" }} />
            </a>
            <InstagramIcon sx={{ fontSize: 30, cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
