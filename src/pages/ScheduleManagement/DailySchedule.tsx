import React, { useState } from 'react';
import * as C from '../../components/styled-component/CommonComponent';
import * as S from '../../components/styled-component/TodoComponent';
import ScheduleCalendar from './MonthlyPlan';
import { ToDo } from '../../Data/data';

import './DailySchedule.css';

import DataManagement from '../../Data/DataManagement';

// function DailyTodo() {
//   return (
//     <>
//       <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'middle' }}>
//         <Row gutter={[4, 4]} justify='space-around' align='middle'>
//           {ToDo.map((item, i) => {
//             return (
//               <Col span={6} key={i}>
//                 <S.Frame>
//                   <S.ToDoList Todos={item} />
//                 </S.Frame>
//               </Col>
//             );
//           })}
//         </Row>
//       </div>
//     </>
//   );
// }

function DailyTodo() {
  return (
    <>
      <C.Container>
        <S.TimeList />
      </C.Container>
    </>
  );
}

export default DailyTodo;
