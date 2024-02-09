import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  GithubIcon,
  GmailIcon,
  InstaIcon,
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

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
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
      <div className="absolute left-[48%] top-2 translate-x-[50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
