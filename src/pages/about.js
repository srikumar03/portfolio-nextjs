import React, { useEffect, useRef } from "react";
import AnimatedText from "../components/AnimatedText";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilepic from "../../public/images/profile/Sri_rbg_final.png";
import sri from "../../public/images/profile/srii.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Exp from "@/components/Exp";
import Education from "@/components/Education";
import Transition from "@/components/Transition";
const AnimatedNumers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Sridhar | About Page</title>
        <meta name="bla bla bla" content="bla bla..." />
      </Head>
      <Transition />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start md:col-span-8 md:order-2 xl:col-span-4">
              {" "}
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/70">
                ░ Biography
              </h2>
              <p className="font-medium text-justify text-sm">
                Hi! I am Sridhar and glad that you are here to read about me. I
                was an average student in my school, not all the last bench
                students will be knowledge less. These are the universal truths.
                But Now, think about the middle bench students? They will be the
                guys who had stuff to come forward but never reached their goal
                in time, still they will never go back and stop their struggle.
                I am one among the middle bench student who migrated from the
                last bench to the middle bench during the school days and now
                even on my college days.Currently I am Pursuing M.Sc Software
                Systems in Kongu Engineering College, Perundurai, my tech
                journey began in 7th Standard, evolving from hardware
                experiments to web technologies. In college, I honed my logical
                and programming skills, exploring new technologies.
              </p>
              <p className="font-medium text-justify my-2 text-sm">
                Beyond academics, I am passionate about surfing intriguing
                topics online. Music is a significant part of my life—I enjoy
                listening and occasionally dabble in music production. Exploring
                diverse interests, I find joy in continuous self-improvement and
                learning, both in technology and beyond{" "}
              </p>
            </div>

            <div
              className="col-span-3 flex flex-col items-center justify-center relative h-max rounded-2xl border-2 border-solid
             border-dark bg-light dark:border-light dark:bg-dark p-8 xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={sri}
                alt="sri as Pic"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-Width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 xl:col-span-8 xl:flex-row flex flex-col md:order-3 items-end justify-between xl:items-center">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-6xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/70 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-6xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/70 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of experience
                </h2>
              </div>
            </div>
          </div>

          <Exp />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
