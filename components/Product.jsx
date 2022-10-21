import React from "react";
import Link from "next/link";

//Import IMAGES from client
import { urlFor } from "../lib/client";

// IMPORT CHAKRA tools
import { Box, Flex, Stack, Text, Button } from "@chakra-ui/react";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <>
      <Box>
        <Link href={`/product/${slug.current}`}>
          <Box className="product-card">
            <Box
              w={["10.2rem", "15rem", "20rem"]}
              h={["10.2rem", "15rem", "20rem"]}
            >
              <img
                src={urlFor(image && image[0])}
                alt="Product Image"
                objectFit="fill"
                className="product-image"
              />
            </Box>
            {/* 
            <Text className="product-name">{name}</Text>
            <Text className="product-price">ETH{price}</Text> */}
          </Box>
        </Link>
      </Box>
    </>
  );
};

export default Product;
