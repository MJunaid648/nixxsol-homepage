import "./App.css";
import { Flex } from "@chakra-ui/react";

import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import BookMeeting from "./Components/BookMeeting";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";

function App() {
  return (
    <Flex direction="column" gap="2rem">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <BookMeeting />
      <Carousel />
      <Footer />
    </Flex>
  );
}

export default App;
