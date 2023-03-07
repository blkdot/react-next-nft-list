import '../styles/globals.css'
import "@fontsource/ubuntu";
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react'
import CSSReset from "@chakra-ui/css-reset";
import { theme } from '../theme'

import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
} from 'wagmi'

import { publicProvider } from 'wagmi/providers/public'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

// Configure chains & providers.
const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
])

// Set up client using the wagmi
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi.sh',
      },
    }),
  ],
  provider,
  webSocketProvider,
})

function MyApp({ Component, pageProps }: AppProps) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && 
        <ChakraProvider theme={theme}>
          <CSSReset />
            <WagmiConfig client={client}>
              <Component {...pageProps} />
            </WagmiConfig>
        </ChakraProvider>
      }
    </>
  )
}

export default MyApp
