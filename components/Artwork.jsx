import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

// IMPORT CHAKRA tools
import { Box, Stack, Text, Flex, Spacer, HStack } from "@chakra-ui/react";
//IMPORT ICONS
import { TbEyeCheck } from "react-icons/tb";

const Artwork = ({
  artwork: { image, slug, artworkName, blockDesc, price },
}) => {
  return (
    <>
      <Box className="artwork-main-wrapper">
        <Link href={`/artwork/${slug.current}`}>
          <Box>
            <Stack direction="column">
              <Box>
                <img
                  src={urlFor(image && image[0])}
                  alt="Product Image"
                  className="nftDrop-image"
                />
              </Box>
              <Text className="artwork-detail-artwork-name-text nftDrop-text">
                {artworkName}
              </Text>
              <HStack>
                <Text className="artwork-detail-block-text">{blockDesc}</Text>

                <Spacer />

                <Text className="artwork-detail-price-text">
                  {price} <span className="euro-price-span">€</span>
                </Text>
              </HStack>

              <button className="buy-now-btn miniature-artwork-btn ">
                <Flex justifyContent="center">
                  <span className="logo-btn">
                    <TbEyeCheck size="25px" />
                  </span>
                  <span className="text-btn">Discover</span>
                </Flex>
              </button>
            </Stack>
          </Box>
        </Link>
      </Box>
    </>
  );
};

export default Artwork;
