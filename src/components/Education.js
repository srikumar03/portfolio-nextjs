import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon referance={ref} />
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }}>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 md:my-14 md:mb-52">
      <h2 className="font-bold text-7xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] lg:w-[90%] md:w-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] bg-dark dark:bg-light origin-top h-full md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4  xs:ml-2">
          <Details
            type="Master Of Science in Software Systems (Integrated)"
            time="2020-2025"
            place="Kongu Engineering College (KEC),Perundurai , Erode"
            into="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence"
          />
          <Details
            type="High School Certificate"
            time="2019-2020"
            place="Sri Sankara Vidhyasala Matric Higher Secondary School,Sivagiri"
          />
          <Details
            type="Secondary School Leaving Certificate"
            time="2017-2018"
            place="Sri Sankara Vidhyasala Matric Higher Secondary School,Sivagiri"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
