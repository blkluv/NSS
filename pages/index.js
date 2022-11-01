import React from "react";

//IMPORT client api from internal folder
import { client } from "../lib/client";

//IMPORT Internal components
import { Product, FooterBanner, HeroBanner } from "../components";
// IMPORT CHAKRA tools
import { Box } from "@chakra-ui/react";

const Home = ({ products, bannerData, footerBannerData }) => (
  <>
    <section className="home-section">
      <section className="home-banner-section">
        <Box>
          <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
        </Box>
      </section>
      <section>
        <Box
          className="home-main-section"
          mb={["10rem", "10rem", "15rem"]}
          mt={["4rem", "7rem", "7rem"]}
        >
          {products?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </Box>
      </section>
      <section>
      <FooterBanner footerBanner={footerBannerData.length && footerBannerData[0]} />
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
