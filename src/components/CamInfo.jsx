import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Text,
  Image,
  Box,
  AbsoluteCenter,
  Container,
  Grid
} from "@chakra-ui/react";

import React from "react";
import styles from "../style";

const CamInfo = () => {
  return (
<Container maxW='md'> 
<Grid templateColumns='repeat(3, 1fr)' gap={5}>
    <Box p="3">
      <Card maxW="xl" bg="black">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="4">
            <Heading size="sm" color="white">Living room Sofa</Heading>
            <Text color="white">
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces
            </Text>
        
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
 </Grid>
 </Container>
  );
};

export default CamInfo;
