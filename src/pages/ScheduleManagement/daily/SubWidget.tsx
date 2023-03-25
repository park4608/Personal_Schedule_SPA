import React from 'react';
import styled from 'styled-components';
import * as C from '../../../components/styled-component/CommonComponent';
import { Container, Box, Flex, Grid, GridItem, HStack, Button } from '@chakra-ui/react';

import DailyToDo from './todos/DailyToDo';
import OverduePlan from './OverduePlan';
import Graph from './Graph';
import Clock from '../../../components/clock/Clock';

type CHILD_TYPE = {
  children: React.ReactNode;
};

const WidgetFrame = ({ children }: CHILD_TYPE) => {
  return (
    <Box display='flex' alignItems='center' justifyContent='center' w='450px' h='390px' p={4} bg='#fff' borderRadius='lg' boxShadow='rgba(149, 157, 165, 0.2) 0px 4px 12px' _hover={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 1px 3px' }}>
      {children}
    </Box>
  );
};

function SubWidget() {
  return (
    <Flex justify='space-between' w='100%' mt='6' bg='#F8F9FA'>
      <WidgetFrame>
        <DailyToDo />
      </WidgetFrame>
      <WidgetFrame>
        <OverduePlan />
      </WidgetFrame>
      <WidgetFrame>
        {/* <Graph />
        <Clock /> */}
        <Button textColor='red.600'>test</Button>
      </WidgetFrame>
    </Flex>
  );
}

export default SubWidget;
