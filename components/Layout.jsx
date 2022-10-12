import React from "react";

//Import components
import { Footer } from "./index";
import { Navbar } from "./index";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <div>
        <Footer />
      </div>
    </>
  );
}
