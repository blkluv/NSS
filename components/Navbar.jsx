import React from "react";
import Link from "next/link";

//IMPORT ICON
import { RiShoppingCartLine } from "react-icons/ri";

//IMPORT CART + CONTEXT
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

//IMPORT CHAKRA TOOLS
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
