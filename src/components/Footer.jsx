import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#312854]">
      <div className="font-semibold mx-auto max-w-screen-xl px-8 py-6 text-lg lg:grid lg:grid-cols-4 lg:gap-8 lg:py-8 lg:px-20">
        <div className="pb-4 text-white lg:p-0">
          <h1 className="text-2xl py-2">Portfolio</h1>
          <div className="text-base">Built by Ovie Bazunu</div>
        </div>
        <div className="pb-4 text-white lg:p-0">
          <h1 className="text-2xl py-2">Live Websites</h1>
          <div className="text-base">GiftKart</div>
        </div>
        <div className="pb-4 text-white lg:p-0">Resumes</div>
        <div className="pb-4 text-white lg:p-0">Name</div>
      </div>
    </div>
  );
};

export default Footer;
