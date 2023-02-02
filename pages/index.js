import React, { useEffect, useState } from "react";
import $ from "jquery";
import Image from "next/image";
//IMPORT MOTION
import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
//IMPORT client api from internal folder
import { client } from "../lib/client";

//IMPORT Internal components
import { FooterBanner, TopArt, Artwork } from "../components";
// IMPORT CHAKRA tools
import { Flex, Box, VStack, Text} from "@chakra-ui/react";

import { BiGhost } from "react-icons/bi";

//IMPORT MOTION TOOLS
// import { staggerContainer, textVariant1 } from "../utils/motion";

//Import IMAGES
import ShopNodeQR from "../dist/img/MetaNodesLab-stripe.png";



const Home = ({ footerBannerData, headArtData, artworks, explorerBannerData }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if ($(window).width() <= 470) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <>
      {isMobile ? (
        <section className="home-section">
          <section>
            <Box>
              <TopArt headArt={headArtData.length && headArtData[0]} />
            </Box>
          </section>

          <section className="nftDrop-section">
            <Box>
              <Text className="nftDrop-title">[Latest NFT Drop]</Text>
            </Box>
            <Box>
              <VStack className="nftDrop-artist-name-and-number-div">
                <Box className="nftDrop-artist-name-box">
                  <Text className="nftDrop-artist-name-text">VINAY</Text>
                </Box>
                <Box className="nftDrop-artist-number-box">
                  <Text className="nftDrop-artist-number">01</Text>
                </Box>
              </VStack>

              <AnimatePresence>
              <Box className="nftDrop-artwork-div">
                {artworks?.map((artwork) => (
                  <motion.div
                  className="artwork-container"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                >
                  <Artwork key={artwork._id} artwork={artwork} explorerBanner={explorerBannerData.length && explorerBannerData[0]}/>
                  </motion.div>
                ))}
              </Box>
              </AnimatePresence>
            </Box>
          </section>

          <section>
            <FooterBanner
              footerBanner={footerBannerData.length && footerBannerData[0]}
            />
            {console.log(footerBannerData)}
          </section>
        </section>
      ) : (
        <Box className="prompt-not-smartphone-section">
          <Flex
            justifyContent="center"
            alignItems="center"
            className="prompt-not-smartphone-div"
          >
            <Box mr="4rem">
              <BiGhost size="70px" className="prompt-not-smartphone" />
            </Box>
            <Box className="prompt-not-smartphone">
              This website has been designed as mobile-only.
              <br />
              Please use a smartphone to view the content.
            </Box>
          </Flex>
          <Flex justifyContent="center" alignItems="center" mt="4rem">
            <Box>
              <Image
                width="200px"
                height="200px"
                objectFit="cover"
                src={ShopNodeQR}
                alt="qr-code"
              />
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const artworkQuery = '*[_type == "artwork"]';
  const artworks = await client.fetch(artworkQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const headArtQuery = '*[_type == "headArt"]';
  const headArtData = await client.fetch(headArtQuery);

  const footerBannerQuery = '*[_type == "footerBanner"]';
  const footerBannerData = await client.fetch(footerBannerQuery);

  const explorerBannerQuery = '*[_type == "explorerBanner"]';
  const explorerBannerData = await client.fetch(explorerBannerQuery);


  

  return {
    props: { products, bannerData,  footerBannerData, headArtData, artworks, explorerBannerData },
  };
};

export default Home;
