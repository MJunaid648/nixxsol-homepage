import { Flex, Box, Text, Image, Button } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <Flex
      fontFamily={"Proxima Nova"}
      p="2rem 3rem"
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Image src="./logo.svg" alt="logo" />
      <Flex gap="2rem" alignItems={"center"}>
        <Text fontSize={"14px"}>About</Text>
        <Flex gap="0.5rem" alignItems={"center"} _hover={{cursor:'pointer'}}>
          <Text fontSize={"14px"}>IT Services</Text>
          <Box >
          <MdKeyboardArrowDown
            style={{
              backgroundColor: "#E92129",
              color: "white",
              borderRadius: "50%",
            }}
          />
          </Box>
        </Flex>
        <Text fontSize={"14px"}>Portfolio</Text>
        <Button
          p="1.5rem"
          bgColor={"#E92129"}
          color="white"
          _hover={{ backgroundColor: "" }}
        >
          {" "}
          Contact Us
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
