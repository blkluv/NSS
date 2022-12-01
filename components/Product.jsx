import React from "react";
import Link from "next/link";
//IMPORT MOTION
import { motion } from "framer-motion";
//IMPORT MOTION COMPONENTS
import { staggerContainer, slideIn } from "../utils/motion";
//Import IMAGES from client
import { urlFor } from "../lib/client";

// IMPORT CHAKRA tools
import { Box, Stack } from "@chakra-ui/react";

const Product = ({ product: { image, slug } }) => {
  return (
    <>
      <Box>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={slideIn("down", "tween", 0.1, 1.5)}>
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
          </motion.div>
        </motion.div>
      </Box>
    </>
  );
};

export default Product;
