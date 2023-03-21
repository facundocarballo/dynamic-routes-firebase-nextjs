import React from 'react';
import { Image, Heading, VStack, Box, HStack, Spacer, Text, Link, Button, Input } from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link';

export default function Home() {
  // Attributes
  const [userID, setUserID] = React.useState('');
  // Methods
  // Component
  return (
    <>
      <Head>
        <title>Dynamic Routes - NextJS</title>
        <meta name="description" content="Dynamic Routes - NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack w='full'>
        <Box h='10px' />
        <Heading color='black'>Home Page</Heading>
        <HStack
          w='full'
          h='2px'
          bg='gray.200'
        />
        <Box h='10px' />

        {/* Desktop View */}
        <HStack w='full' display={{ lg: 'flex', md: 'flex', sm: 'none', base: 'none' }}>
          <Box w='50px' />
          <VStack w='40%'>
            <Text
              color='black'
              align='justify'
            >
              {"In this video I will explain you how to solve the classic Dynamic Routes problem when we have to deployed on Firebase Hosting. To this, I create a simple website, where that will contain a home page and dynamics subpages that will imitate the behavior of user profile page. Where the user ID will determinate the information that our web will display. And that ID comes from the URL."}
            </Text>
            <Box h='10px' />
            <Text color='gray.700'>Search User by ID</Text>
            <HStack w='full'>
              <Input
                value={userID}
                onChange={(e) => setUserID(e.currentTarget.value)}
                color='black'
                placeholder="Insert the user id"
                border="2px solid #ccc"
                
              />
              <NextLink href={`./user/${userID}`} >
                <Button variant='go'>GO</Button>
              </NextLink>
            </HStack>
          </VStack>
          <Spacer />
          <Image
            src='https://i.ibb.co/27kxxMx/miniatura-en.png'
            alt='img'
          />
          <Box w='50px' />
        </HStack>

        {/* Mobile View */}
        <VStack w='full' display={{ lg: 'none', md: 'none', sm: 'flex', base: 'flex' }}>
          <Image
            src='https://i.ibb.co/27kxxMx/miniatura-en.png'
            alt='img'
          />
          <Text
            color='black'
            align='justify'
            w='40%'
          >
            {"In this video I will explain you how to solve the classic Dynamic Routes problem when we have to deployed on Firebase Hosting. To this, I create a simple website, where that will contain a home page and dynamics subpages that will imitate the behavior of user profile page. Where the user ID will determinate the information that our web will display. And that ID comes from the URL."}
          </Text>
        </VStack>


        <Box h='10px' />
        <Heading color='black'>Links</Heading>
        <HStack
          w='full'
          h='2px'
          bg='gray.200'
        />
        <Box h='10px' />
        <HStack w='full'>
          <Spacer />
          <Button variant="code">
            <Link isExternal href='https://www.youtube.com'>Source Code</Link>
          </Button>
          <Box w='50px' />
          <Button variant="youtube">
            <Link isExternal href='https://www.youtube.com'>YouTube Video</Link>
          </Button>
          <Spacer />
        </HStack>
      </VStack>
    </>
  )
}
