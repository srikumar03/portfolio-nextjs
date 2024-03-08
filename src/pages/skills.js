import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Transition from "@/components/Transition";

import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const Project = ({ type }) => {
  return (
    <article className="relative w-full flex flex-col items-center justify-between rounded-md border border-solid border-dark bg-light p-1 dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-[3px] -z-10 w-[99%] h-[100%] rounded-md bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

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
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Head>
        <title>Sridhar | Skills</title>
        <meta name="Sridhar | Skills" content="Sridhar | Skills..." />
      </Head>
      <Transition />

      <main className="w-full mb-1 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 z-10 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            text={"Skills Unleashed, Expertise Evolved!"}
          />
          <Particles
            className="-z-50"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              autoPlay: true,
              background: {
                color: {
                  value: "",
                },
                image: "",
                position: "",
                repeat: "",
                size: "",
                opacity: 1,
              },
              backgroundMask: {
                composite: "destination-out",
                cover: {
                  color: {
                    value: "#6e6e71",
                  },
                  opacity: 1,
                },
                enable: false,
              },
              clear: true,
              defaultThemes: {},
              delay: 0,
              fullScreen: {
                enable: true,
                zIndex: 0,
              },
              detectRetina: true,
              duration: 0,
              fpsLimit: 420,
              interactivity: {
                detectsOn: "window",
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onDiv: {
                    selectors: [],
                    enable: false,
                    mode: [],
                    type: "circle",
                  },
                  onHover: {
                    enable: true,
                    mode: "slow",
                    parallax: {
                      enable: false,
                      force: 60,
                      smooth: 10,
                    },
                  },
                  resize: {
                    delay: 5,
                    enable: true,
                  },
                },
                modes: {
                  trail: {
                    delay: 1,
                    pauseOnStop: false,
                    quantity: 1,
                  },
                  attract: {
                    distance: 200,
                    duration: 4,
                    easing: "ease-out-quad",
                    factor: 1,
                    maxSpeed: 5,
                    speed: 1,
                  },
                  bounce: {
                    distance: 200,
                  },
                  bubble: {
                    distance: 400,
                    duration: 2,
                    mix: false,
                    opacity: 0.8,
                    size: 40,
                    divs: {
                      distance: 200,
                      duration: 4,
                      mix: false,
                      selectors: [],
                    },
                  },
                  connect: {
                    distance: 80,
                    links: {
                      opacity: 0.5,
                    },
                    radius: 60,
                  },
                  grab: {
                    distance: 400,
                    links: {
                      blink: false,
                      consent: false,
                      opacity: 1,
                    },
                  },
                  push: {
                    default: true,
                    groups: [],
                    quantity: 4,
                  },
                  remove: {
                    quantity: 2,
                  },
                  repulse: {
                    distance: 200,
                    duration: 4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 5,
                    easing: "ease-out-quad",
                    divs: {
                      distance: 200,
                      duration: 4,
                      factor: 100,
                      speed: 1,
                      maxSpeed: 5,
                      easing: "ease-out-quad",
                      selectors: [],
                    },
                  },
                  slow: {
                    factor: 3,
                    radius: 100,
                  },
                  light: {
                    area: {
                      gradient: {
                        start: {
                          value: "#6e6e71",
                        },
                        stop: {
                          value: "#000000",
                        },
                      },
                      radius: 1000,
                    },
                    shadow: {
                      color: {
                        value: "#000000",
                      },
                      length: 2000,
                    },
                  },
                },
              },
              manualParticles: [],
              particles: {
                bounce: {
                  horizontal: {
                    value: 1,
                  },
                  vertical: {
                    value: 1,
                  },
                },
                collisions: {
                  absorb: {
                    speed: 2,
                  },
                  bounce: {
                    horizontal: {
                      value: 1,
                    },
                    vertical: {
                      value: 1,
                    },
                  },
                  enable: false,
                  maxSpeed: 5,
                  mode: "bounce",
                  overlap: {
                    enable: true,
                    retries: 0,
                  },
                },
                color: {
                  value: "#6e6e71",
                  animation: {
                    h: {
                      count: 0,
                      enable: false,
                      speed: 1,
                      decay: 0,
                      delay: 0,
                      sync: true,
                      offset: 0,
                    },
                    s: {
                      count: 0,
                      enable: false,
                      speed: 1,
                      decay: 0,
                      delay: 0,
                      sync: true,
                      offset: 0,
                    },
                    l: {
                      count: 0,
                      enable: false,
                      speed: 1,
                      decay: 0,
                      delay: 0,
                      sync: true,
                      offset: 0,
                    },
                  },
                },
                effect: {
                  close: true,
                  fill: true,
                  options: {},
                  type: [],
                },
                groups: {},
                move: {
                  angle: {
                    offset: 0,
                    value: 9,
                  },
                  attract: {
                    distance: 200,
                    enable: false,
                    rotate: {
                      x: 3000,
                      y: 3000,
                    },
                  },
                  center: {
                    x: 50,
                    y: 50,
                    mode: "percent",
                    radius: 0,
                  },
                  decay: 0,
                  distance: {},
                  direction: "none",
                  drift: 0,
                  enable: true,
                  gravity: {
                    acceleration: 9.81,
                    enable: false,
                    inverse: false,
                    maxSpeed: 5,
                  },
                  path: {
                    clamp: true,
                    delay: {
                      value: 0,
                    },
                    enable: false,
                    options: {},
                  },
                  outModes: {
                    default: "out",
                    bottom: "out",
                    left: "out",
                    right: "out",
                    top: "out",
                  },
                  random: false,
                  size: false,
                  speed: 5,
                  spin: {
                    acceleration: 0,
                    enable: false,
                  },
                  straight: false,
                  trail: {
                    enable: false,
                    length: 10,
                    fill: {},
                  },
                  vibrate: false,
                  warp: false,
                },
                number: {
                  density: {
                    enable: true,
                    width: 1920,
                    height: 1080,
                  },
                  limit: {
                    mode: "delete",
                    value: 0,
                  },
                  value: 20, // Number of Pulligal
                },
                opacity: {
                  value: 0.5,
                  animation: {
                    count: 0,
                    enable: false,
                    speed: 2,
                    decay: 0,
                    delay: 0,
                    sync: false,
                    mode: "auto",
                    startValue: "random",
                    destroy: "none",
                  },
                },
                reduceDuplicates: false,
                shadow: {
                  blur: 0,
                  color: {
                    value: "#000",
                  },
                  enable: false,
                  offset: {
                    x: 0,
                    y: 0,
                  },
                },
                shape: {
                  close: true,
                  fill: true,
                  options: {},
                  type: "circle",
                },
                size: {
                  value: {
                    min: 1,
                    max: 5,
                  },
                  animation: {
                    count: 0,
                    enable: false,
                    speed: 5,
                    decay: 0,
                    delay: 0,
                    sync: false,
                    mode: "auto",
                    startValue: "random",
                    destroy: "none",
                  },
                },
                stroke: {
                  width: 0,
                },
                zIndex: {
                  value: 0,
                  opacityRate: 1,
                  sizeRate: 1,
                  velocityRate: 1,
                },
                destroy: {
                  bounds: {},
                  mode: "none",
                  split: {
                    count: 1,
                    factor: {
                      value: 3,
                    },
                    rate: {
                      value: {
                        min: 4,
                        max: 9,
                      },
                    },
                    sizeOffset: true,
                    particles: {},
                  },
                },
                roll: {
                  darken: {
                    enable: false,
                    value: 0,
                  },
                  enable: false,
                  enlighten: {
                    enable: false,
                    value: 0,
                  },
                  mode: "vertical",
                  speed: 5,
                },
                tilt: {
                  value: 0,
                  animation: {
                    enable: false,
                    speed: 0,
                    decay: 0,
                    sync: false,
                  },
                  direction: "clockwise",
                  enable: false,
                },
                twinkle: {
                  lines: {
                    enable: false,
                    frequency: 0.05,
                    opacity: 1,
                  },
                  particles: {
                    enable: false,
                    frequency: 0.05,
                    opacity: 1,
                  },
                },
                wobble: {
                  distance: 5,
                  enable: false,
                  speed: {
                    angle: 50,
                    move: 5,
                  },
                },
                life: {
                  count: 0,
                  delay: {
                    value: 0,
                    sync: false,
                  },
                  duration: {
                    value: 0,
                    sync: false,
                  },
                },
                rotate: {
                  value: 0,
                  animation: {
                    enable: false,
                    speed: 0,
                    decay: 0,
                    sync: false,
                  },
                  direction: "clockwise",
                  path: false,
                },
                orbit: {
                  animation: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: false,
                  },
                  enable: false,
                  opacity: 1,
                  rotation: {
                    value: 45,
                  },
                  width: 1,
                },
                links: {
                  blink: false,
                  color: {
                    value: "#6e6e71",
                  },
                  consent: false,
                  distance: 150,
                  enable: true,
                  frequency: 1,
                  opacity: 0.4,
                  shadow: {
                    blur: 5,
                    color: {
                      value: "#000",
                    },
                    enable: false,
                  },
                  triangles: {
                    enable: false,
                    frequency: 1,
                  },
                  width: 1,
                  warp: false,
                },
                repulse: {
                  value: 0,
                  enabled: false,
                  distance: 1,
                  duration: 1,
                  factor: 1,
                  speed: 1,
                },
              },
              pauseOnBlur: true,
              pauseOnOutsideViewport: true,
              responsive: [],
              smooth: false,
              style: {},
              themes: [],
              zLayers: 100,
              name: "Slow",
              motion: {
                disable: false,
                reduce: {
                  factor: 4,
                  value: true,
                },
              },
            }}
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
