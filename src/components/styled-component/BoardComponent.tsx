import React, { forwardRef, ReactNode } from 'react';
import styled from 'styled-components';
import { Button, Text, Flex, Box } from '@chakra-ui/react';

export const DateHeader = styled.h3`
  font-size: 32px;
  margin: 0;
  padding: 12px 0px;
`;
type Props = {
  children: ReactNode;
  bgColor: string;
};

export const ShowSampleBox = ({ children, bgColor }: Props) => {
  return (
    <Box w='300px' h='60px' backgroundColor={bgColor} px={3} py={2} borderRadius={6} fontSize='xm' textColor='text.mainW'>
      {children}
    </Box>
  );
};
