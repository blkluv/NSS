import React from "react";
import Link from "next/link";

//Import IMAGES from client
import { urlFor } from "../lib/client";

// IMPORT CHAKRA tools
import { Box, Flex, Stack, Text, Button, Spacer } from "@chakra-ui/react";

const FooterBanner = ({ footerBanner }) => {
  return (
    <>
      <section className="footer-banner-section">
        <Box className="footer-banner-desc-box">
          <Box className="footer-banner-desc-left">
            <Text className="footer-banner-desc-discount">
              {footerBanner.discount}
            </Text>
            <Text className="footer-banner-desc-largeText1">
              {footerBanner.largeText1}
            </Text>
            <Text className="footer-banner-desc-largeText2">
              {footerBanner.largeText2}
            </Text>
            <Text className="footer-banner-desc-saleTime">
              {footerBanner.saleTime}
            </Text>
          </Box>
          <Spacer />
          <Box className="footer-banner-desc-right">
            <Text className="footer-banner-desc-smallText">
              {footerBanner.smallText}
            </Text>
            <Text className="footer-banner-desc-midText">
              {footerBanner.midText}
            </Text>
            <Text className="footer-banner-desc-desc">{footerBanner.desc}</Text>
            <Link href={`/product/${footerBanner.product}`}>
              <Button>{footerBanner.buttonText} </Button>
            </Link>
          </Box>
          {/* <Box>
            <img
              src={urlFor(footerBanner.image)}
              height="400"
              width="400"
              className="footer-banner-image"
            />
          </Box> */}
          <Box
            className="hero-banner-image-box"
            w={["10.2rem", "15rem", "20rem"]}
            h={["10.2rem", "15rem", "20rem"]}
          >
            <img
              src={urlFor(footerBanner.image)}
              alt="banner Image"
              objectFit="fill"
              className="hero-banner-image"
            />
          </Box>
        </Box>
      </section>
    </>
  );
};

export default FooterBanner;
