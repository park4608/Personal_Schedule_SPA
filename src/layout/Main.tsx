import React from 'react';
import { Container, extendTheme } from '@chakra-ui/react';

type ChildType = {
  children: React.ReactNode;
};

function Main({ children }: ChildType) {
  return (
    <Container maxW='3xl' minW='1450px' h='100%' centerContent justifyContent='center'>
      {children}
    </Container>
  );
}

export default Main;
