import React from "react";
// import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, textVariant1, textVariant2 } from "../utils/motion";
//Import IMAGES from client
import { urlFor } from "../lib/client";

// IMPORT CHAKRA tools
import { Box, Flex, Stack, Text, Spacer } from "@chakra-ui/react";
//IMPORT ICON
import { BsArrow90DegRight } from "react-icons/bs";

const FooterBanner = ({ footerBanner }) => {
  return (
    <>
      <section className="footer-banner-section">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <Box>
            <Box>
              <motion.div variants={textVariant1(1.1)}>
                <Flex>
                  <Box>
                    <Text className="hero_banner-huge-title exp-letter">
                      {footerBanner.largeTitle1}
                    </Text>
                  </Box>
                  <Box>
                    <BsArrow90DegRight
                      size="110px"
                      className="footer_banner-icon-enter"
                    />
                  </Box>
                </Flex>
              </motion.div>
            </Box>

            <Box>
              <motion.div variants={textVariant1(1.2)}>
                <Text className="hero_banner-huge-title l-letter">
                  {footerBanner.largeTitle2}
                </Text>
              </motion.div>
            </Box>

            <Box>
              <motion.div variants={textVariant1(1.3)}>
                <Text className="hero_banner-huge-title ore-letter">
                  {footerBanner.largeTitle3}
                </Text>
              </motion.div>
            </Box>
          </Box>
        </motion.div>

        <Box className="article-box">
          <Box className="footer-banner-desc-left">
            <Flex>
              <Text className="footer-banner-desc-discount">
                {footerBanner.discount}
              </Text>
              <Box>
                <img
                  src={urlFor(footerBanner.image)}
                  alt="banner Image"
                  className="footer-banner-image"
                />
              </Box>
            </Flex>
          </Box>
          <Text className="footer-banner-desc-largeText1">
            {footerBanner.largeText1}
          </Text>
          <Text className="footer-banner-desc-largeText2">
            {footerBanner.largeText2}
          </Text>
          <Box>
            <Text className="footer-banner-desc-saleTime">
              {footerBanner.saleTime}
            </Text>
          </Box>
          <Stack justifyContent="left" alignItems="left" direction="row" mt={1}>
            <Box>
              <Text className="footer-banner-desc-midText">
                {footerBanner.midText}
              </Text>
            </Box>
            <Spacer />
            <Box>
              <Text className="footer-banner-desc-smallText">
                {footerBanner.smallText}
              </Text>
            </Box>
          </Stack>

          <Box className="footer-banner-desc-right">
            <Text className="footer-banner-desc-desc">{footerBanner.desc}</Text>
            {/* <Link href={`/product/${footerBanner.product}`}> */}
            <Box className="footer-banner-product-btn-div">
              <button className="footer-banner-product-btn">
                {footerBanner.buttonText}{" "}
              </button>
            </Box>
            {/* </Link> */}
          </Box>
        </Box>
      </section>
    </>
  );
};

export default FooterBanner;
