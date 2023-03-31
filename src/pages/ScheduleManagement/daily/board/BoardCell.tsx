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
      <Flex w='100%' h='100%' bg={bgColor} px={3} py={1} borderRadius={6} fontSize='xm' textColor='text.mainW' onMouseOver={() => sethover(true)} onMouseLeave={() => sethover(false)}>
        <Text w='65%'>{content}</Text>
        {hover ? (
          <Box>
            <EditIcon style={{ cursor: 'pointer' }} />
            <DeleteIcon style={{ cursor: 'pointer' }} onClick={DeleteData} />
          </Box>
        ) : null}
      </Flex>
    </GridItem>
  );
}

export default BoardCell;
