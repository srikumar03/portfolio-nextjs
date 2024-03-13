import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  const handleClick = () => {
    // Handle click event here, e.g., redirect or perform some action
    window.location.href = "mailto:sridharkumar5303@gmail.com";
  };
  return (
    <div className="fixed md:absolute bottom-4 flex items-center justify-center overflow-hidden md:left-3  sm:left-0 md:right-auto md:top-0 md:bottom-auto">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText
          onClick={handleClick}
          className={"fill-dark dark:fill-light animate-spin-sloww"}
        />
        <Link
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-white hover:text-dark transition-all duration-200
          hover:dark:text-light hover:dark:bg-dark  hover:dark:border-light dark:bg-light dark:text-dark md:w-12 md:h-12 md:text-[10px]"
          href="mailto:sridharkumar5303@gmail.com"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
