import React, { useEffect, useState } from 'react';
import $ from 'jquery';
//IMPORT MOTION
import { motion } from "framer-motion";
import Link from "next/link";
//IMPORT client api from internal folder
import { client } from "../lib/client";

//IMPORT Internal components
import { FooterBanner, TopArt, Artwork } from "../components";
// IMPORT CHAKRA tools
import { Flex, Box, Stack, Text } from "@chakra-ui/react";

//IMPORT MOTION TOOLS
// import { staggerContainer, textVariant1 } from "../utils/motion";

const Home = ({ footerBannerData, headArtData, artworks }) => {
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
       <Box className="nftDrop-artwork-div">
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
        
      ) :(
        <div className='prompt-not-smartphone-section'>
          <div className='prompt-not-smartphone-div'>
        <p className='prompt-not-smartphone'>
          This website has been designed for mobile-only.
          <br/>
          Please use a smartphone to view the content.</p>
          </div>
          </div>
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

  return {
    props: { products, bannerData, footerBannerData, headArtData, artworks },
  };
};

export default Home;
