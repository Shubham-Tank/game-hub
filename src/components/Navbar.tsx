import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/game-hub-logo.webp";

const Navbar = () => {
	return (
		<HStack>
			<Image src={logo} boxSize="60px" padding="8px" borderRadius="15px" />
			<Text>Navbar</Text>
		</HStack>
	);
};

export default Navbar;
