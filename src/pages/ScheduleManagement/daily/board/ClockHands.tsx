import React, { useState, useEffect } from 'react';

import { Box, Flex, Text } from '@chakra-ui/react';
import { TriangleUpIcon } from '@chakra-ui/icons';

type Props = {
  distance: string;
  // setScrollPosition: React.Dispatch<React.SetStateAction<number>>;
};

function ClockHands({ distance }: Props) {
  const [leftPosition, setLeftPosition] = useState<number>(() => {
    return new Date().getHours() * 200 + new Date().getMinutes() * 3.3 - 1810;
  });

  useEffect(() => {
    const intervalid = setInterval(() => {
      setLeftPosition((prevLeftPosition) => {
        if (prevLeftPosition >= 3000 || new Date().getHours() < 9) {
          return 0;
        }
        return prevLeftPosition + 3.3;
      });
    }, 60000);
    return () => {
      clearInterval(intervalid);
      // setScrollPosition(leftPosition);
    };
  }, []);
  return (
    <Box position='absolute' top='60px' left={leftPosition} w='20px' height='15px'>
      <TriangleUpIcon w='20px' height='20px' color='text.mainB' />
    </Box>
  );
}

export default ClockHands;
