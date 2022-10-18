import React from "react";
import Link from "next/link";

//Import IMAGES from client
import { client, urlFor } from "../../lib/client";

// IMPORT CHAKRA tools
import { Box, Flex, Stack, Text, Button } from "@chakra-ui/react";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  return (
    <>
      <section className="product-details-section">
        <Box className="product-details-main-box">
          <Box className="product-details-img-box">
            <img src={urlFor(image && image[0])} />
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

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
