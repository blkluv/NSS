import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

// IMPORT CHAKRA tools
import { Box, Stack } from "@chakra-ui/react";

const Artwork = ({ artwork: { image, slug } }) => {
  return (
    <>
      <Box>
        <Link href={`/artwork/${slug.current}`}>
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
            </Stack>
          </Box>
        </Link>
      </Box>
    </>
  );
};

export default Artwork;
