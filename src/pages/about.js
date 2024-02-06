import React, { useEffect, useRef } from "react";
import AnimatedText from "../components/AnimatedText";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilepic from "../../public/images/profile/Sri_rbg_final.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/skills";

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
        <title>CodeBucks | About Page</title>
        <meta name="bla bla bla" content="bla bla..." />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              {" "}
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                ░ Biography
              </h2>
              <p className="font-medium text-justify text-sm">
                Hi! I am Sridhar and glad that you're here to read about me. I
                was an average student in my school, not all the last bench
                students will be knowledge less. These are the universal truths.
                But Now, think about the middle bench students? They will be the
                guys who had stuff to come forward but never reached their goal
                in time, still they will never go back and stop their struggle.
                I’m one among the middle bench student who migrated from the
                last bench to the middle bench during the school days and now
                even on my college days.Currently I'm Pursuing M.Sc Software
                Systems in Kongu Engineering College, Perundurai, my tech
                journey began in 7th Standard, evolving from hardware
                experiments to web technologies. In college, I honed my logical
                and programming skills, exploring new technologies.
              </p>
              <p className="font-medium text-justify my-2 text-sm">
                Beyond academics, I'm passionate about surfing intriguing topics
                online. Music is a significant part of my life—I enjoy listening
                and occasionally dabble in music production. Exploring diverse
                interests, I find joy in continuous self-improvement and
                learning, both in technology and beyond{" "}
              </p>
            </div>

            <div className="col-span-3 flex flex-col items-center justify-center relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilepic}
                alt="sri's Pic"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-between">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-between">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
        </Layout>
      </main>
      ;
    </>
  );
};

export default about;
