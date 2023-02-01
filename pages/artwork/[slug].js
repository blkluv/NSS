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
  Spacer,
} from "@chakra-ui/react";

//IMPORT ICONS
import { HiPlusSm, HiMinus } from "react-icons/hi";
import { BsArrow90DegRight } from "react-icons/bs";
import { TbPaperBag, TbActivityHeartbeat } from "react-icons/tb";

import { FaFolder } from "react-icons/fa";
import { GiWheelbarrow } from "react-icons/gi";

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
              <Box className="artwork-detail-img-box">
                <img
                  alt="banner Image"
                  className="artwork-details-img"
                  src={urlFor(image && image[0])}
                />
              </Box>
              <Box className="artwork-detail-largeNumber-box">
                <Text className="artwork-detail-largeNumber-text">
                  {largenumber}
                </Text>
              </Box>
            </Box>
            <Box className="artwork-detail-main-middle-container">
              <Box className="artwork-detail-cat-name-container">
                <Flex justifyContent="left">
                  <Box mt={3}>
                    <HStack>
                      <FaFolder size="20px" className="logo-dark-grey " />
                      <Text className="artwork-detail-cat-text">{cat}</Text>
                    </HStack>
                  </Box>
                  <Spacer />
                  <Box className="artwork-detail-name-container">
                    <HStack>
                      <TbActivityHeartbeat
                        size="40px"
                        className="logo-dark-grey logo-heartbeat"
                      />

                      <Text className="artwork-detail-artistName-text">
                        {artistName}
                      </Text>
                    </HStack>
                  </Box>
                </Flex>
              </Box>

              <Box className="artwork-detail-artwork-name-container">
                <Text className="artwork-detail-artwork-name-text">
                  {artworkName}
                </Text>
              </Box>

              <Box className="artwork-detail-block-price-container">
                <Flex>
                  <Box>
                    <Text className="artwork-detail-block-text">
                      {blockDesc}
                    </Text>
                  </Box>
                  <Spacer />
                  <Box>
                    <Text className="artwork-detail-price-text">
                      {price} <span className="euro-price-span">€</span>
                    </Text>
                  </Box>
                </Flex>
              </Box>
              <Box className="artwork-detail-desc-container">
                <Text className="artwork-detail-desc-text">{desc}</Text>
              </Box>
            </Box>

            <Box className="artwork-detail-quantity-container">
              <HStack>
                <Text className="artwork-details-quantity">Quantity</Text>
                <Box>
                  <HStack>
                    <Text>
                      <span className="artwork-quantity-logo" onClick={decQty}>
                        <HiMinus size="25px" />
                      </span>
                    </Text>

                    <Text>
                      <span className="artwork-quantity-num">{qty}</span>
                    </Text>
                    <Text>
                      <span className="artwork-quantity-logo" onClick={incQty}>
                        <HiPlusSm size="25px" />
                      </span>
                    </Text>
                  </HStack>
                </Box>
              </HStack>
            </Box>

            <Box className="artwork-detail-btn-container">
              <Flex justifyContent="center" alignItems="center">
                <Box mr="2rem">
                  <button className="add-to-cart-btn">
                    <Flex>
                      <span className="logo-btn">
                        <GiWheelbarrow size="25px" />
                      </span>{" "}
                      <span className="text-btn">{buttonAdd}</span>
                    </Flex>
                  </button>
                </Box>
                <Box>
                  <button className="buy-now-btn">
                    <Flex>
                      <span className="logo-btn">
                        <TbPaperBag size="25px" />
                      </span>
                      <span className="text-btn">{buttonBuy}</span>
                    </Flex>
                  </button>
                </Box>
              </Flex>
            </Box>

            <Box className="artwork-detail-alsoLike-container">
              <Flex>
                <Box>
                  <Text className="nftDrop-title artwork-detail-also-like">
                    [You may
                    <br />
                    also like]
                  </Text>
                </Box>
                <Box className="artwork-detail-arrow-container">
                  <BsArrow90DegRight
                    size="200px"
                    className="artwork-detail-icon-enter"
                  />
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
