import Head from 'next/head';
import React from 'react';
import { selector, useRecoilState, useRecoilValue, atom } from 'recoil';
import { Box, Button, Stack, Text, VStack } from '@chakra-ui/react';
import AddNewUser from '../add-user';
import ChatFooter from '../chat-footer';

const getChatUsers = selector({
  key: 'users-selector',
  get: ({ get }) => {
    const users = fetch(`https://jsonplaceholder.typicode.com/users`).then(
      (res) => res.json()
    );
    return users;
  },
});

// const usersListStateAtom = atom({
//   key: 'usersListStateAtom',
//   default: [],
// });

// const getChatUsers = selector({
//   key: 'users-selector',
//   get: ({ get }) => {
//     const users = fetch(`https://jsonplaceholder.typicode.com/users`).then(
//       (res) => res.json()
//     );
//     return users;
//   },
// });

export default function UsersPanel() {
  const usersList = useRecoilValue(getChatUsers);
  // const [userListState, setUserListState] = useRecoilState(usersListStateAtom);
  // const usersListFromSelector = useRecoilValue(getChatUsers);

  console.log('check for users', usersList);
  return (
    <Box bg="teal" p={2}>
      <Head>
        <title>Users</title>
      </Head>
      <VStack>
        {/* <VStack> */}
        <AddNewUser />
        {/* <ChatFooter /> */}
        {/* </VStack> */}
        <VStack>
          {usersList.map((item) => {
            return (
              <Box bg="skyblue" m={2}>
                <Text p={1}>{item.name}</Text>
              </Box>
            );
          })}
        </VStack>
      </VStack>
    </Box>
  );
}
