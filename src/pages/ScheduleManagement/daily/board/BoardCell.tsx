import React, { useState } from 'react';
import { useCellStore } from '../../../../store/store';
import dayjs from 'dayjs';
import axios from 'axios';

import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

type BoardData = {
  startTime: string;
  endTime: string;
  content: string;
  bgColor: string;
};

function BoardCell({ startTime, endTime, content, bgColor }: BoardData) {
  const [hover, sethover] = useState(false);
  const { deleteData } = useCellStore();

  const calColspan = (start: string, end: string) => {
    const startTime: string[] = start.split(':');
    const endTime: string[] = end.split(':');

    const hour = parseInt(endTime[0]) - parseInt(startTime[0]);
    const minute = parseInt(endTime[1]) - parseInt(startTime[1]);
    const result = hour * 2 + minute / 30;
    return result;
  };

  const calColStart = (start: string) => {
    const startTime: string[] = start.split(':');
    const hour = parseInt(startTime[0]) - 9;
    const minute = parseInt(startTime[1]);
    const result = hour * 2 + minute / 30;
    return result;
  };

  const DeleteData = () => {
    let timeData = { startTime: startTime, endTime: endTime };
    axios.delete('http://localhost:8080/scheduleBoard', { data: { ...timeData } }).then((e) => {
      console.log(e);
      deleteData(timeData);
    });
  };

  return (
    <GridItem w='100%' h='100%' colSpan={calColspan(startTime, endTime)} colStart={1 + calColStart(startTime)}>
      <Flex direction='column' w='100%' h='100%' bg={bgColor} px={3} py={1} borderRadius={6} fontSize='xm' textColor='text.mainW' onMouseOver={() => sethover(true)} onMouseLeave={() => sethover(false)}>
        <Box h='24px' position='relative'>
          {hover ? (
            <Box position='absolute' top='0' right='0'>
              <EditIcon mx={1} _hover={{ cursor: 'pointer' }} />
              <DeleteIcon mx={1} _hover={{ cursor: 'pointer' }} onClick={DeleteData} />
            </Box>
          ) : null}
        </Box>
        <Text w='100%'>{content}</Text>
      </Flex>
      {/* <Grid h='100%' bg={bgColor} px={3} py={1} borderRadius={6} fontSize='xm' textColor='text.mainW'>
        <GridItem h='100%'>
          <Box>
            <EditIcon mx={2} _hover={{ cursor: 'pointer' }} />
            <DeleteIcon mx={2} _hover={{ cursor: 'pointer' }} onClick={DeleteData} />
          </Box>
        </GridItem>
        <GridItem h='100%'>
          <Text w='100%'>{content}</Text>
        </GridItem>
      </Grid> */}
    </GridItem>
  );
}

export default BoardCell;
