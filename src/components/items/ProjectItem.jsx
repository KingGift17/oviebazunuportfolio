import React from "react";

const ProjectItem = ({
  title,
  details,
  frontEnd,
  backEnd,
  image,
  websiteUrl,
  techStack,
  design,
}) => {
  return (
    <>
      <div class="lg:wrap pt-10 lg:flex mt-[40px]">
        <div>
          <a
            className="border-b-4 border-b-[#312854] text-3xl font-bold hover:opacity-70 text-[#353278]"
            href={websiteUrl}
            target="_blank"
          >
            <span>{title}</span>
          </a>
          <p className="pt-5 text-base text-stone-700">{details}</p>
          <h2 className="text-xl font-semibold text-[#312854]">Front End</h2>
          <p className="text-base text-stone-700">{frontEnd}</p>
          <h2 className="text-xl font-semibold text-[#312854]">Back End</h2>
          <p className="pb-4 text-base text-stone-700">{backEnd}</p>
          <a
            className="inline-block text-base px-2 py-1 font-semibold text-white bg-[#312854] hover:opacity-70 rounded-md mb-4"
            href={websiteUrl}
            target="_blank"
          >
            Visit Website
          </a>
        </div>
        <div className="mb-5 h-fit border object-contain shadow-md lg:w-6/12 ml-auto">
          <img src={image} alt={title} className="w-full object-cover" />
        </div>
      </div>
      <div>
        <h1 className="max-w-fit border-b-4 border-b-[#312854] text-2xl font-bold text-[#343278]">
          Technology Stack
        </h1>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-item flex flex-col items-center">
              <img src={tech.logo} alt={tech.name} className="w-16 h-16 mt-4" />
              <p className="mt-4 text-center font-bold text-stone-700">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="max-w-fit border-b-4 border-b-[#312854] text-2xl font-bold text-[#343278] mt-12">
          Design
        </h1>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {design.map((color, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                style={{
                  backgroundColor: color.color,
                  marginTop: "20px",
                  boxShadow: "2px 2px 5px rgba(0,0,0,0.4)",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                }}
              ></div>
              <p className="mt-4 text-center font-bold text-stone-700">
                {color.color}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
