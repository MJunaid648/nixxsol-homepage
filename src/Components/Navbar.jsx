import { Flex, Box, Text, Image, Button, Spacer } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <Flex
      p={{ base: "1rem", md: "2rem" }}
      justifyContent="space-between"
      alignItems="center"
      flexDirection={{ base: "column", md: "row" }} 
    >
      <Image w="100%" maxWidth="300px" src="./logo.svg" alt="logo" />
      <Flex
        mt={{ base: "1rem", md: "0" }}
        gap={{ base: "0.3rem", md: "2rem" }}
        alignItems="center"
      >
        <Text fontSize="14px"  _hover={{ cursor: "pointer" }}>About</Text>
        <Flex gap="0.5rem" alignItems="center" _hover={{ cursor: "pointer" }}>
          <Text fontSize="14px" _hover={{ cursor: "pointer" }}>
            IT Services
          </Text>
          <Box>
            <MdKeyboardArrowDown
             
              style={{
                backgroundColor: "#E92129",
                color: "white",
                borderRadius: "50%",
              }}
            />
          </Box>
        </Flex>
        <Text fontSize="14px" _hover={{ cursor: "pointer" }}>
          Portfolio
        </Text>
        <Spacer />
        <Button
          size="xs"
          p="0.8rem"
          bgColor="#E92129"
          color="white"
          _hover={{ backgroundColor: "" }}
        >
          Contact Us
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
