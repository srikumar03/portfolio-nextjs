import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  pdflink,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-left justify-between"
    >
      <LiIcon referance={ref} />
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }}>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          <Link href={pdflink} target="_blank">
            {position}&nbsp;
          </Link>
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
            position="Full Stack Developer Intern"
            pdflink="/cartrabbit.pdf"
            company="Cartrabbit"
            companyLink="https://cartrabbit.io/"
            time=" 2024-Present "
            address="Coimbatore"
            work="Contributed to SaaS product development with a focus on full-stack capabilities, developed WooCommerce plugins and WordPress add-ons, and resolved customer tickets by providing efficient technical solutions."
          />
        </ul>
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Front End Developer Intern"
            pdflink="/Idotinc_Intern.pdf"
            company="Idot"
            companyLink="https:\\idotinc.in"
            time=" 2022-2023 "
            address=" Perundurai, Erode"
            work="Worked on designing and implementing a user interface for a web application and enhancing the performance and responsiveness of front-end components for a seamless user experience."
          />
        </ul>
      </div>
    </div>
  );
};

export default Exp;
