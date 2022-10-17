import React from "react";
import Link from "next/link";

//Import IMAGES from client
import { urlFor } from "../lib/client";

// IMPORT CHAKRA tools
import { Box, Flex, Stack, Text, Button } from "@chakra-ui/react";

const HeroBanner = ({ heroBanner }) => {
  return (
    <>
      <section className="hero-banner-section">
        <Box className="hero-banner-container">
          <Box className="hero-banner-titles-box">
            <Text className="hero-banner-up-title">{heroBanner.smallText}</Text>
            <Text className="hero-banner-main-title">
              {" "}
              {heroBanner.midText}
            </Text>
            <Text className="hero-banner-main-title">
              {" "}
              {heroBanner.largeText1}
            </Text>
          </Box>
          <Box className="hero-banner-image-box">
            <img
              src={urlFor(heroBanner.image)}
              alt="banner Image"
              height="400"
              width="400"
              className="hero-banner-image"
            />
          </Box>
          <Box className="hero-banner-button-box">
            <Link href={`/product/${heroBanner.product}`}>
              <Button className="hero-banner-button">
                {heroBanner.buttonText}{" "}
              </Button>
            </Link>
          </Box>
          <Box className="hero-banner-desc-box">
            <Box className="hero-banner-desc-up-text-box">
              <Text className="hero-banner-desc-up-text">Description</Text>
            </Box>
            <Box className="hero-banner-desc-main-text-box">
              <Text className="hero-banner-desc-main-text">
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
