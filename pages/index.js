import React from "react";




//IMPORT client api from internal folder
import { client } from "../lib/client";

//IMPORT Internal components
import { Product, FooterBanner, HeroBanner } from "../components";
// IMPORT CHAKRA tools
import { Box, Stack, Text } from "@chakra-ui/react";


const Home = ({ products, bannerData, footerBannerData }) => (
  <>
    <section className="home-section">
      <section className="home-banner-section">
        <Box>
          <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
        </Box>
      </section>
      <section className="home-center-section">
        <Box mb={["10rem", "10rem", "15rem"]} mt={["4rem", "7rem", "7rem"]}>
          <Stack
            justifyContent="center"
            alignItems="center"
            direction="column"
            mb={10}
          >
            <Text
              className="notable-collection-title"
              fontSize={["2.5rem", "3.2rem", "5.3rem"]}
            >
              Notable Collection
            </Text>
            <Text
              className="notable-collection-sub-title"
              fontSize={["1.5rem", "1.9rem", "3rem"]}
            >
              Latest nft drop
            </Text>
          </Stack>
          
          <Box className="home-main-section">
            {products?.map((product) => (
              <Product key={product._id} product={product} />
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

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const footerBannerQuery = '*[_type == "footerBanner"]';
  const footerBannerData = await client.fetch(footerBannerQuery);

  // const footerBannerQuery = '*[_type == "footerBanner"]';
  // const footerBannerData = await client.fetch(footerBannerQuery);

  return {
    props: { products, bannerData, footerBannerData },
  };
};

export default Home;
