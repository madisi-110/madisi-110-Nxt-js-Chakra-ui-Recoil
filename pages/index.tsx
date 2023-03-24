import {
  Box,
  ChakraProvider,
  Grid,
  GridItem,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import styles from '../styles/Home.module.css';
import ChatFooter from './chat-footer';
import UsersChat from './users-chat';
import UsersPanel from './users-panel';

export default function Home() {
  return (
    <RecoilRoot>
      <ChakraProvider>
        {/* <div> */}
        <Head>
          <title>Create Next App</title>
        </Head>
        <SimpleGrid columns={2} spacingX="40px" m={10} gap={10}>
          <Box>
            <UsersPanel />
          </Box>
          <VStack>
            <SimpleGrid columns={1} spacingY="1000%">
              <Box>
                <UsersChat />
              </Box>
              <Box>
                <ChatFooter />
              </Box>
            </SimpleGrid>
          </VStack>
        </SimpleGrid>
      </ChakraProvider>
    </RecoilRoot>
  );
}
