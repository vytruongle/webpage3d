import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constant";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }: { experience: any }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="text-white text-[24px] font-bold">
        {experience.title}
        <p className="text-secondary text-[16px] font-semibold m-0">
          {experience.company_name}
        </p>
        <img
          src={experience.image}
          alt={experience.image}
          className="w-full h-full rounded-lg object-contain my-4 hover:scale-110 hover:duration-500 transition-all duration-500"
        />
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point: string, id: number) => {
            return (
              <li
                key={`experience-point-${id}`}
                className="text-white-100 text-[14px] pl-1 tracking-wider"
              >
                {point}
              </li>
            );
          })}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div id="project">
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Project.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, id) => {
            return <ExperienceCard key={id} experience={experience} />;
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "Experience");
