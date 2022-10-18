import React from "react";
import Link from "next/link";

//Import IMAGES from client
import { urlFor } from "../lib/client";

// IMPORT CHAKRA tools
import { Box, Flex, Stack, Text, Button } from "@chakra-ui/react";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <>
      <section className="product-section">
        <Box>
          <Link href={`/product/${slug.current}`}>
            <Box className="product-image-box">
              <img
                src={urlFor(image && image[0])}
                alt="Product Image"
                height={250}
                width={250}
                className="product-image"
              />

              <Text className="product-name">{name}</Text>
              <Text className="product-price">ETH{price}</Text>
            </Box>
          </Link>
        </Box>
      </section>
    </>
  );
};

export default Product;
