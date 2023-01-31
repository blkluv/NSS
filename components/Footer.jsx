import React from "react";
import Link from "next/link";
import Image from "next/image";

// IMPORT CHAKRA tools
import { Box, Flex, HStack, Text } from "@chakra-ui/react";

//IMPORT ICON
import { IoCubeOutline } from "react-icons/io5";

//Import IMAGES

import Stripe from "../dist/img/stripe.svg.png";

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <Flex justifyContent="center" alignItems="center">
          <Box>
            <Image
              width="100px"
              height="30px"
              objectFit="cover"
              src={Stripe}
              alt="stripe logo"
            />
          </Box>
          <Box>
            <HStack className="logo-footer-div">
              <IoCubeOutline size="20px" />
              <Text className="navbar-logo-title">
                <Link href="/">[metanodes.lab]</Link>
              </Text>
            </HStack>
          </Box>
        </Flex>
      </section>
    </>
  );
};

export default Footer;
