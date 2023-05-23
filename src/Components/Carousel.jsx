import {
  Flex,
  Box,
  Text,
  Image,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";

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
        p="2rem"
        borderRadius={"10px"}
        boxShadow={"2px 2px 2px 2px rgba(0, 0, 0, 0.1)"}
      >
        <Image src={item.src} />
      </Box>
    );
  });
  return (
    <Flex p="5rem 10rem" gap="3rem" justifyContent={"center"}>
      {cardsList}
    </Flex>
  );
};

export default Carousel;
