import { Flex, Text, Image } from "@chakra-ui/react";

const Hero = () => {
  const stats = [
    { id: "1", num: "100", text: "Happy Clients" },
    { id: "2", num: "05", text: "Years in business" },
    { id: "3", num: "50", text: "Total Members" },
  ];
  const statList = stats.map(item=>{
    return (
      <Flex direction="column" fontFamily={"sans-serif"} alignItems={"center"} key={item.id}>
        <Text fontWeight={800} fontSize={"50px"}>
          {item.num}
          <Text as="span" color="#E92129">
            +
          </Text>
        </Text>
        <Text>{item.text}</Text>
      </Flex>
    );
  })

  return (
    <Flex p="2rem 3rem" fontFamily={"sans-serif"}>
      <Flex direction={"column"} flex="1" justifyContent={"space-between"}>
        <Text
          fontSize="80px"
          fontWeight={800}
          bgClip={"text"}
          color={"transparent"}
          backgroundImage=" linear-gradient(120.79deg, #242424 3.25%, #E92129 75.17%)"
          mr="2rem"
        >
          Bridging the gap between ideas and reality
        </Text>
        <Text fontWeight={800} color="#242424" fontSize="80px" mr="4rem">
          About Company
        </Text>
        <Flex justifyContent={"space-between"}></Flex>
      </Flex>
      <Flex
        direction={"column"}
        flex="1"
        justifyContent={"space-between"}
        gap={"2rem"}
      >
        <Image src="./illustration.png" />
        <Text fontSize={"32px"} fontFamily={"sans-serif"}>
          Lorem ipsum dolor sit amet consectetur. Vestibulum nascetur vitae
          sapien{" "}
        </Text>
        <Text fontSize="20px">
          Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis.
          Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In
          ornare nisl leo odio magna.
        </Text>
        <Flex justifyContent={'space-between'} pr='3rem'>
          {statList}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
