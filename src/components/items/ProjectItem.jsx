import React from "react";

const ProjectItem = ({
  title,
  details,
  frontEnd,
  backEnd,
  image,
  websiteUrl,
}) => {
  return (
    <>
      <div class="lg:wrap pt-10 lg:flex">
        <div>
          <a
            className="border-b-4 border-b-[#312854] text-2xl font-bold hover:opacity-70 text-[#353278]"
            href={websiteUrl}
            target="_blank"
          >
            <span>{title}</span>
          </a>
          <p className="pt-5 text-sm">{details}</p>
          <h2 className="text-base font-semibold text-[#312854]">Front End</h2>
          <p className="text-sm">{frontEnd}</p>
          <h2 className="text-base font-semibold text-[#312854]">Back End</h2>
          <p className="pb-4">{backEnd}</p>
          <a
            className="inline-block px-2 py-1 font-semibold text-white bg-[#312854] hover:opacity-70 rounded-md mb-2"
            href={websiteUrl}
            target="_blank"
          >
            Vist Website
          </a>
        </div>
        <div className="mb-5 h-fit border object-contain shadow-md lg:w-6/12 ml-auto">
          <img width="2600" height="1710" src={image} alt={title} />
        </div>
      </div>
      <div>
        <h1 className="max-w-fit border-b-4 border-b-[#312854] text-2xl font-bold text-[#343278]">
          Technology Stack
        </h1>
      </div>
    </>
  );
};

export default ProjectItem;
