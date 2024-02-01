import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import sri_avatar from "../../public/images/profile/Sri_rbg_final1.png";
import sri_avatar2 from "../../public/images/profile/developer-pic-1.png";
import avatar from "../../public/images/profile/avatar_Rbg.png";
import AnimatedText from "@/components/AnimatedText";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sridhar Kumar</title>
        <meta name="description" content="Sridhar Kumar's Portfolio" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout>
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 p-9">
              <Image src={sri_avatar} alt="sri" className="w-full h-auto" />
            </div>
            <div className="w-1/2">
              <AnimatedText
                className="!text-6xl !text-left"
                text="Turning Vision Into Reality With Code And Design"
              />
              <p>
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
