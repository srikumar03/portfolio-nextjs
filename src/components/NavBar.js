import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  GithubIcon,
  GmailIcon,
  InstaIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      <span
        className={`h-[0.8px] inline-block w-0 bg-dark absolute right-0  -top-0.5 group-hover:w-full transition-all ease duration-300 `}
      >
        &nbsp;
      </span>
      {title}
      <span
        className={`h-[0.8px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/About" title="About" className="mx-4" />
        <CustomLink href="/Projects" title="Projects" className="mx-4" />
        <CustomLink href="/Article" title="Article" className="mx-4" />
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
          className="w-6 mx-3"
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
          className="w-6 mx-3"
          whileHover={{ rotate: -9, y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="/"
          target="_blank"
        >
          <InstaIcon />
        </motion.a>
        <motion.a
          className="w-6 ml-3"
          whileHover={{ rotate: -9, y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="/"
          target="_blank"
        >
          <GmailIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
