import React from "react";
//IMPORT MOTION
import { motion } from "framer-motion";



//IMPORT client api from internal folder
import { client } from "../lib/client";

//IMPORT Internal components
import {  FooterBanner, TopArt, Artwork} from "../components";
// IMPORT CHAKRA tools
import { Box, Stack, Text } from "@chakra-ui/react";

//IMPORT MOTION TOOLS
// import { staggerContainer, textVariant1 } from "../utils/motion";


const Home = ({  products, bannerData, footerBannerData, headArtData, artworks }) => (
  <>
    <section className="home-section">
      <section className="home-banner-section">
        <Box>
          <TopArt headArt={headArtData.length && headArtData[0]} />
        </Box>
      </section>
      <section >
      <Box mb={["10rem", "10rem", "15rem"]} mt={["4rem", "7rem", "7rem"]}>
        
          <Text
            className="notable-collection-title"
          >
            [Latest NFT Drop]
          </Text>
        
        <Box >
          {artworks?.map((artwork) => (
            <Artwork key={artwork._id} artwork={artwork} />
          ))}
        </Box>
      </Box>
      </section>
      <section>
        <FooterBanner
          footerBanner={footerBannerData.length && footerBannerData[0]}
        />
        {console.log(footerBannerData)}
    
      </section>
    </section>
  </>
);

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


  return {
    props: { products,  bannerData, footerBannerData, headArtData, artworks },
  };
};

export default Home;
