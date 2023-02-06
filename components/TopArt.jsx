import React from "react";

//Import IMAGES from client
import { urlFor } from "../lib/client";

//IMPORT ICON
import { BsArrow90DegRight } from "react-icons/bs";

// IMPORT CHAKRA tools
import {
  Container,
  Box,
  Stack,
  Text,
  Flex,
  VStack,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const topArt = ({ headArt }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <section className="hero-banner-section">
        <Box>
          <Flex>
            <Box>
              <Text className="hero_banner-huge-title">
                {headArt.largeText1}
              </Text>
            </Box>
            <Box>
              <BsArrow90DegRight
                size="110px"
                className="hero_banner-icon-enter"
              />
            </Box>
          </Flex>
        </Box>
        <Box>
          <Flex>
            <Box>
              <Text className="hero_banner-desc">
                Dear artists,
                <br /> <br />
                What follow is the MetaNodes mission.
                <br /> <br />
                Decentralize yourself!
              </Text>
            </Box>
            <Box className="hero_banner-huge-title a-letter">
              {headArt.largeText2}
            </Box>
          </Flex>
        </Box>
        <Flex className="section-img">
          <Box>
            <VStack>
              <Box>
                <img
                  src={urlFor(headArt.image)}
                  alt="banner Image"
                  className="hero-banner-image"
                />
              </Box>
              <Box>
                <Text className="hero_banner-img-desc">
                  {headArt.imageDesc}
                </Text>
              </Box>
            </VStack>
          </Box>
          <Box>
            <VStack>
              <Text className="hero_banner-huge-title pe-letter">
                {headArt.largeText3}
              </Text>
              <button className="read-me-btn" onClick={onOpen}>
                {headArt.buttonText}
              </button>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent className="modal-body-section">
                  <ModalHeader className="modal-body-title">
                    How to use the payment terminal{" "}
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody className="modal-body-container">
                    <Text className="modal-body-text">
                      This website serves only as a portfolio and has no
                      commercial intention. However, you can add art pieces to
                      the cart and simulate a purchase using the Stripe
                      Terminal.
                      <br />
                      <br />
                      Please note that this is just a test mode and no actual
                      funds will be transferred from any account.
                      <br />
                      <br />
                      To validate a payment use: <br />
                      <span className="no-working">card number:</span>{" "}
                      <span className="numbers"> 4242 4242 4242 4242</span>
                      <br />
                      <span className="no-working">CVC:</span>
                      <span className="numbers"> 567</span>
                      <br />
                      <br /> I have no working relationship with Vinay. I only
                      use his images that I discovered on the Unsplash website.
                    </Text>
                  </ModalBody>

                  <ModalFooter>
                    <button className="modal-body-btn" onClick={onClose}>
                      Close
                    </button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </VStack>
          </Box>
        </Flex>
      </section>
    </>
  );
};

export default topArt;
