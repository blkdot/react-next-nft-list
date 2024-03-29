import Link from 'next/link';
import { Heading } from '@chakra-ui/react'

const Logo = () => {
  return (
    <Link href="/">
      <Heading as='h4' size='md'>
        NFT Market
      </Heading>
    </Link>
  )
}

export default Logo;