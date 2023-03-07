import Head from 'next/head';
import Header from './Header';
import {
  Box,
  Container
} from '@chakra-ui/react'

type HomeProps = {
  children: any;
  title: string;
}

const Home = ({ children, title }: HomeProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main id="landing">
        <Container mt={20} py={10} maxW='container.xl'>
          {children}
        </Container>
      </main>
    </>
  );
};

export default Home;
