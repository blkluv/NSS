import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

// IMPORT CHAKRA tools
import { Text, Box, Stack } from "@chakra-ui/react";
import artwork from "../green-magpie/schemas/artwork";

const Artwork = ({ artwork: { image, slug } }) => {
  return (
    <>
      <Box>
        <Link href={`/artwork/${slug.current}`}>
          <Box>
            <Stack direction="column">
              <Box>
                <img
                  src={urlFor(image && image[0])}
                  alt="Product Image"
                  className="nftDrop-image"
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
