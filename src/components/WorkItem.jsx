import React from "react";

const WorkItem = ({ duration, company, title, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-[#2D1E2F]">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-[#2D1E2F] rounded-full mt-1.5 -left-1.5 border white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#312854] rounded-md">
            {company}
          </span>
          <span className="text-lg font-semibold text-[#312854]">{title}</span>
          <span className="ml-auto my-1 text-sm font-normal leading-none text-stone-500 pr-7">
            {duration}
          </span>
        </p>
        <p className="my-2 text-base font-normal text-stone-700">{details}</p>
      </li>
    </ol>
  );
};

export default WorkItem;
