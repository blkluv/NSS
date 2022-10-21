import React from "react";

//IMPORT client api from internal folder
import { client } from '../lib/client'

//IMPORT Internal components
import { Product, FooterBanner, HeroBanner } from "../components";
// IMPORT CHAKRA tools
import {
  Box,

} from "@chakra-ui/react";

const Home = ({ products, bannerData}) =>
   (
    <>
      <section className="home-section">
        <section className="home-banner-section">
          <Box>
            <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
          </Box>
        </section>
        <section >
          <Box className="home-main-section" mb={["10rem", "10rem", "15rem"]} mt={["4rem", "7rem", "7rem"]}>{products?.map((product) => <Product key={product._id} product={product} />)}</Box>
        </section>
        <FooterBanner footerBanner={bannerData && bannerData[0]}/>
        <section className="home-footer-section"></section>
      </section>
    </>
  );


  export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
  
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
  
    return {
      props: { products, bannerData }
    }
  }

export default Home;