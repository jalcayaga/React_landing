// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ChakraProvider,
//   Box,
//   Image,
//   Heading,
//   Text,
//   Stack,
//   Button,
//   Card,
//   CardBody,
//   CardFooter,
// } from "@chakra-ui/react";

// const HorizontalCard = () => {
//   return (
//     <section>
//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 100 }}
//         transition={{ duration: 0.5 }}
//         className="mt-2 p-3 container-fluid"
//       >
//         <Card
//           direction={{ base: "column", sm: "row" }}
//           overflow="hidden"
//           variant="outline"
//         >
//           <Image
//             objectFit="cover"
//             maxW={{ base: "100%", sm: "200px", lg: "400px"  }}
//             src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
//             alt="Caffe Latte"
//           />

//           <Stack>
//             <CardBody>
//               <Heading size="lg">The perfect latte</Heading>

//               <Text py="2">
//                 Caffè latte is a coffee beverage of Italian origin made with
//                 espresso and steamed milk.
//               </Text>
//             </CardBody>

//             <CardFooter>
//               <Button variant="solid" colorScheme="blue">
//                 Buy Latte
//               </Button>
//             </CardFooter>
//           </Stack>
//         </Card>
//       </motion.div>
//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 100 }}
//         transition={{ duration: 0.5 }}
//         className="mt-2 p-2"
//       >
//         <Card
//           direction={{ base: "column", sm: "row" }}
//           overflow="hidden"
//           variant="outline"
//         >
//           <Stack>
//             <CardBody>
//               <Heading size="lg">The perfect latte</Heading>

//               <Text px="2">
//                 Caffè latte is a coffee beverage of Italian origin made with
//                 espresso and steamed milk.
//               </Text>
//             </CardBody>

//             <CardFooter>
//               <Button variant="solid" colorScheme="blue">
//                 Buy Latte
//               </Button>
//             </CardFooter>
//           </Stack>
        
//           <Image
//                 objectFit="cover"
//                 maxW={{ base: "100%", sm: "200px", lg: "300px" }}
//                 src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
//                 alt="Caffe Latte"
//                 />
//         </Card>
//       </motion.div>
//     </section>
//   );
// };

// export default HorizontalCard;


// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ChakraProvider,
//   Box,
//   Image,
//   Heading,
//   Text,
//   Stack,
//   Button,
//   Card,
//   CardBody,
//   CardFooter,
// } from "@chakra-ui/react";

// const HorizontalCard = () => {
//   return (
//     <section>
//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 100 }}
//         transition={{ duration: 0.5 }}
//         className="mt-2 p-6 container-fluid sm:px-16px flex justify-center items-center bg-black"
//       >
//         <Card
//           direction={{ base: "column", sm: "row" }}
//           overflow="hidden"
//           variant="outline"
//           bg="black"
//         >
//           <Image
//             objectFit="cover"
//             maxW={{base: "100%", sm: "200px", lg: "460px", xl: "600px"}}
//             src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
//             alt="Caffe Latte"
//           />

//           <Stack
//             ml={{ base: 0, lg: "auto" }}
//             justifyContent="center" // Centra verticalmente los elementos en la tarjeta
//             alignItems="center" // Centra horizontalmente los elementos en la tarjeta
//             h="100%" // Asegura que la Stack ocupe todo el alto disponible
//           >
//             <CardBody>
//               <Heading size="lg">The perfect latte</Heading>

//               <Text py="3" fontSize="20">
//                 Caffè latte is a coffee beverage of Italian origin made with
//                 espresso and steamed milk.
//               </Text>
//             </CardBody>

//             <CardFooter>
//               <Button variant="solid" colorScheme="blue">
//                 Buy Latte
//               </Button>
//             </CardFooter>
//           </Stack>
//         </Card>
//       </motion.div>
//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 100 }}
//         transition={{ duration: 0.5 }}
//         className="mt-2 p-6 container-fluid sm:px-16px flex justify-center items-center"
//       >
//         <Card
//           direction={{ base: "column", sm: "row" }}
//           overflow="hidden"
//           variant="outline"
//         >
//           <Stack
//             ml={{ base: 0, lg: "auto", xl: "auto" }}
//             justifyContent="center" // Centra verticalmente los elementos en la tarjeta
//             alignItems="center" // Centra horizontalmente los elementos en la tarjeta
//             h="100%" // Asegura que la Stack ocupe todo el alto disponible
//           >
//             <CardBody>
//               <Heading size="lg">The perfect latte</Heading>

//               <Text py="3" fontSize="20">
//                 Caffè latte is a coffee beverage of Italian origin made with
//                 espresso and steamed milk.
//               </Text>
//             </CardBody>

//             <CardFooter>
//               <Button variant="solid" colorScheme="blue">
//                 Buy Latte
//               </Button>
//             </CardFooter>
//           </Stack>

//           <Image
//             objectFit="cover"
//             maxW={{base: "100%", sm: "200px", lg: "460px", xl: "600px"}}
//             src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
//             alt="Caffe Latte"
//           />
//         </Card>
//       </motion.div>
//     </section>
//   );
// };

// export default HorizontalCard;
import React from "react";
import { motion } from "framer-motion";
import {
  ChakraProvider,
  Box,
  Image,
  Heading,
  Text,
  Stack,
  Button,
  Card,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

const HorizontalCard = () => {
  const cardStyles = {
    fontFamily: "Poppins, sans-serif", // Establece la fuente "Poppins"
  };

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="mt-2 p-6 container-fluid sm:px-16px flex justify-center items-center"
      >
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          bg="black"
          border="none"
          style={cardStyles} // Aplica la fuente "Poppins"
        >
          <Image
            objectFit="cover"
            maxW={{base: "100%", sm: "200px", lg: "460px", xl: "600px"}}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />

          <Stack
            ml={{ base: 0, lg: "auto" }}
            justifyContent="center"
            alignItems="center"
            h="100%"
            color="white"
          >
            <CardBody>
              <Heading size="lg">The perfect latte</Heading>

              <Text py="3" fontSize="20">
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant="solid" colorScheme="blue">
                Buy Latte
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="mt-2 p-6 container-fluid sm:px-16px flex justify-center items-center"
      >
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          bg="black"
          border="none"
          style={cardStyles} // Aplica la fuente "Poppins"
        >
          <Stack
            ml={{ base: 0, lg: "auto", xl: "auto" }}
            justifyContent="center"
            alignItems="center"
            h="100%"
            color="white"
          >
            <CardBody>
              <Heading size="lg">The perfect latte</Heading>

              <Text py="3" fontSize="20">
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant="solid" colorScheme="blue">
                Buy Latte
              </Button>
            </CardFooter>
          </Stack>

          <Image
            objectFit="cover"
            maxW={{base: "100%", sm: "200px", lg: "460px", xl: "600px"}}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />
        </Card>
      </motion.div>
    </section>
  );
};

export default HorizontalCard;
