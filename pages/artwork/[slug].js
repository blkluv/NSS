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
    artworkName,
    cat,
    price,
    blockDesc,
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
        <Box className="artwork-detail-main-container">
          <Box className="artwork-detail-fat-line" />
          <Box className="artwork-detail-content-container">
            <Box>
              <Flex>
                <Box className="artwork-detail-img-box">
                  <img
                    alt="banner Image"
                    className="product-details-img"
                    src={urlFor(image && image[0])}
                  />
                </Box>
                <Box className="artwork-detail-content-top-text">
                  <Text>{largenumber}</Text>
                </Box>
              </Flex>
            </Box>
            <Box className="artwork-detail-cat-name-container">
              <Flex>
                <Box>
                  <HStack>
                    {/* <Icon /> */}
                    <Text>{cat}</Text>
                  </HStack>
                </Box>
                <Box>
                  <HStack>
                    {/* <Icon /> */}
                    <Text>{artistName}</Text>
                  </HStack>
                </Box>
              </Flex>
            </Box>
            <Box className="artwork-detail-artwork-name-container">
              <Text>{artworkName}</Text>
            </Box>
            <Box className="artwork-detail-block-price-container">
              <Flex>
                <Box>
                  <Text>{blockDesc}</Text>
                </Box>
                <Box>
                  <Text>{price}</Text>
                </Box>
              </Flex>
            </Box>
            <Box className="artwork-detail-desc-container">
              <Text>{desc}</Text>
              <Text>Quantity</Text>
            </Box>
            <Box>
              <Flex>
                <Box>
                  <Button>ALOHA</Button>
                </Box>
                <Box>
                  <Button>CIAO</Button>
                </Box>
              </Flex>
            </Box>
          </Box>
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
