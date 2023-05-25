import { Flex, Box, Text, Image, Button } from "@chakra-ui/react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Testimonials = () => {
  return (
    <Flex
      pt="5rem"
      pb="3rem"
      gap={"2rem"}
      direction={{ base: "column", lg: "row" }}
      alignItems={{ base: "center", lg: "flex-start" }}
      justifyContent={{ base: "center", md: "flex-start" }}
    >
      <Flex
        direction={"column"}
        p={"2rem"}
        gap="1rem"
        textAlign={{ base: "center", lg: "left" }}
        alignItems={{ base: "center", lg: "flex-start" }}
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <Text
          fontWeight={800}
          color="#242424"
          fontSize={{ base: "30px", md: "40px", lg: "70px" }}
        >
          Testimonials
        </Text>
        <Text maxW={"25rem"} overflowWrap={"break-word"}>
          Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent
          elementum commodo.
        </Text>
        <Button
          alignSelf={{ base: "center", lg: "flex-start" }}
          rightIcon={<MdKeyboardArrowRight style={{ fontSize: "25px" }} />}
          p="1.5rem"
          bgColor={"#E92129"}
          color="white"
          _hover={{ backgroundColor: "" }}
        >
          {" "}
          Explore More
        </Button>
      </Flex>
      {/* second div */}
      <Flex
        p={{ base: "0.5rem", lg: "" }}
        pr="0"
        direction={"column"}
        alignItems={{ base: "center", lg: "flex-start" }}
        justifyContent={{ base: "center", lg: "flex-start" }}
      >
        <Flex
          alignItems={{ base: "center", lg: "stretch" }}
          justifyContent={{ base: "center", lg: "flex-start" }}
          p={{ base: "1rem", lg: "0" }}
          gap="2rem"
        >
          {/* card */}
          <Flex
            w={{ base: "", lg: "80%" }}
            direction={{ base: "column", md: "row" }}
            alignItems={{ base: "center", md: "stretch" }}
            justifyContent={{ base: "center", md: "flex-start" }}
            p="1rem"
            pr={{ base: "1rem", lg: "2rem" }}
            gap="1rem"
            boxShadow={"2px 0px 8px 8px rgba(0, 0, 0, 0.1)"}
          >
            <Image
              src="./Rectangle 1358.png"
              boxSize={{ base: "18%", lg: "25%" }}
            />
            <Flex
              direction="column"
              alignItems={{ base: "center", md: "flex-start" }}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <Text color={"#E4252C"} fontWeight={700} fontSize={"26px"}>
                Adam Smith
              </Text>
              <Text overflow="hidden" textOverflow="ellipsis" whiteSpace="wrap" textAlign={{base:'center',lg:'left'}}>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Imperdiet proin ut urna sit. Varius sed euismod at est, commodo
                sociis dolor. Elit, suspendisse leo id in eu ut arcu, malesuada.
                Nibh suspendisse mauris amet, facilisi. Elit, suspendisse leo id
                in eu ut arcu, malesuada. Nibh suspendisse mauris amet, facilisi
                Nibh suspendisse mauris amet, facilisi. Elit, suspendisse leo id
                in eu ut arcu.”
              </Text>
            </Flex>
          </Flex>
          <Image
            display={{ base: "none", lg: "block" }}
            src="Frame 1000000912.png"
            w="17%"
            h="80%"
            boxShadow={"2px 0px 8px 8px rgba(0, 0, 0, 0.1)"}
            alignSelf={"flex-end"}
          />
        </Flex>
        <Flex gap="1rem" alignSelf={"center"} mt="1rem">
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
  );
};

export default Testimonials;
