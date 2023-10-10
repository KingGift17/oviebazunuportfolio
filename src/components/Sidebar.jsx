import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ScienceIcon from "@mui/icons-material/Science";
import WorkIcon from "@mui/icons-material/Work";
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
            href="Homepage"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <HomeIcon size={20} />
            <span className="pl-4">Homepage</span>
          </a>
          <a
            href="Homepage"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <ScienceIcon size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            href="Homepage"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <WorkIcon size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            href="Homepage"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <DescriptionIcon size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            href="Homepage"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-200 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <PhoneIcon size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        <div>NOT HOME</div>
      )}

      <div className="md:block hidden fixed top-[25%] z-10">
        <div>
          <a href="Homepage" className="">
            <HomeIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
