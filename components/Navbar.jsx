import React from "react";
import Link from "next/link";
// import { motion } from "framer-motion";
// import { navVariants } from "../utils/motion";

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
      {/* <motion.nav variants={navVariants} initial="show" whileInView="show"> */}
      <Box height={10}>
        <Flex>
          <Box m={2}>
            <Flex>
              <HStack>
                <IoCubeOutline size="20px" />
                <Text className="navbar-logo-title">
                  <Link href="/">[metanodes.lab]</Link>
                </Text>
              </HStack>
            </Flex>
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
      {/* </motion.nav> */}
    </>
  );
};
export default Navbar;
