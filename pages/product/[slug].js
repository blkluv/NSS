import React from "react";
import Link from "next/link";

//IMPORT IMAGES from client
import { client, urlFor } from "../../lib/client";

//IMPORT internal components
import { Product } from "../../components";

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

const ProductDetails = ({ product, products }) => {
  const { image, artistName, itemName, details, price } = product;
  const { decQty, incQty, qty, onAdd } = useStateContext();
  return (
    <>
      <section className="product-details-section">
        <Box className="product-details-main-box">
          <Flex
            justifyContent="left"
            alignItems="left"
            direction={["column", "column", "row"]}
          >
            <Box
              className="product-details-img-box"
              // w={["5rem", "20rem", "30rem"]}
              w={"100%"}
              h={["auto"]}
            >
              <img
                alt="banner Image"
                className="product-details-img"
                src={urlFor(image && image[0])}
              />
            </Box>

            <Box className="product-details-right-box">
              <Stack justifyContent="left" alignItems="left" direction="column">
                <Box>
                  <HStack>
                    <Box>
                      <Text
                        className="product-details-artist-name"
                        fontSize={["3rem", "6.5rem", "7rem"]}
                      >
                        {artistName}
                      </Text>
                    </Box>
                    {/* <Spacer /> */}
                    {/* <Box className="product-details-options-box">
                      <Text>options... boxes</Text>
                    </Box> */}
                  </HStack>
                </Box>
                <Box className="product-details-product-name-box">
                  <Text
                    className="product-details-product-name"
                    fontSize={["2.5rem", "6.5rem", "7rem"]}
                  >
                    {itemName}
                  </Text>
                </Box>
                <Stack className="product-details-desc-box" direction="column">
                  <Text
                    className="product-details-details-tag"
                    fontSize={["0.8rem", "1.5rem", "1.2rem"]}
                  >
                    Details:
                  </Text>
                  <Container
                    className="product-details-details-text"
                    fontSize={["0.8rem", "2rem", "1.2rem"]}
                  >
                    {details}
                  </Container>
                </Stack>
                <Stack direction="column" className="product-details-price-box">
                  <Text
                    className="product-details-price-tag"
                    fontSize={["0.8rem", "1.5rem", "1.2rem"]}
                  >
                    Price:
                  </Text>
                  <Text
                    className="product-details-price"
                    fontSize={["1.2rem", "1.7rem", "2.5rem"]}
                  >
                    <span className="product-details-price-span">$</span>{" "}
                    {price}{" "}
                    
                  </Text>
                </Stack>
                <HStack>
                  <Text
                    className="product-details-quantity"
                    fontSize={["0.8rem", "1.5rem", "1.2rem"]}
                  >
                    Quantity
                  </Text>
                  <Box className="product-details-quantity-icons-box">
                    <HStack>
                      <Text>
                        <span
                          className="product-details-quantity-minus"
                          onClick={decQty}
                        >
                          <HiMinus size={"20px"} />
                        </span>
                      </Text>

                      <Text fontSize={["0.8rem", "1.5rem", "1.2rem"]}>
                        <span className="product-details-quantity-num">
                          {qty}
                        </span>
                      </Text>
                      <Text>
                        <span
                          className="product-details-quantity-plus"
                          onClick={incQty}
                        >
                          {" "}
                          <HiPlusSm size={"20px"} />
                        </span>
                      </Text>
                    </HStack>
                  </Box>
                </HStack>
                <Flex justifyContent="center" alignItems="center">
                  <Button
                    className="product-details-add-card-btn"
                    mr={10}
                    onClick={() => onAdd(product, qty)}
                  >
                    ADD TO CART
                  </Button>
                  <Button className="product-details-buy-now-btn" onClick="">
                    BUY NOW
                  </Button>
                </Flex>
              </Stack>
            </Box>
          </Flex>
        </Box>
        <Box className="maylike-products-wrapper">
          <Text
            className="maylike-products-title"
            fontSize={["1.2rem", "1.7rem", "2.5rem"]}
          >
            You may also like
          </Text>
          <Box className="marquee">
            <Box className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
};

//when using getStaticsProps we need to predefine paths
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query); //to get the individual product
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
