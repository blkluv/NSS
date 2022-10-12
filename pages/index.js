import React from "react";

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

export default function Home() {
  return (
    <>
      <section className="home-section">
        <section className="home-banner-section">
          <Box>
            <HeroBanner />
          </Box>
        </section>
        <section className="home-main-section">
          <Box>{["Product 1", "Product 2"].map((product) => product)}</Box>
        </section>
        <section className="home-footer-section">
          <FooterBanner />
        </section>
      </section>
    </>
  );
}
