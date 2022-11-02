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
            <Text
              className="footer-banner-desc-discount"
              fontSize={["1.5rem", "2rem", "3rem"]}
            >
              {footerBanner.discount}
            </Text>
            <Text
              className="footer-banner-desc-largeText1"
              fontSize={["4rem", "6.5rem", "7rem"]}
            >
              {footerBanner.largeText1}
            </Text>
            <Text
              className="footer-banner-desc-largeText2"
              fontSize={["4rem", "6.5rem", "7rem"]}
              mt={["-2.5rem"]}
            >
              {footerBanner.largeText2}
            </Text>
            <Box>
              <Text
                className="footer-banner-desc-saleTime"
                fontSize={["1.5rem", "2rem", "3rem"]}
              >
                {footerBanner.saleTime}
              </Text>
            </Box>
            <Stack
              justifyContent="left"
              alignItems="left"
              direction="row"
              mt={1}
            >
              <Box>
                <Text
                  className="footer-banner-desc-midText"
                  fontSize={["0.8rem", "1rem", "1.2rem"]}
                >
                  {footerBanner.midText}
                </Text>
              </Box>
              <Spacer />
              <Box>
                <Text
                  className="footer-banner-desc-smallText"
                  fontSize={["0.8rem", "1rem", "1.2rem"]}
                >
                  {footerBanner.smallText}
                </Text>
              </Box>
            </Stack>
          </Box>

          <Box className="footer-banner-desc-right" mt={5}>
            <Text
              className="footer-banner-desc-desc"
              fontSize={["0.9rem", "1rem", "1.5rem"]}
              mr={["auto", "auto", "20rem"]}
              pr={4}
            >
              {footerBanner.desc}
            </Text>
            <Link href={`/product/${footerBanner.product}`}>
              <Button
                className="footer-banner-product-btn"
                mt={5}
                size={["md", "lg", "lg"]}
              >
                {footerBanner.buttonText}{" "}
              </Button>
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
            w={["12rem", "20rem", "30rem"]}
            h={["12rem", "20rem", "30rem"]}
          >
            <img
              src={urlFor(footerBanner.image)}
              alt="banner Image"
              objectFit="fill"
              className="footer-banner-image"
            />
          </Box>
        </Box>
      </section>
    </>
  );
};

export default FooterBanner;
