import {
  Flex,
  Stack,
  SimpleGrid,
  Skeleton,
  useColorModeValue,
  StackDivider,
  Text,
  List,
  ListItem
} from '@chakra-ui/react';

const CollectionDetailSkeleton = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Flex>
        <Skeleton height='28rem' width='100%' />

      </Flex>
      <Stack spacing={5}>
        <Skeleton height='1rem' width='10%' />
        <Skeleton height='1.5rem' width='50%' />

        <Stack
          spacing={2}
          divider={
            <StackDivider
              borderColor={useColorModeValue('gray.100', 'gray.700')}
            />
          }>
          <Text
            fontSize={'md'}
            color={useColorModeValue('gray.500', 'gray.300')}
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
                <Skeleton height='1rem' width='40%' />
              </Flex>
            </ListItem>
            <ListItem>
              <Flex justifyContent={'space-between'} fontSize={'sm'} fontWeight={300}>
                <Text as={'span'}>Token ID</Text>
                <Skeleton height='1rem' width='40%' />
              </Flex>
            </ListItem>
            <ListItem>
              <Flex justifyContent={'space-between'} fontSize={'sm'} fontWeight={300}>
                <Text as={'span'}>Token Standard</Text>
                <Skeleton height='1rem' width='40%' />
              </Flex>
            </ListItem>
            <ListItem>
              <Flex justifyContent={'space-between'} fontSize={'sm'} fontWeight={300}>
                <Text as={'span'}>Last Metadata Updated</Text>
                <Skeleton height='1rem' width='40%' />
              </Flex>
            </ListItem>
          </List>
        </Stack>
        <Stack
          spacing={2}
          divider={
            <StackDivider
              borderColor={useColorModeValue('gray.100', 'gray.700')}
            />
          }>
          <Text
            fontSize={'md'}
            color={useColorModeValue('gray.500', 'gray.300')}
            fontWeight={'600'}
          >
            Attributes
          </Text>
          <Flex gap={3}>
            <Skeleton height='1rem' width='10%' />
            <Skeleton height='1rem' width='10%' />
            <Skeleton height='1rem' width='10%' />
            <Skeleton height='1rem' width='10%' />
          </Flex>
        </Stack>
        <Stack
          spacing={2}
          divider={
            <StackDivider
              borderColor={useColorModeValue('gray.100', 'gray.700')}
            />
          }>
          <Text
            fontSize={'md'}
            color={useColorModeValue('gray.500', 'gray.300')}
            fontWeight={'600'}
          >
            Type
          </Text>
          <Flex gap={3}>
            <Skeleton height='1rem' width='10%' />
          </Flex>
        </Stack>
      </Stack>
    </SimpleGrid>
  );
};

export default CollectionDetailSkeleton;
