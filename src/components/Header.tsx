import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const Header = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"60px"}></Image>
    </HStack>
  );
};

export default Header;