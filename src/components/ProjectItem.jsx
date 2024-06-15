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
  const firstColor = design.length > 0 ? design[0].color : "#312854";

  return (
    <>
      <div className="h-6 mt-8" style={{ backgroundColor: firstColor }}></div>
      <div className="lg:wrap pt-10 lg:flex mt-[40px]">
        <div className="lg:flex lg:w-full">
          <div className="lg:w-6/12">
            <a
              className="border-b-4 text-3xl font-bold hover:opacity-70"
              href={websiteUrl}
              target="_blank"
              style={{ borderBottomColor: firstColor, color: firstColor }}
            >
              <span>{title}</span>
            </a>
            <p className="pt-5 text-base text-stone-700">{details}</p>
            <h2 className="text-xl font-semibold" style={{ color: firstColor }}>
              Front End
            </h2>
            <p className="text-base text-stone-700">{frontEnd}</p>
            <h2 className="text-xl font-semibold" style={{ color: firstColor }}>
              Back End
            </h2>
            <p className="pb-4 text-base text-stone-700">{backEnd}</p>
            <a
              className="inline-block text-base px-2 py-1 font-semibold text-white hover:scale-110 ease-in duration-200 rounded-md mb-4"
              href={websiteUrl}
              target="_blank"
              style={{ backgroundColor: firstColor }}
            >
              Visit Website
            </a>
          </div>
          <div className="mb-5 h-fit border object-contain shadow-md lg:w-6/12 ml-auto">
            <img src={image} alt={title} className="w-full object-cover" />
          </div>
        </div>
      </div>
      <div>
        <h1
          className="max-w-fit border-b-4 text-2xl font-bold mt-12"
          style={{ borderBottomColor: firstColor, color: firstColor }}
        >
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
        <h1
          className="max-w-fit border-b-4 text-2xl font-bold mt-12"
          style={{ borderBottomColor: firstColor, color: firstColor }}
        >
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
