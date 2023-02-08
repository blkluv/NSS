import React, { useState, useEffect } from "react";
import Image from "next/image";

//Import IMAGES
import loading from "../dist/gif/cyberpunk-cyberpunk-anime.gif";
import Link from "next/link";

import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";

// IMPORT CHAKRA tools
import { Box, Button } from "@chakra-ui/react";

const sucess = () => {
  //reset all cart to zero
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  //clear all states
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <>
      <section className="success-page-section">
        <Box className="success-wrapper">
          <Box className="success-main-container">
            <Box>
              <Image
                src={loading}
                width={370}
                height={400}
                objectFit="cover"
                alt="Thank you for your order"
                className="success-img"
                priority
              />
            </Box>
            <h2>Thank you for your order !</h2>
            <p className="email-msg">Check your email inbox for the receipt.</p>
            <p className="description">
              If you have any questions, please email <br />
              <a href="mailto:order@example.com">order@example.com</a>
            </p>
            <Link href="/">
              <button className="continue-shopping ">Back to shop</button>
            </Link>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default sucess;
