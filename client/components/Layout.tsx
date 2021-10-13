import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import GithubImage from "../images/GitHub.png";
import GitHub from "./GitHub";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Temporary title" }: Props) => (
  <div className="h-screen w-screen">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {/* <header className="h-12 text-center border-b-2 border-steamBlueDark bg-steamDark">
      <h3 className="md:text-2xl 2xl:text-3xl pt-1 text-white align-middle">Steam guessing game.</h3>
    </header> */}
    {children}
    <footer className="h-footerHeight text-center text-2xl flex justify-center border-t-2 border-steamBlueDark bg-steamDark text-white">
      <GitHub />
    </footer>
  </div>
);

export default Layout;
