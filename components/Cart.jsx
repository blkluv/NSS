import React, { useRef } from "react";
import Link from "next/link";

//IMPORT ICONS
import { HiPlusSm, HiMinus } from "react-icons/hi";
import { BsReverseBackspaceReverse } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
//, toggleCartItemQuantity, onRemove

import { Spacer, Box, Flex, Text, Button, HStack } from "@chakra-ui/react";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();
  return (
    <>
      <Box className="cart-wrapper" ref={cartRef}>
        <Box className="cart-container">
          <Button className="cart-heading" onClick={() => setShowCart(false)}>
            <BsReverseBackspaceReverse fontSize="20px" />
            <span className="heading">Your Cart</span>
            <span className="cart-num-items">({totalQuantities} items)</span>
          </Button>

          {cartItems.length < 1 && (
            <Box className="empty-cart" my={10}>
              <Text
                className="empty-card_text"
                fontSize={["0.7rem", "1rem", "1rem"]}
              >
                no item
              </Text>

              <Button
                onClick={() => setShowCart(false)}
                className="continue-exploring"
                mt={10}
              >
                Continue Exploring
              </Button>
            </Box>
          )}
          <Box className="product-container" mt={10}>
            {cartItems.length >= 1 &&
              cartItems.map((item) => (
                <Box className="product" key={item._id}>
                  <img
                    src={urlFor(item?.image[0])}
                    alt="product-image"
                    className="cart-product-image"
                  />
                  <Box className="item-desc">
                    <Box className="flex top">
                      <Flex>
                        <Text className="product-details-product-name">
                          {item.itemName}
                        </Text>
                        <Text className="product-cart-price-tag" ml={2}>
                          ETH {item.price}
                        </Text>
                      </Flex>
                    </Box>

                    <HStack mt={10}>
                      <Box>
                        <HStack className="flex-bottom">
                          <Text className="minus">
                            <span
                              onClick={() =>
                                toggleCartItemQuantity(item._id, "dec")
                              }
                            >
                              <HiMinus />
                            </span>
                          </Text>
                          <Text className="num">
                            <span onClick="">{item.quantity}</span>
                          </Text>
                          <Text className="plus">
                            <span
                              onClick={() =>
                                toggleCartItemQuantity(item._id, "inc")
                              }
                            >
                              <HiPlusSm />
                            </span>
                          </Text>
                        </HStack>
                      </Box>
                      <Spacer />
                      <Button
                        className="remove-item"
                        onClick={() => onRemove(item)}
                      >
                        <TiDeleteOutline size={"20px"} />
                      </Button>
                    </HStack>
                  </Box>
                </Box>
              ))}
          </Box>
          {cartItems.length >= 1 && (
            <Box className="cart-bottom">
              <Box className="total">
                <HStack>
                  <Text
                    className="cart-bottom-subtotal"
                    fontSize={["0.8rem", "1.5rem", "1.2rem"]}
                  >
                    Subtotal:
                  </Text>
                  <Spacer />
                  <Text
                    className="cart-bottom-price"
                    fontSize={["0.8rem", "1.5rem", "1.2rem"]}
                  >
                    ETH {totalPrice}
                  </Text>
                </HStack>
              </Box>
              <Box
                className="pay-btn-container"
                mt={5}
                justifyContent="right"
                alignItems="right"
              >
                <Button
                  className="pay-btn"
                  fontSize={["0.8rem", "1.5rem", "1.2rem"]}
                >
                  Pay with Stripe
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Cart;
