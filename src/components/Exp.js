import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon referance={ref} />
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }}>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Exp = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 md:mt-14 md:mb-20">
      <h2 className="font-bold text-7xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] lg:w-[90%] md:w-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] bg-dark origin-top h-full dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Intern"
            company="Idot"
            companyLink="https:\\idotinc.in"
            time=" 2022-2024 "
            address=" Perundurai, Erode"
            work="Worked on a team responsible for developing a new Web app feature, including designing and implementing a new user interface and developing 
the backend infrastructure to support the feature"
          />
        </ul>
      </div>
    </div>
  );
};

export default Exp;
