import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" width="100%" py={4} textAlign="center" bg="gray.200">
      <Text>© 2023 Todo App</Text>
    </Box>
  );
};

export default Footer;