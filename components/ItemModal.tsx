import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

import {
  Flex,
  Link,
  SimpleGrid,
  Image,
  Heading,
  Text,
  Stack,
  StackDivider,
  Container,
  List,
  ListItem,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react';

import { formatDateFromNow, parseJsonObject, shortAddr } from 'helpers';
import { ICollection, ICollectionMetadata } from 'types';
import CollectionDetailSkeleton from 'components/common/skeletons/CollectionDetailSkeleton';

const initCollection: ICollection = {
  amount: '',
  block_number_minted: '',
  contract_type: '',
  last_metadata_sync: '',
  last_token_uri_sync: '',
  metadata: '',
  name: '',
  symbol: '',
  token_address: '',
  token_hash: '',
  token_id: '',
  token_uri: '',
  updated_at: '',
}

const initCollectionMetadata: ICollectionMetadata = {
  image: '',
  name: '',
  attributes: [],
  description: ''
}

const ItemModal = (props: {isOpen: boolean, onClose: any, collection: ICollection, metadata: ICollectionMetadata, ownerAddress: string}) => {

  const {isOpen, onClose, collection, metadata, ownerAddress} = props

  console.log('collection==>', collection)

  const dividerColor =useColorModeValue('gray.100', 'gray.700');
  const titleColor = useColorModeValue('gray.500', 'gray.300');

  return (
    <Modal onClose={onClose} isOpen={isOpen} >
      <ModalOverlay />
      <ModalContent maxW={960}>
        <ModalHeader>NFT Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection={'column'} gap={8}>
            <Container maxW={'5xl'} py={12}>
              {collection?.token_id === '' &&
                <CollectionDetailSkeleton />
              }
              {collection?.token_id !== '' &&
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <Flex>
                    <Image
                      rounded={'md'}
                      alt={'image'}
                      src={metadata?.image}
                      objectFit={'cover'}
                      width={480}
                      fallbackSrc='/images/default.png'
                    />
                  </Flex>
                  <Stack spacing={5}>
                    <Heading as='h3' size='lg'>{metadata?.name}</Heading>
                    <Stack
                      spacing={2}
                      divider={
                        <StackDivider
                          borderColor={dividerColor}
                        />
                      }>
                      <Text
                        fontSize={'md'}
                        color={titleColor}
                        fontWeight={'600'}
                      >
                        Details
                      </Text>
                      <List spacing={2}>
                        <ListItem>
                          <Flex justifyContent={'space-between'} fontSize={'sm'} fontWeight={300}>
                            <Text as={'span'}>
                              Contract Address
                            </Text>
                            <Link
                              _hover={{
                                textDecoration: 'none',
                              }}
                              href={`https://etherscan.io/address/${collection?.token_address}`}
                              isExternal
                            >
                              {shortAddr(collection?.token_address)}
                            </Link>
                          </Flex>
                        </ListItem>
                        <ListItem>
                          <Flex justifyContent={'space-between'} fontSize={'sm'} fontWeight={300}>
                            <Text as={'span'}>Token ID</Text>
                            <Text as={'span'}>{collection.token_id}</Text>
                          </Flex>
                        </ListItem>
                        <ListItem>
                          <Flex justifyContent={'space-between'} fontSize={'sm'} fontWeight={300}>
                            <Text as={'span'}>Owner Address</Text>
                            <Link
                              _hover={{
                                textDecoration: 'none',
                              }}
                              href={`https://etherscan.io/address/${collection?.token_address}`}
                              isExternal
                            >
                              {shortAddr(ownerAddress)}
                            </Link>
                          </Flex>
                        </ListItem>
                        <ListItem>
                          <Flex justifyContent={'space-between'} fontSize={'sm'} fontWeight={300}>
                            <Text as={'span'}>Token Standard</Text>
                            <Text as={'span'}>{collection.name}</Text>
                          </Flex>
                        </ListItem>
                        <ListItem>
                          <Flex justifyContent={'space-between'} fontSize={'sm'} fontWeight={300}>
                            <Text as={'span'}>Last Metadata Updated</Text>
                            <Text as={'span'}>{formatDateFromNow(collection.last_metadata_sync)}</Text>
                          </Flex>
                        </ListItem>
                      </List>
                    </Stack>
                    <Stack
                      spacing={2}
                      divider={
                        <StackDivider
                          borderColor={dividerColor}
                        />
                      }>
                      <Text
                        fontSize={'md'}
                        color={titleColor}
                        fontWeight={'600'}
                      >
                        Attributes
                      </Text>
                      <Flex gap={3}>
                        {metadata.attributes.map((attr, i) => (
                          <Tag size="md" key={i} variant='subtle' colorScheme='cyan'>
                            {attr}
                          </Tag>
                        ))}
                      </Flex>
                    </Stack>
                    <Stack
                      spacing={2}
                      divider={
                        <StackDivider
                          borderColor={dividerColor}
                        />
                      }>
                      <Text
                        fontSize={'md'}
                        color={titleColor}
                        fontWeight={'600'}
                      >
                        Type
                      </Text>
                      <Flex gap={3}>
                        <Tag size="md" variant='subtle' colorScheme='cyan'>
                          {metadata.description}
                        </Tag>
                      </Flex>
                    </Stack>
                    <Stack
                      spacing={2}
                    >
                       <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                        href={`https://opensea.io/assets/ethereum/${collection?.token_address}/${collection?.token_id}`}
                        isExternal
                        fontSize={'md'}
                        px={6}
                        py={2}
                        bg={'gray.800'}
                        color={'white'}
                        borderRadius={5}
                        width={'fit-content'}
                      >
                        Buy
                      </Link>
                    </Stack>
                  </Stack>
                  
                </SimpleGrid>
              }
            </Container>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
};

export default ItemModal