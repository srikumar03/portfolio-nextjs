import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sridhar Kumar</title>
        <meta name="description" content="Sridhar Kumar's Portfolio" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout>Hi da monnai</Layout>
      </main>
    </>
  );
}
