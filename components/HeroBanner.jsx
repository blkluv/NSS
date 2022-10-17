import React from "react";
import Link from "next/link";
import Image from "next/image";

//Import IMAGES
import HeroBannerImg from "../dist/img/techno.png";

// IMPORT CHAKRA tools
import { Box, Flex, Stack, Text, Button, Container } from "@chakra-ui/react";

const HeroBanner = () => {
  return (
    <>
      <section className="hero-banner-section">
        <Box className="hero-banner-container">
          <Box className="hero-banner-titles-box">
            <Text className="hero-banner-up-title"> SMALL TEXT</Text>
            <Text className="hero-banner-main-title"> MID TEXT</Text>
          </Box>
          <Box className="hero-banner-image-box">
            <Image
              src={HeroBannerImg}
              alt="banner Image"
              height="400"
              width="400"
              className="hero-banner-image"
            />
          </Box>
          <Box className="hero-banner-button-box">
            <Link href="/product/ID">
              <Button className="hero-banner-button">BUTTON TEXT</Button>
            </Link>
          </Box>
          <Box className="hero-banner-desc-box">
            <Box className="hero-banner-desc-up-text-box">
              <Text className="hero-banner-desc-up-text">Description</Text>
            </Box>
            <Box className="hero-banner-desc-main-text-box">
              <Text className="hero-banner-desc-main-text">DESCRIPTION</Text>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default HeroBanner;
