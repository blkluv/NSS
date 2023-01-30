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
import {
  Container,
  Box,
  Stack,
  Text,
  Flex,
  VStack,
  Button,
  Spacer,
} from "@chakra-ui/react";

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

{
  /* <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        > */
}
// <Box
//   className="hero-banner-container"
//   py={4}
//   px={["0.5rem", "2rem", "2rem"]}
//   mx={["0", "0", "10rem"]}
// >
//   <Stack direction="row">
//     <VStack>
//       <Box className="hero-banner-titles-box">
//         <Text
//           className="hero-banner-up-title"
//           fontSize={["1.2rem", "1rem", "2rem"]}
//         >
//           -{heroBanner.smallText}-
//         </Text>

//         <Text
//           className="hero-banner-main-title"
//           fontSize={["3rem", "3.5rem", "5rem"]}
//         >
//           {" "}
//           {heroBanner.midText}
//         </Text>
//       </Box>
//       <Box className="hero-banner-huge-title-box">
//         <Text
//           className="hero-banner-huge-title"
//           fontSize={["7.5rem", "9rem", "15rem"]}
//           ml={["-6.7rem", "-11rem", "-13rem"]}
//         >
//           {" "}
//           {heroBanner.largeText1}
//         </Text>
//       </Box>
//     </VStack>

//     <Spacer />

//     <Box
//       className="hero-banner-image-box"
//       w={["10.2rem", "15rem", "20rem"]}
//       h={["10.2rem", "15rem", "20rem"]}
//     >
//       <img
//         src={urlFor(heroBanner.image)}
//         alt="banner Image"
//         className="hero-banner-image"
//       />
//     </Box>
//   </Stack>
//   <Box className="hero-banner-button-box" mb={6} mt={5} ml={10}>
//     <Button className="hero-banner-button" size={["md", "lg", "lg"]}>
//       Click Me
//     </Button>
//   </Box>
//   <Box className="hero-banner-desc-box" mt={["-3rem", "auto"]}>
//     <Box className="hero-banner-desc-up-text-box">
//       <Text
//         className="hero-banner-desc-up-text"
//         fontSize={["0.7rem", "0.78rem", "2rem"]}
//       >
//         Description
//       </Text>
//     </Box>
//     <Box className="hero-banner-desc-main-text-box">
//       <Text
//         className="hero-banner-desc-main-text"
//         fontSize={["0.6rem", "0.7rem", "2rem"]}
//         ml={["10rem", "12rem", "15rem"]}
//         lineHeight={["0.8rem", "1rem", "2rem"]}
//       >
//         {heroBanner.desc}
//       </Text>
//     </Box>
//   </Box>
// </Box>
