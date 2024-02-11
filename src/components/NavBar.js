import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  GithubIcon,
  GmailIcon,
  InstaIcon,
  InstaIconMob,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      <span
        className={`h-[0.8px] inline-block w-0 bg-dark absolute right-0 dark:bg-light -top-0.5 group-hover:w-full transition-all ease duration-300 `}
      >
        &nbsp;
      </span>
      {title}
      <span
        className={`h-[0.8px] inline-block bg-dark absolute left-0 dark:bg-light -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const hclick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={hclick}
    >
      <span
        className={`h-[0.8px] inline-block w-0 bg-light absolute right-0 dark:bg-dark -top-0.5 group-hover:w-full transition-all ease duration-300 `}
      >
        &nbsp;
      </span>
      {title}
      <span
        className={`h-[0.8px] inline-block bg-light absolute left-0 dark:bg-dark -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="hidden lg:flex flex-col justify-center items-center"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-100 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/contact" title="Contact" className="mx-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            className="w-6 mr-3"
            whileHover={{ rotate: -9, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="/"
            target="_blank"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            className="w-6 mx-3 dark:text-dark text-light"
            whileHover={{ rotate: -9, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="/"
            target="_blank"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            className="w-6 mx-3"
            whileHover={{ rotate: -9, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="/"
            target="_blank"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            className="w-6 mx-3 "
            whileHover={{ rotate: -9, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="/"
            target="_blank"
          >
            <InstaIcon />
          </motion.a>
          <motion.a
            className="w-6 mx-3"
            whileHover={{ rotate: -9, y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="/"
            target="_blank"
          >
            <GmailIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink toggle={handleClick} href="/" title="Home" />
            <CustomMobileLink
              toggle={handleClick}
              href="/about"
              title="About"
            />
            <CustomMobileLink
              toggle={handleClick}
              href="/projects"
              title="Projects"
            />
            <CustomMobileLink
              toggle={handleClick}
              href="/contact"
              title="Contact"
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              className="w-6 mr-3 bg-light rounded-full dark:bg-dark xs:mx-1"
              whileHover={{ rotate: -9, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="/"
              target="_blank"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              className="w-6 mx-3 text-light xs:mx-1"
              whileHover={{ rotate: -9, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="/"
              target="_blank"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              className="w-6 mx-3 text-light dark:text-dark xs:mx-1"
              whileHover={{ rotate: -9, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="/"
              target="_blank"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              className="w-6 mx-3 xs:mx-1"
              whileHover={{ rotate: -9, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="/"
              target="_blank"
            >
              <InstaIconMob />
            </motion.a>

            <motion.a
              className="w-6 mx-3 xs:mx-1"
              whileHover={{ rotate: -9, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="/"
              target="_blank"
            >
              <GmailIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 
         ${
           mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
         }  xs:mx-1`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[48%] lg:left-[44%] md:left-[41.5%] sm:left-[40%] xs:left-[35%] xxs:left-[30%] top-2 translate-x-[50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
