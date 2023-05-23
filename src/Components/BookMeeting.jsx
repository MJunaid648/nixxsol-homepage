import {
  Flex,
  Box,
  Text,
  Image,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";

const BookMeeting = () => {
  return (
    <Flex
      p="5rem 3rem"
      gap="5rem"
      background={
        "linear-gradient(120.79deg,  #242424,#242424, #242424, #242424 , #E92129)"
      }
    >
      <Flex
        flex="1"
        direction="column"
        color="#B8B8B8"
        fontSize={"22px"}
        gap="2rem"
      >
        <Flex alignItems={"baseline"} gap="5px">
          <Text color="white">Testimonials</Text>
          <Box w={"3rem"} borderBottom={"2px solid white"}></Box>
        </Flex>
        <Text
          lineHeight={"5rem"}
          fontWeight={800}
          fontSize={"70px"}
          color="#FFFF"
        >
          Book a meeting with us
        </Text>
        <Text>
          Mattis ornare tincidunt tempus mattis mi vel auctor ipsum venenatis.
          Tellus nunc scelerisque dictum sagittis euismod urna egestas quam. In
          ornare nisl leo odio magna.
        </Text>
      </Flex>
      <Flex flex="1" direction={"column"} gap="1rem" alignItems={"center"}>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="tel" placeholder="Phone (Optional)" />
        <Textarea
          placeholder="Tall us about the project you are working on (Optional)"
          h="10rem"
        />
        <Button
          p="1.5rem"
          bgColor={"#E92129"}
          color="white"
          _hover={{ backgroundColor: "" }}
        >
          {" "}
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default BookMeeting;
