import React, { useState, useEffect, useCallback } from 'react';
import { useCellStore } from '../../../../store/store';
import DayJS from 'react-dayjs';
import day from 'dayjs';
import styled from 'styled-components';
import * as C from '../../../../components/styled-component/CommonComponent';
import * as S from '../../../../components/styled-component/TodoComponent';
import * as B from '../../../../components/styled-component/BoardComponent';
import { Container, Box, Flex, Grid, GridItem, HStack, Button, Text } from '@chakra-ui/react';
import { AddIcon, EditIcon } from '@chakra-ui/icons';

import Clock from '../../../../components/clock/Clock';
import BoardCell from './BoardCell';
import AddSchedule from './AddSchedule';
import Board from './../../../../../../capstone_final/capstone/src/components/Board';

const TIME_ONE = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'];

function ScheduleBoard() {
  const date = day();
  const { boardData, fetchData, updateData } = useCellStore();
  // const [data, setData] = useState<BoardData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const click = () => {
    console.log(boardData);
  };

  return (
    <>
      <Box maxW='1450px' bg='white' borderRadius='lg' boxShadow='rgba(149, 157, 165, 0.2) 0px 4px 12px' overflow='hidden' position='relative'>
        <B.DateHeader>
          <Flex alignItems='center' justifyContent='center'>
            <DayJS format='YYYY MMM DD'>{date}</DayJS>
            <Clock />
          </Flex>
        </B.DateHeader>
        <Box w='full' overflowX='auto' h='200px'>
          <Flex px='6' alignItems='center' justifyContent='space-between' w='3080px'>
            {TIME_ONE.map((time, i) => (
              <span key={i}>{time}</span>
            ))}
          </Flex>
          <Box bg='gray.100' mx='10' h='4em' borderRadius='lg' w='3000px'>
            <Grid templateColumns='repeat(30, 1fr)' gap={0} h='100%'>
              {boardData.map((data, i) => (
                <BoardCell startTime={data.startTime} endTime={data.endTime} content={data.content} bgColor={data.bgColor} key={i} />
              ))}
            </Grid>
          </Box>
          {/* <HStack spacing={4} align='center' justify='flex-end' py='20px' pr='30px'>
            
          </HStack> */}
        </Box>
        <Box position='absolute' top='180px' left='1270px'>
          <AddSchedule />
        </Box>
      </Box>
    </>
  );
}

export default ScheduleBoard;
