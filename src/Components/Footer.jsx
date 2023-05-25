import { Flex, Text, Image, Button, Input } from "@chakra-ui/react";
import { HiLocationMarker } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";

import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <Flex direction="column" border="2px solid red">
      <Flex
        display={{ base: "none", md: "block" }}
        position={{ base: "relative", md: "absolute" }}
        mt={{ base: "-4rem" }}
      >
        <Image w="65%" src="./Frame 48096261.svg" />
      </Flex>
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        gap={{ base: "2rem", md: "0" }}
        bgColor="black"
        color="white"
        p={{ base: "1rem", md: "5rem 3rem" }}
        border="2px solid teal"
        alignItems={{ base: "stretch", md: "stretch" }}
        justifyContent={{ base: "stretch", md: "stretch" }}
      >
        {/* phone email address */}
        <Flex flex="1" direction="column" gap="1rem">
          <Flex alignItems={"center"} gap="1rem">
            <BsTelephoneFill style={{ fontSize: "22px" }} />
            <Text>+92 300 1234567</Text>
          </Flex>
          <Flex alignItems={"center"} gap="1rem">
            <MdMail style={{ fontSize: "22px" }} />
            <Text>info@nixxsol.com</Text>
          </Flex>
          <Flex alignItems={"center"} gap="1rem">
            <HiLocationMarker style={{ fontSize: "22px" }} />
            <Text w="50%">
              Lorem ipsum dolor sit amet consectetur. Dui libero lectus pulvinar
              mattis a.
            </Text>
          </Flex>
        </Flex>
        {/* stay in connection */}
        <Flex flex="1" direction={"column"} gap="1rem">
          <Flex justifyContent={"space-between"}>
            <Text _hover={{ cursor: "pointer" }}>About</Text>
            <Text _hover={{ cursor: "pointer" }}>Services</Text>
            <Text _hover={{ cursor: "pointer" }}>Portfolio</Text>
            <Text _hover={{ cursor: "pointer" }}>Contact us</Text>
          </Flex>
          <Text fontWeight={700} fontSize={"24px"} mt="1rem">
            Stay in Conection
          </Text>
          <Flex
            bgColor={"#272727"}
            p="0.5rem"
            borderRadius={"8px"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap="0.5rem"
          >
            <Input type="text" placeholder="Email Address" border="none" />
            <Button
              p="0.5rem 1rem"
              bgColor={"#E92129"}
              color="white"
              _hover={{ backgroundColor: "" }}
            >
              {" "}
              Contact Us
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        direction={{ sm: "row", md: "row" }}
        color={"white"}
        bgColor={"#E4252C"}
        p={{ base: "1rem", md: "1.5rem 3rem" }}
        justifyContent={"space-between"}
      >
        <Text fontSize={{ base: "12px", md: "14px" }}>
          © 2022 Nixxsol All Rights Reserved.
        </Text>
        <Flex gap="1rem">
          <Image src="./fb.svg" boxSize={{ base: "1rem", md: "1.3rem" }} />
          <Image src="./insta.svg" boxSize={{ base: "1rem", md: "1.3rem" }} />
          <Image src="./twitter.svg" boxSize={{ base: "1rem", md: "1.3rem" }} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
