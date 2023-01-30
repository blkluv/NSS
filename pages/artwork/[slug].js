import React from "react";

//IMPORT IMAGES from client
import { client, urlFor } from "../../lib/client";

//IMPORT internal components
// import { Artwork } from "../../components/Artwork";

//IMPORT Context as hook
import { useStateContext } from "../../context/StateContext";

// IMPORT CHAKRA tools
import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  HStack,
  Container,
} from "@chakra-ui/react";

//IMPORT ICONS
import { HiPlusSm, HiMinus } from "react-icons/hi";
import { RiShoppingCartLine } from "react-icons/ri";
import { TbPaperBag } from "react-icons/tb";

const ArtworkDetails = ({ artwork, artworks }) => {
  const {
    image,
    artistName,
    largenumber,
    cat,
    price,
    desc,
    shortDesc,
    buttonAdd,
    buttonBuy,
  } = artwork;
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };
  return (
    <>
      <section className="product-details-section">
        <Box>
          <img
            alt="banner Image"
            className="product-details-img"
            src={urlFor(image && image[0])}
          />
          <Text>{artistName}</Text>
        </Box>
      </section>
    </>
  );
};

//when using getStaticsProps we need to predefine paths
export const getStaticPaths = async () => {
  const query = `*[_type == "artwork"] {
        slug {
          current
        }
      }
      `;

  const products = await client.fetch(query);

  const paths = products.map((artwork) => ({
    params: {
      slug: artwork.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "artwork" && slug.current == '${slug}'][0]`;
  const artworksQuery = '*[_type == "artwork"]';

  const artwork = await client.fetch(query); //to get the individual product
  const artworks = await client.fetch(artworksQuery);

  console.log(artwork);

  return {
    props: { artworks, artwork },
  };
};

export default ArtworkDetails;
