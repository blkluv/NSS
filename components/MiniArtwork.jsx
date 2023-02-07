import React, { useState } from "react";
import Link from "next/link";

//IMPORT IMAGES from client
import { urlFor } from "../lib/client";

// IMPORT CHAKRA tools
import { Text, Box, Flex, Spacer } from "@chakra-ui/react";

//IMPORT ICONS
import { TbActivityHeartbeat, TbEyeCheck } from "react-icons/tb";

//IMPORT Context as hook
import { useStateContext } from "../context/StateContext";

const MiniArtwork = ({
  artwork: {
    image,
    slug,
    buttonBuy,
    shortDesc,
    price,
    largenumber,
    artistName,
    blockDesc,
  },
}) => {
  const { qty, onAdd, setShowCart } = useStateContext();

  // const handleBuyNow = () => {
  //   onAdd(artwork, qty);
  //   setShowCart(true);
  // };
  return (
    <>
      <article className="miniature-artwork-display-section">
        <Box>
          <Link href={`/artwork/${slug.current}`}>
            <Flex>
              <Box className="miniature-artwork-image-box">
                <img
                  src={urlFor(image && image[0])}
                  alt="Product Image"
                  className="miniature-artwork-image"
                />
              </Box>
              <Box className="miniature-artwork-largeNumber-box">
                <Text className="miniature-artwork-largeNumber">
                  {largenumber}
                </Text>
              </Box>
            </Flex>
          </Link>
          <Box>
            <article className="miniature-artwork-artistName-icon-section">
              <Flex>
                <Box>
                  <TbActivityHeartbeat size="20px" />
                </Box>
                <Box>
                  <Text className="miniature-artwork-artistName">
                    {artistName}
                  </Text>
                </Box>
              </Flex>
            </article>
            <article className="miniature-artwork-blockchain-price-section">
              <Flex>
                <Box>
                  <Text className="miniature-artwork-blockDesc">
                    {blockDesc}
                  </Text>
                </Box>
                <Spacer />
                <Box className="miniature-artwork-price-div">
                  <Text className="miniature-artwork-price">
                    {price} <span className="euro-price-span">€</span>
                  </Text>
                </Box>
              </Flex>
            </article>
          </Box>

          <article className="miniature-artwork-shortDesc-section">
            <Box>
              <Text className="miniature-artwork-shortDesc">
                {shortDesc}{" "}
                <span className="miniature-artwork-readMore-span">
                  read more
                </span>
              </Text>
            </Box>
          </article>
          <Box className="miniature-artwork-btn-buy-now-box">
            {/* <button
              className="buy-now-btn miniature-artwork-btn"
              onClick={handleBuyNow}
            >
              <Flex justifyContent="center">
                <span className="logo-btn">
                  <TbPaperBag size="25px" />
                </span>
                <span className="text-btn">{buttonBuy}</span>
              </Flex>
            </button> */}
            <Link href={`/artwork/${slug.current}`}>
              <button className="buy-now-btn miniature-artwork-btn">
                <Flex justifyContent="center">
                  <span className="logo-btn">
                    <TbEyeCheck size="25px" />
                  </span>
                  <span className="text-btn">View</span>
                </Flex>
              </button>
            </Link>
          </Box>
        </Box>
      </article>
    </>
  );
};

export default MiniArtwork;
