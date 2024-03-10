import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FigmaIcon, GithubIcon } from "@/components/Icons";
import { motion, useMotionValue } from "framer-motion";
import Transition from "@/components/Transition";
// img import
import kecsite from "../../public/images/projects/kec.png";
import inventory_Figma from "../../public/images/projects/inventory_Figma.png";
import pyGame from "../../public/images/projects/pyGame.png";
import inventoryweb from "../../public/images/projects/inventoryweb.png";
import cocopure from "../../public/images/projects/cocopure.png";
import mescia from "../../public/images/projects/mescia23.png";
import ps from "../../public/images/projects/ps.png";

const FramerImage = motion(Image);

const FeatureProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full relative flex items-center justify-between rounded-br-2xl rounded-2xl border 
    border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark
       dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-Width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:pl-0 lg:pt-6 lg:w-full">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-1"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10 ">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light border border-solid hover:bg-light
             hover:text-dark hover:border-dark hover:dark:border-light hover:dark:bg-dark
              hover:dark:text-light dark:text-dark dark:bg-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ type, title, img, link, github, icon }) => {
  return (
    <article className="relative w-full flex flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-light p-6 dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between">
        <span
          className="text-primary dark:text-primaryDark font-medium text-xl
         lg:text-lg md:text-base mt-2"
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-1"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className={`text-lg font-semibold underline md:text-base ${icon}`}
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-9 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
const FigmaProject = ({ type, title, img, link, github }) => {
  return (
    <article className="relative w-full flex flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-light p-6 dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between">
        <span
          className="text-primary dark:text-primaryDark font-medium text-xl
         lg:text-lg md:text-base mt-2"
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-1"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-9 md:w-6">
            <FigmaIcon className="dark:bg-white dark:rounded-xl dark:p-[1px]" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const DesignProject = ({ img, title, date, link }) => {
  return (
    <>
      <motion.li
        initial={{ y: 200 }}
        whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        viewport={{ once: true }}
        className="relative w-full p-4 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-black
         dark:text-light text-dark border-solid border-dark dark:border-light 
         border border-r-8 border-b-8 sm:flex-col"
      >
        <MovingImg title={title} img={img} link={link} />
        <span className="text-primary dark:text-primaryDark pl-4 text-xl xs:text-base sm:m-2 text-left sm:pl-0">
          {date}
        </span>
      </motion.li>
    </>
  );
};
const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize w-full text-left text-4xl font-bold lg:text-2xl underline hover:underline-offset-1">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        src={img}
        alt={title}
        ref={imgRef}
        className="z-10 w-96 h-auto hidden absolute rounded-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
      />
    </Link>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Sridhar | Project Page</title>
        <meta name="Sridhar project" content="Sridhar's Project Page..." />
      </Head>
      <Transition />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            text={"Imagination Trumps Knowledge!"}
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeatureProject
                title="Kongu Engineering College (KEC) Website"
                summary="Revamp the KEC website to enhance its functionality, 
                aesthetics, and user experience. Focus on improving navigation, 
                updating content, and implementing modern design elements."
                link="https://sri-kec.netlify.app/"
                github="https://github.com/srikumar03/KECSite"
                type="Web Project"
                img={kecsite}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <FigmaProject
                title="UI for Inventory Management Application"
                link="https://www.figma.com/proto/ZY2YixnkVDNGsshOkK0CFL/Innoventry-Sri-(Community)?page-id=0%3A1&type=design&node-id=2-2&viewport=489%2C419%2C0.25&t=4IVPg3HFy7B9N7S6-1&scaling=scale-down&starting-point-node-id=2%3A2&show-proto-sidebar=1&mode=design"
                github="https://www.figma.com/file/ZY2YixnkVDNGsshOkK0CFL/Innoventry-Sri-(Community)?type=design&node-id=0%3A1&mode=design&t=QGUNwwycWi6K89q5-1"
                type="Figma Design"
                img={inventory_Figma}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Rock Paper Scissor Game using Python"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
page transitions, cool background effects, unique design and it is mobile responsive"
                link="/"
                github="https://github.com/srikumar03/Rock_Paper_Scissor"
                type="Python Project"
                img={pyGame}
                icon={"hidden"}
              />
            </div>
            <div className="col-span-12">
              {" "}
              <FeatureProject
                title="Inventory Management System"
                summary="PHP and MySQL-based Inventory Management System for streamlined control, real-time tracking, and secure data storage, ensuring efficient stock and resource management."
                link="https://sri-inventory.000webhostapp.com/"
                github="https://github.com/srikumar03/Inventory_app"
                type="Web Project"
                img={inventoryweb}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Cocopure WebPage"
                link="https://srikumar03.github.io/cocopure/"
                github="https://github.com/srikumar03/cocopure"
                type="web Project"
                img={cocopure}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="MeSCia Event Website "
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
page transitions, cool background effects, unique design and it is mobile responsive"
                link="https://mescia2k23.netlify.app/"
                github="https://github.com/srikumar03/MESCIA_2023"
                type="Web Project"
                img={mescia}
              />
            </div>

            <div className="col-span-12">
              {" "}
              <DesignProject
                title="Some Graphic Compositions"
                date="Digital Creations"
                link="https://drive.google.com/drive/u/6/folders/1JfJbk1GRfjeOdV8gnw1gUZX_xKAlNyjg"
                img={ps}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
