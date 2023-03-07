import { NFT_COLLECTIONS_CLIENT, MORALIS_API_GET_OPTION } from '../helpers/constants';

//Fetch Collections by Contract Address from moralis 
export const fetchCollections = async () => {
  const results = await fetch(`${NFT_COLLECTIONS_CLIENT}?chain=eth&format=decimal&limit=20`, MORALIS_API_GET_OPTION);
  return results.json();
}

//Fetch Collections by Token ID from moralis 
export const fetchCollection = async (id: any) => {
  const results = await fetch(`${NFT_COLLECTIONS_CLIENT}/${id}`, MORALIS_API_GET_OPTION);
  return results.json();
}