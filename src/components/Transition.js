import React from "react";
import { motion } from "framer-motion";

const Transition = () => {
  return (
    <>
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "00%", width: "00%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-dark dark:bg-slate-300"
      />
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "00%", width: "00%" }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light dark:bg-dark"
      />
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "00%", width: "00%" }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark dark:bg-slate-400"
      />
    </>
  );
};

export default Transition;
