import React, { useState } from 'react';
import styled from 'styled-components';
import * as C from '../../../components/styled-component/CommonComponent';
import * as S from '../../../components/styled-component/TodoComponent';
import { Container, Box, Flex, Grid, GridItem, HStack, Button, Text } from '@chakra-ui/react';
import { AddIcon, EditIcon } from '@chakra-ui/icons';

import DayJS from 'react-dayjs';
import day from 'dayjs';

const DateHeader = styled.h3`
  font-size: 32px;
  margin: 0;
  padding: 12px 0px;
`;

const GridBlock = () => {
  const blocks = [];
  for (let i = 0; i < 14; i++) {
    blocks.push(<GridItem w='100%' h='100%' _hover={{ bg: 'blue.100' }} />);
  }
  return blocks;
};

function DailySchedule() {
  const TIME_ONE = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];
  const TIME_TWO = ['16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];

  const date = day();

  return (
    <>
      <Flex direction='column' justify='center' align='center' w='100%' bg='white' borderRadius='lg' boxShadow='rgba(149, 157, 165, 0.2) 0px 4px 12px'>
        <DateHeader>
          <DayJS format='YYYY MMM DD'>{date}</DayJS>
        </DateHeader>
        <Box w='full'>
          <Box py='8'>
            <Flex px='6' alignItems='center' justifyContent='space-between'>
              {TIME_ONE.map((time) => (
                <span>{time}</span>
              ))}
            </Flex>
            <Box bg='gray.100' mx='10' h='4em' p='1' borderRadius='lg'>
              <Grid templateColumns='repeat(14, 1fr)' gap={0} h='100%'>
                <GridItem w='100%' h='100%' bg='blue.500' _hover={{ bg: 'blue.100' }}>
                  <Box w='100%' h='100%' bg='purple.500'></Box>
                </GridItem>
              </Grid>
            </Box>
          </Box>
          <Box>
            <Flex px='6' alignItems='center' justifyContent='space-between'>
              {TIME_TWO.map((time) => (
                <span>{time}</span>
              ))}
            </Flex>
            <Box bg='gray.100' mx='10' h='4em' borderRadius='lg'>
              <Grid templateColumns='repeat(14, 1fr)' gap={0} h='100%'>
                {/* {GridBlock()} */}
              </Grid>
            </Box>
          </Box>
          <HStack spacing={4} align='center' justify='flex-end' px='10' py='4'>
            <Button colorScheme='twitter' size='md'>
              <Text pr='1'> 일정수정/삭제</Text>
              <EditIcon />
            </Button>
            <Button colorScheme='twitter' size='md'>
              <Text pr='1'>일정 추가 </Text>
              <AddIcon />
            </Button>
          </HStack>
        </Box>
      </Flex>
    </>
  );
}

export default DailySchedule;
