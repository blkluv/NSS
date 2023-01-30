import React from "react";
import Link from "next/link";

//IMPORT ICON
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoCubeOutline } from "react-icons/io5";

//IMPORT CART + CONTEXT
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

//IMPORT CHAKRA TOOLS
import { HStack, Spacer, Box, Flex, Text } from "@chakra-ui/react";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <>
      <Box height={10}>
        <Flex>
          <Box m={2}>
            <HStack>
              <IoCubeOutline size="20px" />
              <Text className="navbar-logo-title">
                <Link href="/">[metanodes.lab]</Link>
              </Text>
            </HStack>
          </Box>
          <Spacer />
          <Box m={2}>
            <button
              type="button"
              className="cart-icon"
              onClick={() => setShowCart(true)}
            >
              <HiOutlineShoppingCart />
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
