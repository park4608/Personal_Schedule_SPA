import React from 'react';
import dayjs from 'dayjs';

import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';

type BoardData = {
  startTime: string;
  endTime: string;
  content: string;
  bgColor: string;
};

function BoardCell({ startTime, endTime, content, bgColor }: BoardData) {
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
  return (
    <GridItem w='100%' h='100%' colSpan={calColspan(startTime, endTime)} colStart={1 + calColStart(startTime)}>
      <Box w='100%' h='100%' bg='purple.500' px={3} py={1} borderRadius={6} fontSize='xm' textColor='text.mainW'>
        {content}
      </Box>
    </GridItem>
  );
}

export default BoardCell;
