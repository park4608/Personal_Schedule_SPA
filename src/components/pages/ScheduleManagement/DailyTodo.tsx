import React, { useState } from 'react';
import * as S from '../../styled-component/TodoComponent';
import ScheduleCalendar from './MonthlyPlan';
import { Col, Row } from 'antd';
import { PlusCircleTwoTone } from '@ant-design/icons';
import { ToDo } from '../../../Data/data';

function DailyTodo() {
  return (
    <>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Row gutter={[16, 16]} justify='center' align='middle'>
          {ToDo.map((item, i) => {
            return (
              <Col span={6} key={i}>
                <S.Frame>
                  <S.ToDoList Todos={item} />
                </S.Frame>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}

export default DailyTodo;
