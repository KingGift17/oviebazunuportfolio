import React from "react";
import GridView from "@mui/icons-material/GridView";
import WorkItem from "./items/WorkItem";

const data = [
  {
    company: "Lloyds Pharmacy",
    title: "Dispenser",
    duration: "1 year 6 months",
    details:
      "Provided emotional and physical support, tailoring solutions and supplying OTC medication to suit the patients needs, developing my customer service skills and interpersonal communication receiving positive feedback from both my line manager (pharmacist) and customer. Demonstrated an eye for detail ensuring products were always fully replenished and giving customers maximum legal choice. Now able to perform 1 on 1 consultations on private matters. Able to file and spreadsheet important stock information daily using Excel. Full understanding of SOPs and correct procedures needed in a pharmacy.",
  },
  {
    company: "Safys Chemist",
    title: "Dispenser",
    duration: "2 years",
    details:
      "Enhancing the way our pharmacy handles deliveries I am able to develop shortcuts/time savers in order to increase our efficiency. I was able to deduce that our 24/7hour prescription machine which was broken by running tests of my own discovering that we had been losing out on about 10% of our paying patients because of an exploit. Accurately being able to label and dispense over 700 items per day while having high customer satisfaction with counter queries. Taught a new member of staff the spreadsheets, delivery and 24/7 system in an understandable manner.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1840px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#353278]">Work</h1>
      {data.map((item, index) => (
        <WorkItem
          key={index}
          company={item.company}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
