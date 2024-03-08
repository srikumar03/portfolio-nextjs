import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { WhatsApp } from "./Icons";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex z-30 items-center justify-between lg:flex-col lg:py-6">
        <span title={new Date().toLocaleDateString()}>
          {new Date().getFullYear()} &copy; All Rights Reserved
        </span>
        <div className="flex items-center lg:py-2">
          {" "}
          Build by{" "}
          <span className="text-red-600 dark:text-primaryDark px-1">
            {" "}
            {/* &#9829;{" "} */}
            Sridhar Kumar
          </span>
        </div>
        <Link href="https://wa.link/s6pj7z" target="_blank">
          <span className="flex">
            Say Hello &nbsp;
            <WhatsApp className={" bg-none "} />
          </span>
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
