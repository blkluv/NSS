import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

// IMPORT CHAKRA tools
import { Text, Box, Stack } from "@chakra-ui/react";
import artwork from "../green-magpie/schemas/artwork";

const MiniArtwork = ({ artwork: { image, slug } }) => {
  return (
    <>
      <Box>
        <Link href={`/artwork/${slug.current}`}>
          <Box>
            <img
              src={urlFor(image && image[0])}
              alt="Product Image"
              //   className="nftDrop-image"
            />
          </Box>
        </Link>
      </Box>
    </>
  );
};

export default MiniArtwork;
