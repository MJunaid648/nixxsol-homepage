import { Flex, Box, Text, Image, Button } from "@chakra-ui/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const card = (
  <Flex
    direction="column"
    p="1rem"
    w="fit-content"
    alignItems={"center"}
    bgColor={"white"}
    boxShadow={"8px 8px 8px rgba(0, 0, 0, 0.1)"}
    gap="1rem"
    borderRadius={"10px"}
  >
    <Image src="./conical flask.svg" boxSize={"32px"} />
    <Text fontWeight={"600"} fontSize={"18px"}>
      Branding Design
    </Text>
    <Text color="#525252" width={"15rem"} textAlign={"center"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt
      sed mi posuere in amet turpis nunc, nisl.
    </Text>
  </Flex>
);

const Services = () => {
  return (
    <Flex direction="column" bgColor={"#F8F8F8"} fontFamily={"sans-serif"}>
      <Box
        h={{ base: "auto", lg: "15rem" }}
        textAlign={"center"}
        p="1rem"
        background={
          "linear-gradient(120.79deg, #E92129, #242424,#242424, #242424, #242424 , #E92129)"
        }
      >
        <Text fontSize={"50px"} fontWeight={800} color="#E92129">
          Services
        </Text>
      </Box>
      <Flex
        position={{ base: "relative", lg: "absolute" }}
        mt={{ base: "0", lg: "7rem" }}
        alignItems={"center"}
        justifyContent={"center"}
        p={{ base: "1rem", md: "2rem 3rem" }}
        flexWrap={"wrap"}
        gap="2rem"
      >
        {card} {card} {card} {card} {card} {card} {card} {card}
      </Flex>
      <Flex
        direction={{ base: "column", lg: "row" }}
        alignItems={{ base: "center", lg: "flex-start" }}
        justifyContent={{ base: "center", md: "flex-start" }}
        gap={"1rem"}
        mt={{ base: "0", lg: "40rem" }}
      >
        <Flex
          direction={"column"}
          flex="5"
          p={"2rem 0"}
          pl="3rem"
          gap="1rem"
          alignItems={{ base: "center", lg: "flex-start" }}
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          <Text
            fontWeight={800}
            color="#242424"
            fontSize={{ base: "30px", md: "40px", lg: "70px" }}
          >
            Portfolio
          </Text>
          <Text w={"25rem"}>
            Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus
            praesent elementum commodo.
          </Text>
          <Button
            alignSelf={{ base: "center", lg: "flex-start" }}
            p="1.5rem"
            bgColor={"#E92129"}
            color="white"
            _hover={{ backgroundColor: "" }}
          >
            {" "}
            Contact Us
          </Button>
        </Flex>
        {/* iuugj */}
        <Flex
          flex="6"
          direction={"column"}
          // pb="10rem"
          gap="1rem"
          // border="2px solid red"
        >
          <Flex gap="1rem" p={{ base: "0rem", lg: "0rem" }}>
            <Flex
              display={{ base: "none", lg: "flex" }}
              w="80%"
              bgImage="url('./Rectangle 1394.png')"
              bgPosition={"cover"}
              direction={"column-reverse"}
            >
              <Image
                src="./games.png"
                w="15rem"
                _hover={{ cursor: "pointer" }}
              />
            </Flex>
            <Image
              display={{ base: "block", lg: "none" }}
              // w="100%"
              src="./gam.svg"
            />
            <Image
              display={{ base: "none", lg: "block" }}
              alignSelf={"flex-end"}
              w="20%"
              h="80%"
              src="./Rectangle 1395.png"
              alt=""
            />
          </Flex>
          <Flex gap="1rem" alignSelf={"center"}>
            <Box gap="0.5rem" _hover={{ cursor: "pointer" }}>
              <MdKeyboardArrowLeft
                style={{
                  backgroundColor: "#E92129",
                  fontSize: "25px",
                  color: "white",
                  borderRadius: "50%",
                }}
              />
            </Box>
            <Box gap="0.5rem" _hover={{ cursor: "pointer" }}>
              <MdKeyboardArrowRight
                style={{
                  backgroundColor: "#E92129",
                  fontSize: "25px",
                  color: "white",
                  borderRadius: "50%",
                }}
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex py="1rem" justifyContent={"center"} bgColor="black" gap="1rem">
        <Image
          w="18%"
          display={{ base: "none", md: "block" }}
          src="./image 8.png"
        />
        <Image w="18%" src="./image 9.png" />
        <Image w="18%" src="./image 10.png" />
        <Image w="18%" src="./image 11.png" />
        <Image w="18%" src="./image 12.png" />
      </Flex>
    </Flex>
  );
};

export default Services;
