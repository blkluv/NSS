import React, { useState } from "react";

import { motion } from "framer-motion";
import { staggerContainer, textVariant1, textVariant2, slideIn } from "../../utils/motion";

//IMPORT IMAGES from client
import { client, urlFor } from "../../lib/client";

//IMPORT internal components
import { MiniArtwork } from "../../components";

//IMPORT Context as hook
import { useStateContext } from "../../context/StateContext";

// IMPORT SWIPER FEATURES
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Autoplay, Navigation } from "swiper";

// IMPORT CHAKRA tools
import { Box, Flex, Text, HStack, Spacer } from "@chakra-ui/react";

//IMPORT ICONS
import { HiPlusSm, HiMinus } from "react-icons/hi";
import { BsArrow90DegRight } from "react-icons/bs";
import {
  TbPaperBag,
  TbActivityHeartbeat,

} from "react-icons/tb";

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
    buttonAdd,
    buttonBuy,
  } = artwork;

  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const [index, setIndex] = useState(0);
  const handleBuyNow = () => {
    onAdd(artwork, qty);
    setShowCart(true);
  };

  return (
    <>
      <section className="product-details-section">
      
        <Box className="artwork-detail-main-container">
          <Box className="artwork-detail-fat-line" />
          <Box className="artwork-detail-content-container">
          <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={slideIn('left', 'tween', 0.2, 0.5 )}>
            <Box>
              <Box className="artwork-detail-img-box">
                <img
                  alt="banner Image"
                  className="artwork-details-img"
                  src={urlFor(image && image[index])}
                />
                 
              </Box>
              <Box className="artwork-detail-largeNumber-box">
                <Text className="artwork-detail-largeNumber-text">
                  {largenumber}
                </Text>
              </Box>
            </Box>
            </motion.div>
            
            <Box className="artwork-detail-main-middle-container">
              <Box className="artwork-detail-cat-name-container">
              <motion.div variants={slideIn('left', 'spring', 0.4, 0.8 )}>
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
                </motion.div>
              </Box>

              <Box className="artwork-detail-artwork-name-container">
              <motion.div variants={textVariant1(1.1)}>
                <Text className="artwork-detail-artwork-name-text">
                  {artworkName}
                </Text>
                </motion.div>
              </Box>

              <Box className="artwork-detail-block-price-container">
              <motion.div variants={textVariant1(1.2)}>
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
                </motion.div>
              </Box>

              <Box className="artwork-detail-desc-container">
              <motion.div variants={textVariant1(1.3)}>
                <Text className="artwork-detail-desc-text">{desc}</Text>
                </motion.div>
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
                  <button
                    className="add-to-cart-btn"
                    onClick={() => onAdd(artwork, qty)}
                  >
                    <Flex>
                      <span className="logo-btn">
                        <GiWheelbarrow size="25px" />
                      </span>{" "}
                      <span className="text-btn">{buttonAdd}</span>
                    </Flex>
                  </button>
                </Box>
                <Box>
                  <button className="buy-now-btn" onClick={handleBuyNow}>
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
            </motion.div>

            <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
            <Box className="artwork-detail-alsoLike-container">
              <Flex>
                <Box>
                <motion.div variants={slideIn('left', 'tween', 0.4, 0.8 )}>
                  <Text className="nftDrop-title artwork-detail-also-like">
                    [You may
                    <br />
                    also like]
                  </Text>
                  </motion.div>
                </Box>
                <Box className="artwork-detail-arrow-container">
                <motion.div variants={slideIn('left', 'tween', 0.4, 1.0 )}>
                  <BsArrow90DegRight
                    size="200px"
                    className="artwork-detail-icon-enter"
                  />
                  </motion.div>
                </Box>
              </Flex>
              <Swiper
                slidesPerView={1.5}
                loop={false}
                centeredSlides={false}
                spaceBetween={25}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
              >
                <Box className="miniature-artwork-swiper-box">
                  {artworks?.map((item) => (
                    <SwiperSlide key={item._id}>
                      <MiniArtwork key={item._id} artwork={item} />
                    </SwiperSlide>
                  ))}
                </Box>
              </Swiper>
            </Box>
            </motion.div>
            {/* <Box>
              <TbSortDescending2
                size="200px"
                className="artwork-detail-icon-explore"
              />
            </Box> */}   
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

  const artworks = await client.fetch(query);

  const paths = artworks.map((artwork) => ({
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



  return {
    props: { artworks, artwork  },
  };
};

export default ArtworkDetails;
