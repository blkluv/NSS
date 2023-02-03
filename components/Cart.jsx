import React, { useRef } from "react";

//IMPORT ICONS
import { HiPlusSm, HiMinus } from "react-icons/hi";
import { TiDeleteOutline } from "react-icons/ti";
import { TbShoppingCartOff } from "react-icons/tb";

//IMPORT TOAST
import toast from "react-hot-toast";

import { useStateContext } from "../context/StateContext";

//SANITY CLIENT IMG
import { urlFor } from "../lib/client";

//STRIPE
import getStripe from "../lib/getStripe";

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

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };
  return (
    <>
      <Box className="cart-wrapper" ref={cartRef}>
        <Box className="cart-container">
          <Button className="cart-heading" onClick={() => setShowCart(false)}>
            <TbShoppingCartOff fontSize="20px" />
            <span className="heading">Your Cart</span>
            <span className="cart-num-items">[{totalQuantities} items]</span>
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
                      <Flex direction="column">
                        <Text className="product-details-product-name">
                          {item.artworkName}
                        </Text>
                        <Text className="product-cart-price-tag" ml={2}>
                          {item.price} €
                        </Text>
                      </Flex>
                    </Box>

                    <HStack mt={"5rem"}>
                      <Box>
                        <HStack className="flex-bottom">
                          <Text className="artwork-details-quantity">
                            <span
                              onClick={() =>
                                toggleCartItemQuantity(item._id, "dec")
                              }
                            >
                              <HiMinus />
                            </span>
                          </Text>
                          <Text className="artwork-quantity-num ">
                            <span>{item.quantity}</span>
                          </Text>
                          <Text className="artwork-details-quantity">
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
                  <Text className="cart-bottom-price">
                    {totalPrice} <span>€</span>
                  </Text>
                </HStack>
              </Box>
              <Box
                className="pay-btn-container"
                mt={5}
                justifyContent="right"
                alignItems="right"
              >
                <button
                  className="stripe-btn text-btn"
                  onClick={handleCheckout}
                >
                  Pay with Stripe
                </button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Cart;
