import React, { useState, useEffect } from "react";

import Link from "next/link";
import { BsEmojiLaughing } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
// import { runFireworks } from "../lib/utils";

// IMPORT CHAKRA tools
import { Box,  Button,  } from "@chakra-ui/react";

const sucess = () => {
  //reset all cart to zero
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  //clear all states
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    // runFireworks();
  }, []);

  return (
    <>
      <section className="success-page-section">
        <Box className="success-wrapper">
          <Box className="success">
            <p className="icon">
              <BsEmojiLaughing />
            </p>
            <h2>Thank you for your order !</h2>
            <p className="email-msg">Check your email inbox for the receipt.</p>
            <p className="description">
              If you have any questions, please email <br />
              <a href="mailto:order@example.com">order@example.com</a>
            </p>
            <Link href="/">
              <Button
                mt={10}
                className="pay-btn"
                fontSize={["0.8rem", "1.5rem", "1.2rem"]}
              >
                Continue Shopping
              </Button>
            </Link>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default sucess;
