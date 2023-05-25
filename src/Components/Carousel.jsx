import { Flex, Box, Image } from "@chakra-ui/react";

const Carousel = () => {
  const cards = [
    { id: "1", src: "./image 13.png" },
    { id: "2", src: "./image 13.png" },
    { id: "3", src: "./image 14.png" },
    { id: "4", src: "./image 15.png" },
    { id: "5", src: "./image 16.png" },
  ];
  const cardsList = cards.map((item) => {
    return (
      <Box
        key={item.id}
        // display={{item.id ==='1'?}}
        p="0.5rem"
        borderRadius={"10px"}
        boxShadow={"2px 2px 2px 2px rgba(0, 0, 0, 0.1)"}
      >
        <Image src={item.src} />
      </Box>
    );
  });

  const card = (item) => {
    return (
      <Box
        key={item.id}
        // display={{item.id ==='1'?}}
        p="0.5rem"
        borderRadius={"10px"}
        boxShadow={"2px 2px 2px 2px rgba(0, 0, 0, 0.1)"}
      >
        <Image src={item.src} />
      </Box>
    );
  };
  return (
    <Flex
      p={{ base: "1rem", md: "10rem 3rem" }}
      gap={{base:"1rem", md:'3rem'}}
      justifyContent={"space-between"}
    >
      {cardsList}
    </Flex>
  );
};

export default Carousel;
