import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Transition from "@/components/Transition";

const Project = ({ type }) => {
  return (
    <article className="relative w-full flex flex-col items-center justify-between rounded-md border border-solid border-dark bg-light p-1 dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-[3px] -z-10 w-[99%] h-[100%] rounded-md bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-lg xs:-right-1" />

      <div className="w-full flex flex-col items-start justify-between">
        <div className="flex items-center justify-center w-full">
          <div className="text-lg font-semibold md:text-base p-1">{type}</div>
          {/* <Link href="#" target="_blank" className="w-9 md:w-6">
            <GithubIcon />
          </Link> */}
        </div>
      </div>
    </article>
  );
};

const skills = () => {
  return (
    <>
      <Head>
        <title>Sridhar | Skills</title>
        <meta name="bla bla bla" content="bla bla..." />
      </Head>
      <Transition />

      <main className="w-full mb-1 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 z-10 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            text={"Skills Unleashed, Expertise Evolved!"}
          />
          <div className="mb-10 border p-5 rounded-md border-slate-300 backdrop-blur-sm shadow-slate-200 dark:shadow-slate-700 shadow-md">
            <h2 className="mb-4 underline-offset-2 underline text-lg font-bold uppercase text-dark/75 dark:text-light/70 flex">
              Frontend Languages
            </h2>
            <div className="flex items-center justify-center flex-wrap">
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                {" "}
                <Project type="HTML5" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                <Project type="CSS3" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                <Project type="Bootstrap" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                <Project type="Tailwind" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                <Project type="JavaScript" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                <Project type="TypeScript" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                <Project type="Reactjs" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                <Project type="Nextjs" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                <Project type="Angularjs" />
              </motion.div>
            </div>
          </div>

          <div className="mb-10 border p-5 rounded-md border-slate-300 backdrop-blur-sm shadow-slate-200 dark:shadow-slate-700 shadow-md">
            <h2 className="mb-4 underline-offset-2 underline text-lg font-bold uppercase text-dark/75 dark:text-light/70 flex">
              Backend Languages
            </h2>
            <div className="flex items-center justify-center flex-wrap">
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                {" "}
                <Project type="MySQL" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                {" "}
                <Project type="PHP" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                <Project type="Node.js" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                <Project type="Express.js" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                <Project type="MongoDB" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                <Project type="Firebase" />
              </motion.div>
            </div>
          </div>
          <div className="mb-10 border p-5 rounded-md border-slate-300 backdrop-blur-sm shadow-slate-200 dark:shadow-slate-700 shadow-md">
            <h2 className="mb-4 underline-offset-2 underline text-lg font-bold uppercase text-dark/75 dark:text-light/70 flex">
              Programming Languages
            </h2>
            <div className="flex items-center justify-center flex-wrap">
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                {" "}
                <Project type="C" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                {" "}
                <Project type="C++" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                {" "}
                <Project type="Java" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                <Project type="Python" />
              </motion.div>
            </div>
          </div>
          <div className=" border p-5 rounded-md border-slate-300 backdrop-blur-sm shadow-slate-200 dark:shadow-slate-700 shadow-md">
            <h2 className="mb-4 underline-offset-2 underline text-lg font-bold uppercase text-dark/75 dark:text-light/70 flex">
              Tool Stack
            </h2>
            <div className="flex items-center justify-center flex-wrap">
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                {" "}
                <Project type="Figma" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                {" "}
                <Project type="Adobe Photoshop" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                {" "}
                <Project type="Git" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                {" "}
                <Project type="Postman" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                {" "}
                <Project type="Docker" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                {" "}
                <Project type="UIPath" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                <Project type="Selenium" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                <Project type="aibucket" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                initial={{ scale: 5 }}
                transition={{
                  ease: "easeOut",

                  type: "spring",
                  stiffness: 100,
                }}
                className="m-3 md:m-2"
              >
                <Project type="Netlify / Vercel" />
              </motion.div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default skills;
