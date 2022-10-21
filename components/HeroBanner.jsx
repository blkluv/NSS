import React from "react";
import Link from "next/link";

//Import IMAGES from client
import { urlFor } from "../lib/client";

// IMPORT CHAKRA tools
import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Spacer,
  VStack,
} from "@chakra-ui/react";

const HeroBanner = ({ heroBanner }) => {
  return (
    <>
      <section className="hero-banner-section">
        <Box
          className="hero-banner-container"
          py={4}
          px={["0.5rem", "2rem", "5rem"]}
        >
          <Stack direction="row">
            <VStack>
              <Box className="hero-banner-titles-box">
                <Text
                  className="hero-banner-up-title"
                  fontSize={["0.8rem", "1rem", "2rem"]}
                >
                  -{heroBanner.smallText}-
                </Text>
                <Text
                  className="hero-banner-main-title"
                  fontSize={["2.8rem", "3.5rem", "5rem"]}
                >
                  {" "}
                  {heroBanner.midText}
                </Text>
              </Box>
              <Box className="hero-banner-huge-title-box">
                <Text
                  className="hero-banner-huge-title"
                  fontSize={["7.5rem", "9rem", "15rem"]}
                  ml={["-6.7rem", "-11rem", "-13rem"]}
                >
                  {" "}
                  {heroBanner.largeText1}
                </Text>
              </Box>
            </VStack>

            <Spacer />
            <Box
              className="hero-banner-image-box"
              w={["10.2rem", "15rem", "20rem"]}
              h={["10.2rem", "15rem", "20rem"]}
            >
              <img
                src={urlFor(heroBanner.image)}
                alt="banner Image"
                objectFit="fill"
                className="hero-banner-image"
              />
            </Box>
          </Stack>
          <Box className="hero-banner-button-box" mb={6}>
            <Link href={`/product/${heroBanner.product}`}>
              <Button className="hero-banner-button">
                {heroBanner.buttonText}{" "}
              </Button>
            </Link>
          </Box>
          <Box className="hero-banner-desc-box" mt={["-1.5rem", "auto"]}>
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
      </section>
    </>
  );
};

export default HeroBanner;
