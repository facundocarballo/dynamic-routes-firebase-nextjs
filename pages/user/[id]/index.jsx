import React from "react";
import { useRouter } from "next/router";
import NextLink from 'next/link';
import { Heading, VStack, Box, HStack, Text, Button } from "@chakra-ui/react";

export default function UserPage() {
  // Attributes
  const router = useRouter();
  const user_id = router.query.id;

  // Methods
  const isOdd = () => Number(user_id) % 2 != 0;
  // Component
  return (
    <VStack>
      <Box h="10px" />
      <HStack w='full'>
        <Box w='20px' />
        <NextLink href="../">
            <Button variant='back'>
                Back
            </Button>
        </NextLink>
      </HStack>
      <Heading color="black">UserID: {user_id}</Heading>
      <HStack w="full" h="2px" bg="gray.200" />
      <Box h='50px' />
      <Text color="black" fontSize='30px' fontWeight='bold'>
        {isOdd() ? "This user id is odd" : "This user id isn't odd"}
      </Text>
    </VStack>
  );
}
