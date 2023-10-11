import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ScienceIcon from "@mui/icons-material/Science";
import GridViewIcon from "@mui/icons-material/GridView";
import DescriptionIcon from "@mui/icons-material/Description";
import PhoneIcon from "@mui/icons-material/Phone";

const Sidebar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <span
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      >
        <MenuIcon />
      </span>
      {nav ? (
        <div className="fixed w-full h-screen bg-[#353278] flex flex-col p-5 justify-center items-center z-20">
          <a
            href="#homepage"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <HomeIcon sx={{ fontSize: 30 }} />
            <span className="pl-4">Homepage</span>
          </a>
          <a
            href="#project"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <ScienceIcon sx={{ fontSize: 30 }} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GridViewIcon sx={{ fontSize: 30 }} />
            <span className="pl-4">Work</span>
          </a>
          <a
            href="resume"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <DescriptionIcon sx={{ fontSize: 30 }} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <PhoneIcon sx={{ fontSize: 30 }} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        <div></div>
      )}

      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#homepage"
            className="rounded-full shadow-lg shadow-gray-500 bg-[#353278] text-[white] m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150"
          >
            <HomeIcon sx={{ fontSize: 30 }} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg shadow-gray-500 bg-[#353278] text-[white] m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150"
          >
            <ScienceIcon sx={{ fontSize: 30 }} />
          </a>
          <a
            href="#work"
            className="rounded-full shadow-lg shadow-gray-500 bg-[#353278] text-[white] m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150"
          >
            <GridViewIcon sx={{ fontSize: 30 }} />
          </a>
          <a
            href="#resume"
            className="rounded-full shadow-lg shadow-gray-500 bg-[#353278] text-[white] m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150"
          >
            <DescriptionIcon sx={{ fontSize: 30 }} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg shadow-gray-500 bg-[#353278] text-[white] m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150"
          >
            <PhoneIcon sx={{ fontSize: 30 }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
