import React from "react";
import Head from "next/head";

//Import components
import { Footer } from "./index";
import { Navbar } from "./index";

export default function Layout({ children }) {
  return (
    <>
      <div className="layout">
        <Head>
          <title className="head-title">Online Shop</title>
        </Head>
        <header>
          <Navbar />
        </header>
        <main className="layout-main-container">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
