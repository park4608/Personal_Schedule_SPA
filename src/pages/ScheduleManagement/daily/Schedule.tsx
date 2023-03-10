import React from 'react';
import styled from 'styled-components';
import * as C from '../../../components/styled-component/CommonComponent';
import { Container, Box, Flex, Grid, GridItem, HStack, Button } from '@chakra-ui/react';
import DailySchedule from './DailySchedule';
import SubWidget from './SubWidget';

const ToDoWidget = styled.div`
  /* border: 1px solid black; */
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  height: 450px;
  min-width: 450px;
  max-width: 600px;
`;
function Schedule() {
  return (
    <>
      <Flex minW='full' minH='90vh' direction='column' alignItems='center' justifyContent='center' bg='#F8F9FA'>
        <DailySchedule />
        <SubWidget />
      </Flex>
    </>
  );
}

export default Schedule;
