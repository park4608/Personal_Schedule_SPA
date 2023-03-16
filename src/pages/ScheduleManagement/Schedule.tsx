import React from 'react';
import DailySchedule from './DailySchedule';
import styled from 'styled-components';
import * as C from '../../components/styled-component/CommonComponent';
// import Widget from './../../../../../weather-app/src/components/widget/Widget';

const Box = styled.div`
  width: 100%;
  /* padding: 0; */
  /* height: 250px; */
  border: 1px solid black;
`;

const ScheduleFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  min-width: 1000px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const DateHeader = styled.h3`
  font-size: 32px;
  margin: 0;
  padding: 12px 0px;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ToDoWidget = styled.div`
  /* border: 1px solid black; */
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  height: 450px;
  min-width: 450px;
  max-width: 600px;
`;

function Schedule() {
  return (
    <C.Container>
      <ScheduleFrame>
        <DateHeader>Sat. 4 Mar</DateHeader>
      </ScheduleFrame>
    </C.Container>
  );
}

export default Schedule;
