import React from "react";
import Link from "next/link";

//Import IMAGES from client
import { urlFor } from "../lib/client";

// IMPORT CHAKRA tools
import { Box, Flex, Stack, Text } from "@chakra-ui/react";

const Product = ({ product: { image, slug, itemName, price } }) => {
  return (
    <>
      <Box>
        <Link href={`/product/${slug.current}`}>
          <Box className="product-card">
            <Stack direction="column">
              <Box
                w={["10.2rem", "15rem", "20rem"]}
                h={["10.2rem", "15rem", "20rem"]}
              >
                <img
                  src={urlFor(image && image[0])}
                  alt="Product Image"
                  className="product-image"
                />
              </Box>
              {/* <Box className="product-desc-div">
              <Flex>
                <Text className="product-name">{itemName}</Text>
                <Text className="product-price">${price}</Text>
              </Flex>
            </Box> */}
            </Stack>
          </Box>
        </Link>
      </Box>
    </>
  );
};

export default Product;
