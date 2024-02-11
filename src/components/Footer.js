import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span title={new Date().toLocaleDateString()}>
          {new Date().getFullYear()} &copy; All Rights Reserved
        </span>
        <div className="flex items-center lg:py-2">
          {" "}
          Build with{" "}
          <span className="text-red-600 dark:text-primaryDark text-2xl px-1">
            {" "}
            &#9829;{" "}
          </span>
          Sri
        </div>
        <Link href="/">Say Hello</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
