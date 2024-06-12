import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Transition from "@/components/Transition";

const skillsData = {
  "Frontend Languages": ["HTML5", "CSS3", "Bootstrap", "Tailwind", "JavaScript", "TypeScript", "Reactjs", "Nextjs", "Angularjs"],
  "Backend Languages": ["MySQL", "PHP", "Node.js", "Express.js", "MongoDB", "Firebase"],
  "Programming Languages": ["Java", "Python"],
  "Tool Stack": ["Figma", "Adobe Photoshop", "Git", "Postman", "UIPath", "Selenium", "Netlify / Vercel"]
};

const Project = ({ type }) => (
  <motion.div
    whileTap={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    initial={{ scale: 5 }}
    transition={{ ease: "easeOut", type: "spring", stiffness: 100 }}
    className="m-3 md:m-2"
  >
    <article className="relative w-full flex flex-col items-center justify-between rounded-md border border-solid border-dark bg-light p-1 dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-[3px] -z-10 w-[99%] h-[100%] rounded-md bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-lg xs:-right-1" />
      <div className="w-full flex flex-col items-start justify-between">
        <div className="flex items-center justify-center w-full">
          <div className="text-lg font-semibold md:text-base p-1">{type}</div>
        </div>
      </div>
    </article>
  </motion.div>
);

const SkillsSection = ({ title, skills }) => (
  <div className="mb-10 border p-5 rounded-md border-slate-300 backdrop-blur-sm shadow-slate-200 dark:shadow-slate-700 shadow-md">
    <h2 className="mb-4 underline-offset-2 underline text-lg font-bold uppercase text-dark/75 dark:text-light/70 flex">
      {title}
    </h2>
    <div className="flex items-center justify-center flex-wrap">
      {skills.map(skill => <Project key={skill} type={skill} />)}
    </div>
  </div>
);

const Skills = () => (
  <>
    <Head>
      <title>Sridhar | Skills</title>
      <meta name="description" content="Sridhar's skills page showcasing expertise in various frontend, backend, programming languages and tools." />
    </Head>
    <Transition />
    <main className="w-full mb-1 flex flex-col items-center justify-center dark:text-light">
      <Layout className="pt-16">
        <AnimatedText className="mb-16 z-10 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" text="Skills Unleashed, Expertise Evolved!" />
        {Object.entries(skillsData).map(([title, skills]) => (
          <SkillsSection key={title} title={title} skills={skills} />
        ))}
      </Layout>
    </main>
  </>
);

export default Skills;
