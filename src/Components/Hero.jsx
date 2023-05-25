import { Flex, Text, Image } from "@chakra-ui/react";

const Hero = () => {
  const stats = [
    { id: "1", num: "100", text: "Happy Clients" },
    { id: "2", num: "05", text: "Years in business" },
    { id: "3", num: "50", text: "Total Members" },
  ];
  const statList = stats.map((item) => {
    return (
      <Flex
        direction="column"
        fontFamily={"sans-serif"}
        alignItems={"center"}
        key={item.id}
      >
        <Text
          fontWeight={800}
          fontSize={{ base: "30px", md: "40px", lg: "50px" }}
        >
          {item.num}
          <Text as="span" color="#E92129">
            +
          </Text>
        </Text>
        <Text>{item.text}</Text>
      </Flex>
    );
  });

  return (
    <Flex
      direction={"column"}
      gap={{ base: "2rem", md: "1rem" }}
      p={{ base: "1rem", md: "2rem 3rem" }}
      fontFamily={"sans-serif"}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        flex="1"
        alignItems={{ base: "center", md: "flex-start" }}
        justifyContent={"space-between"}
        gap="2rem"
      >
        <Text
          fontSize={{ base: "30px", md: "40px", lg: "70px" }}
          fontWeight={800}
          textAlign={{ base: "center", md: "left" }}
          bgClip={"text"}
          color={"transparent"}
          backgroundImage=" linear-gradient(120.79deg, #242424 3.25%, #E92129 75.17%)"
          mr="2rem"
        >
          Bridging the gap between ideas and reality
        </Text>
        <Image src="./illustration.png" w={{ base: "80%", md: "50%" }} />
      </Flex>
      <Flex
        direction={{ base: "column", md: "row" }}
        flex="1"
        // flexWrap={{ base: "nowrap", md: "nowrap" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"1rem"}
      >
        <Text
          fontWeight={800}
          color="#242424"
          fontSize={{ base: "30px", md: "40px", lg: "70px" }}
          textAlign={{ base: "center", md: "left" }}
        >
          About Company
        </Text>
        <Flex direction={"column"} w="80%">
          <Text
            fontSize={"32px"}
            fontFamily={"sans-serif"}
            textAlign={{ base: "center", md: "left" }}
          >
            Lorem ipsum dolor sit amet consectetur. Vestibulum nascetur vitae
            sapien{" "}
          </Text>
          <Text fontSize="20px" textAlign={{ base: "center", lg: "left" }}>
            Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis.
            Tellus nunc scelerisque dictum sagittis euismod urna egestas quam.
            In ornare nisl leo odio magna.
          </Text>
          <Flex justifyContent={"space-between"}>{statList}</Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
