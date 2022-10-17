import React from "react";

//IMPORT client api from internal folder
import { client } from '../lib/client'

//IMPORT Internal components
import { Product, FooterBanner, HeroBanner } from "../components";
// IMPORT CHAKRA tools
import {
  Box,
  Flex,
  Stack,
  Text,
  ButtonGroup,
  UnorderedList,
  ListItem,
  Button,
  Container,
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
        <section className="home-main-section">
          <Box>{products?.map((product) => product.name)}</Box>
        </section>
        <FooterBanner />
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