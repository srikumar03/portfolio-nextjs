// 404.js
import Layout from "@/components/Layout";
import Transition from "@/components/Transition";
import Link from "next/link";

export default function FourOhFour() {
  return (
    <>
      <Transition />
      <Layout className=" text-center">
        <div className=" border border-r-4 border-b-4 border-dark dark:border-light">
          <h2 className=" dark:text-white m-10 text-dark">
            404 - Page Not Found 🦥
          </h2>
          <Link
            href="/"
            className="rounded-md bg-dark p-4 mt-0 text-white dark:bg-light dark:text-dark font-semibold"
          >
            Go back home
          </Link>
        </div>
      </Layout>
    </>
  );
}
