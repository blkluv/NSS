import React from "react";
import Link from "next/link";
import { RiShoppingCartLine } from "react-icons/ri";

import { Cart } from "./Cart";
import { useStateContext } from "../context/StateContext";

import { Spacer, Box, Flex, Text } from "@chakra-ui/react";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <>
      <Box height={10}>
        <Flex>
          <Box m={2}>
            <Text className="navbar-logo-title">
              <Link href="/">MTNlabs - DIGITART SHOP</Link>
            </Text>
          </Box>
          <Spacer />
          <Box m={2}>
            <button
              type="button"
              className="cart-icon"
              onClick={() => setShowCart(true)}
            >
              <RiShoppingCartLine />
              <span className="cart-item-qty">{totalQuantities}</span>
            </button>
            {showCart && <Cart />}
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default Navbar;
