import React from "react";

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

const topArt = ({ headArt }) => {
  return (
    <>
      <section className="hero-banner-section">
        <Box>
          <Flex>
            <Box>
              <Text className="hero_banner-huge-title">
                {headArt.largeText1}
              </Text>
            </Box>
            <Box>
              <BsArrow90DegRight
                size="110px"
                className="hero_banner-icon-enter"
              />
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex>
            <Box>
              <Text className="hero_banner-desc">
                Dear artists,
                <br /> <br />
                What follow is the MetaNodes mission.
                <br /> <br />
                Decentralize yourself!
              </Text>
            </Box>
            <Box className="hero_banner-huge-title a-letter">
              {headArt.largeText2}
            </Box>
          </Flex>
        </Box>
        <Flex className="section-img">
          <Box>
            <VStack>
              <Box>
                <img
                  src={urlFor(headArt.image)}
                  alt="banner Image"
                  className="hero-banner-image"
                />
              </Box>
              <Box>
                <Text className="hero_banner-img-desc">
                  {headArt.imageDesc}
                </Text>
              </Box>
            </VStack>
          </Box>
          <Box>
            <VStack>
              <Text className="hero_banner-huge-title pe-letter">
                {headArt.largeText3}
              </Text>
              <button className="read-me-btn">{headArt.buttonText}</button>
            </VStack>
          </Box>
        </Flex>
      </section>
    </>
  );
};

export default topArt;
