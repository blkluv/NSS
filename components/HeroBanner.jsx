import React from "react";
//IMPORT MOTION
import { motion } from "framer-motion";

// import Link from "next/link";
// import Image from "next/image";

//Import IMAGES from client
import { urlFor } from "../lib/client";

// IMPORT CHAKRA tools
import { Box, Stack, Text, Button, Spacer, VStack } from "@chakra-ui/react";

//IMPORT MOTION TOOLS
import { slideIn, staggerContainer, textVariant1 } from "../utils/motion";

const HeroBanner = ({ heroBanner }) => {
  return (
    <>
      <section className="hero-banner-section">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Box
            className="hero-banner-container"
            py={4}
            px={["0.5rem", "2rem", "5rem"]}
          >
            <Stack direction="row">
              <VStack>
                <Box className="hero-banner-titles-box">
                  <motion.h3 variants={slideIn("left", "tween", 0.1, 1.5)}>
                    <Text
                      className="hero-banner-up-title"
                      fontSize={["1.2rem", "1rem", "2rem"]}
                    >
                      -{heroBanner.smallText}-
                    </Text>
                  </motion.h3>
                  <motion.h2 variants={textVariant1(1.0)}>
                    <Text
                      className="hero-banner-main-title"
                      fontSize={["3rem", "3.5rem", "5rem"]}
                    >
                      {" "}
                      {heroBanner.midText}
                    </Text>
                  </motion.h2>
                </Box>
                <Box className="hero-banner-huge-title-box">
                  <motion.h1 variants={textVariant1(1.1)}>
                    <Text
                      className="hero-banner-huge-title"
                      fontSize={["7.5rem", "9rem", "15rem"]}
                      ml={["-6.7rem", "-11rem", "-13rem"]}
                    >
                      {" "}
                      {heroBanner.largeText1}
                    </Text>
                  </motion.h1>
                </Box>
              </VStack>

              <Spacer />

              <Box
                className="hero-banner-image-box"
                w={["10.2rem", "15rem", "20rem"]}
                h={["10.2rem", "15rem", "20rem"]}
              >
                <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
                  <img
                    src={urlFor(heroBanner.image)}
                    alt="banner Image"
                    className="hero-banner-image"
                  />
                </motion.div>
              </Box>
            </Stack>
            <Box className="hero-banner-button-box" mb={6} mt={5} ml={10}>
              <Button className="hero-banner-button" size={["md", "lg", "lg"]}>
                Click Me
              </Button>
            </Box>
            <Box className="hero-banner-desc-box" mt={["-3rem", "auto"]}>
              <Box className="hero-banner-desc-up-text-box">
                <Text
                  className="hero-banner-desc-up-text"
                  fontSize={["0.7rem", "0.78rem", "2rem"]}
                >
                  Description
                </Text>
              </Box>
              <Box className="hero-banner-desc-main-text-box">
                <Text
                  className="hero-banner-desc-main-text"
                  fontSize={["0.6rem", "0.7rem", "2rem"]}
                  ml={["10rem", "12rem", "15rem"]}
                  lineHeight={["0.8rem", "1rem", "2rem"]}
                >
                  {heroBanner.desc}
                </Text>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </section>
    </>
  );
};

export default HeroBanner;
