import React from "react";
import Link from "next/link";

//Import IMAGES from client
import { urlFor } from "../lib/client";

// IMPORT CHAKRA tools
import { Box, Flex, Stack, Text, Button } from "@chakra-ui/react";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <>
      <section className="footer-banner-section">
        <Box className="footer-banner-desc-box">
          <Box className="footer-banner-desc-left">
            <Text className="footer-banner-desc-discount">{discount}</Text>
            <Text className="footer-banner-desc-largeText1">{largeText1}</Text>
            <Text className="footer-banner-desc-largeText2">{largeText2}</Text>
            <Text className="footer-banner-desc-saleTime">{saleTime}</Text>
          </Box>
          <Box className="footer-banner-desc-right">
            <Text className="footer-banner-desc-smallText">{smallText}</Text>
            <Text className="footer-banner-desc-midText">{midText}</Text>
            <Text className="footer-banner-desc-desc">{desc}</Text>
            <Link href={`/product/${product}`}>
              <Button>{buttonText} </Button>
            </Link>
          </Box>
          <Box>
            <img
              src={urlFor(image)}
              height="400"
              width="400"
              className="footer-banner-image"
            />
          </Box>
        </Box>
      </section>
    </>
  );
};

export default FooterBanner;
