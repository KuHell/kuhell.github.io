import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>KuHell</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
          <div className="snap-start bg-amber-200 w-screen h-screen flex items-center justify-center text-8xl">
            1
          </div>
          <div className="snap-start bg-teal-200 w-screen h-screen flex items-center justify-center text-8xl">
            <Link href="/about">About</Link>
          </div>
          <div className="snap-start bg-gray-200 w-screen h-screen flex items-center justify-center text-8xl">
            <Link href="/blog">Blog</Link>
          </div>
          <div className="snap-start bg-amber-200 w-screen h-screen flex items-center justify-center text-8xl">
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </main>
    </>
  );
}
