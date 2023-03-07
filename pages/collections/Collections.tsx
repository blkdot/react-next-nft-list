import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import {
  Flex,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react';
import { fetchCollections } from '../../hooks/useCollections';
import Home from 'components/layout/Home';
import CollectionItem from 'components/CollectionItem';
import CollectionSkeleton from 'components/common/skeletons/CollectionSkeleton';

const Collections: NextPage = () => {

  const [collections, setCollections] = useState([]);

  // Fetch collections(limit 20) by token address and set state values(collections)
  useEffect(() => {
    fetchCollections().then((res) => {
      setCollections(res.result)
    })
  }, [])

  return (
    <Home title="NFTList | Collections">
      <Flex flexDirection={'column'} gap={8}>
        <Heading as='h3' size='lg'>
          CryptoPunks
        </Heading>

        {collections.length === 0 &&
          <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            <GridItem w='100%'>
              <CollectionSkeleton />
            </GridItem>
            <GridItem w='100%'>
              <CollectionSkeleton />
            </GridItem>
            <GridItem w='100%'>
              <CollectionSkeleton />
            </GridItem>
            <GridItem w='100%'>
              <CollectionSkeleton />
            </GridItem>
            <GridItem w='100%'>
              <CollectionSkeleton />
            </GridItem>
            <GridItem w='100%'>
              <CollectionSkeleton />
            </GridItem>
            <GridItem w='100%'>
              <CollectionSkeleton />
            </GridItem>
            <GridItem w='100%'>
              <CollectionSkeleton />
            </GridItem>
          </Grid>
        }
        {collections.length !== 0 &&
          <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {collections.map((collection, i) => (
              <GridItem w='100%' key={i}>
                <CollectionItem collection={collection} />
              </GridItem>
            ))}
          </Grid>
        }
      </Flex>
    </Home>
  );
};

export default Collections;
