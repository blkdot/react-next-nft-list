import { ReactNode } from 'react';
import NextLink from 'next/link'
import {
  Box,
  Flex,
  HStack,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import Logo from "../common/Logo"
import { ColorModeSwitcher } from "../common/ColorModeSwitcher"
import { Container } from '@chakra-ui/react'
import WalletConnect from '../common/WalletConnect';

const Links = [
  { name: 'Home', href: '/' },
  { name: 'Collections', href: '/collections' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
];

const NavLink = ({ children, href }: { children: ReactNode, href: string }) => (
  <NextLink href={href} passHref>
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      color={useColorModeValue('gray.600', 'white')}
      fontSize={"sm"}
      fontWeight={600}
    >
      {children}
    </Link>
  </NextLink>
);

const Header = () => {

  return (
    <Box pos="fixed" backdropFilter="blur(10px)" shadow={"sm"} top={0} zIndex={1} w="100%" px={4} bg={useColorModeValue('white', 'gray.900')}>
      <Container maxW='container.xl'>
        <Flex w="100%" h={16} alignItems={'center'} justifyContent={{ base: 'space-between', md: 'center' }}>
          <Flex w="100%" alignItems={"baseline"} gap={10}>
            <Logo />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link, key) => (
                <NavLink key={key} href={link.href}>{link.name}</NavLink>
              ))}
            </HStack>
          </Flex>
          <Flex alignItems={'center'} gap={2}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <WalletConnect />
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header;
