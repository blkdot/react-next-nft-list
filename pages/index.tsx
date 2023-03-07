import type { NextPage } from 'next'
import NextLink from "next/link"
import {
  Box,
  Heading,
  Link,
  Text,
  Stack,
} from '@chakra-ui/react';

import Home from '../components/layout/Home';

const App: NextPage = () => {
  return (
    <Home title="NFT Collection">
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          <Text as={'span'} color={'green.400'}>
            View Collections
          </Text>
        </Heading>
        <Text color={'gray.500'}>
          Welcome to this page!<br />
          Users can see the NFT list for CryptoPunks by clicking the bellow button
        </Text>
        <Stack
          direction={'column'}
          spacing={3}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}>
          <NextLink href='/collections' passHref>
            <Link
              color={'white'}
              bg={'green.400'}
              rounded={'full'}
              py={2}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
              View Collection
            </Link>
          </NextLink>
        </Stack>
      </Stack>
    </Home>
  )
}

export default App
