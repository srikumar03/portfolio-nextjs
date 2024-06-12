import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import sri_avatar from "../../public/images/profile/Sri_Ai_Enhanced.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import Transition from "@/components/Transition";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sridhar Kumar</title>
        <meta name="description" content="Sridhar Kumar's Portfolio" />
      </Head>
      <Transition />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full lg:w-full">
              <Image
                src={sri_avatar}
                alt="sri"
                className="w-full h-auto lg:inline-block lg:w-full md:inline-block md:w-full"
                priority
                sizes="(max-Width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                text="Turning Vision Into Reality With Code And Design"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-sm">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development
              </p>
              <div className="flex gap-5 items-center self-start mt-2 lg:self-center">
                <Link
                  className="flex items-center md:p-2 md:px-4 md:text-base bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark  hover:dark:bg-dark hover:dark:text-light border-2 border-solid border-transparent hover:border-dark hover:dark:border-light transition-all"
                  // download={true}
                  href="/SRIDHAR.pdf"
                  target="_blank"
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  className="ml-4 text-lg font-medium capitalize dark:text-light  md:text-base text-dark underline hover:underline-offset-2"
                  href="mailto:sridharkumar5303@gmail.com"
                  target="_blank"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />

        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
