import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import sri_avatar from "../../public/images/profile/Sri_rbg_final1.png";
import sri_avatar2 from "../../public/images/profile/developer-pic-1.png";
import avatar from "../../public/images/profile/avatar_Rbg.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sridhar Kumar</title>
        <meta name="description" content="Sridhar Kumar's Portfolio" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image src={sri_avatar} alt="sri" className="w-full h-auto" />
            </div>
            <div className="w-1/2">
              <AnimatedText
                className="!text-6xl !text-left"
                text="Turning Vision Into Reality With Code And Design"
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development
              </p>
              <div className="flex gap-5 items-center self-start mt-2">
                <Link
                  className="flex items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark  hover:dark:bg-dark hover:dark:text-light border-2 border-solid border-transparent hover:border-dark hover:dark:border-light transition-all"
                  // download={true}
                  href="/dummy.pdf"
                  target="_blank"
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  className="ml-4 text-lg font-medium capitalize dark:text-light text-dark underline hover:underline-offset-2"
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
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={lightBulb} alt="" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
