import React from "react";
//IMPORT MOTION
// import { motion } from "framer-motion";

// import Link from "next/link";
// import Image from "next/image";

//Import IMAGES from client
import { urlFor } from "../lib/client";

//IMPORT ICON
import { BsArrow90DegRight } from "react-icons/bs";

// IMPORT CHAKRA tools
import { Box, Text, Flex, VStack, Button } from "@chakra-ui/react";

//IMPORT MOTION TOOLS
// import {
//   fadeIn,
//   slideIn,
//   staggerContainer,
//   textVariant1,
// } from "../utils/motion";

const HeroBanner = ({ heroBanner }) => {
  return (
    <>
      <section className="hero-banner-section">
        <Flex>
          <Box>
            <Text className="hero_banner-huge-title">
              {heroBanner.largeText1}
            </Text>
          </Box>
          <Box>
            <BsArrow90DegRight
              size="110px"
              className="hero_banner-icon-enter"
            />
          </Box>
        </Flex>
        <Flex>
          <Box className="hero_banner-desc">{heroBanner.desc}</Box>
          <Box className="hero_banner-huge-title a-letter">
            {heroBanner.largeText2}
          </Box>
        </Flex>
        <Flex>
          <Box>
            <VStack>
              <Box>
                <img
                  src={urlFor(heroBanner.image)}
                  alt="banner Image"
                  className="hero-banner-image"
                />
              </Box>
              <Box>
                <Text>{heroBanner.imageDesc}</Text>
              </Box>
            </VStack>
          </Box>
          <Box>
            <VStack>
              <Text>{heroBanner.largeText3}</Text>
              <Button>{heroBanner.buttonText}</Button>
            </VStack>
          </Box>
        </Flex>
      </section>
    </>
  );
};

export default HeroBanner;
