import { Flex, Box, Text, Image, Button } from "@chakra-ui/react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Testimonials = () => {
  return (
    <Flex pt="5rem" pb="3rem"  gap="2rem">
      <Flex
        direction={"column"}
        //   flex="5"
        p={"2rem 0"}
        pl="3rem"
        gap="1rem"
      >
        <Text fontWeight={800} color="#242424" fontSize={"80px"}>
          Testimonials
        </Text>
        <Text w={"25rem"}>
          Lorem ipsum dolor sit amet consectetur. Nunc viverra faucibus praesent
          elementum commodo.
        </Text>
        <Button
          alignSelf={"flex-start"}
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
      <Flex direction={"column"}>
        <Flex alignItems={"flex-end"}>
          <Flex
            h="100%"
            p="1rem"
            pb="3rem"
            pr="2rem"
            gap="1rem"
            boxShadow={"2px 0px 8px 8px rgba(0, 0, 0, 0.1)"}
          >
            <Image src="./Rectangle 1358.png" alignSelf={"flex-start"} />
            <Flex direction="column">
              <Text color={"#E4252C"} fontWeight={700} fontSize={"26px"}>
                Adam Smith
              </Text>
              <Text>
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
          <Image h="80%" src="Frame 1000000912.png" />
        </Flex>
        <Flex gap="1rem" mt='1rem' ml="35rem">
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
