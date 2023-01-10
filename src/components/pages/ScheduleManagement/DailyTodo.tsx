import React, { useState } from 'react';
import * as S from '../../styled-component/TodoComponent';
import ScheduleCalendar from './MonthlyPlan';
import { Col, Row, Popover } from 'antd';
import { PlusCircleTwoTone } from '@ant-design/icons';

type ToDoType = { id: number; data: string }[];

const ToDo: ToDoType = [
  { id: 0, data: '운동하기 뛰기 걷기 숨쉬기' },
  { id: 1, data: '밥하기' },
  { id: 2, data: '산책하기' },
  { id: 3, data: '게임하기' },
  { id: 4, data: '공부하기' },
  { id: 5, data: '운동하기 뛰기 걷기 숨쉬기' },
  { id: 6, data: '밥하기' },
];

const Frequent: ToDoType = [
  { id: 0, data: '운동하기 뛰기 걷기 숨쉬기adfsafadfs' },
  { id: 1, data: '밥하기' },
  { id: 2, data: '산책하기' },
  { id: 3, data: '게임하기' },
  { id: 4, data: '공부하기' },
  { id: 5, data: '운동하기 뛰기 걷기 숨쉬기' },
  { id: 6, data: '밥하기' },
  { id: 7, data: '산책하기' },
  { id: 8, data: '게임하기' },
  { id: 9, data: '공부하기' },
  { id: 10, data: '운동하기 뛰기 걷기 숨쉬기' },
  { id: 11, data: '밥하기' },
  { id: 12, data: '산책하기' },
  { id: 13, data: '게임하기' },
  { id: 14, data: '공부하기' },
];

const ToDoList = () => {
  const [checkedList, setCheckedList] = useState<ToDoType[]>([]);

  return (
    <>
      {ToDo.map((item) => {
        return (
          <>
            <S.StyledLabel>
              <S.StyledInput type='checkbox' name='checkbox' />
              <Popover content={item.data} placement='topLeft'>
                <S.TodoElement>{item.data}</S.TodoElement>
              </Popover>
            </S.StyledLabel>
            <S.LiDivider />
          </>
        );
      })}
    </>
  );
};

const FrequentToDoList = () => {
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log('clicked');
  };
  return (
    <>
      {Frequent.map((item) => {
        return (
          <>
            <S.TextHiddenLi>
              <Popover content={item.data} placement='topLeft'>
                <S.OverflowHiddenDiv>{item.data}</S.OverflowHiddenDiv>
              </Popover>

              <S.PlusIcon onClick={clickHandler} />
            </S.TextHiddenLi>
            <S.LiDivider />
          </>
        );
      })}
    </>
  );
};

function DailyTodo() {
  return (
    <>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Row gutter={[16, 16]} justify='center' align='middle'>
          <Col span={6}>
            <S.Frame>
              <S.FrameTitle>2023/01/05</S.FrameTitle>
              <ToDoList />
            </S.Frame>
          </Col>
          <Col span={6}>
            <S.Frame>
              <S.FrameTitle>2023/01/05</S.FrameTitle>
              <ToDoList />
            </S.Frame>
          </Col>
          <Col span={6}>
            <S.Frame>
              <S.FrameTitle>2023/01/05</S.FrameTitle>
              <ToDoList />
            </S.Frame>
          </Col>
          <Col span={6}>
            <S.Frame>
              <S.FrameTitle>2023/01/05</S.FrameTitle>
              <ToDoList />
            </S.Frame>
          </Col>

          <Col span={6}>
            <S.Frame>
              <S.FrameTitle>2023/01/05</S.FrameTitle>
              <ToDoList />
            </S.Frame>
          </Col>
          <Col span={6}>
            <S.Frame>
              <S.FrameTitle>2023/01/05</S.FrameTitle>
              <ToDoList />
            </S.Frame>
          </Col>
          <Col span={6}>
            <S.Frame>
              <S.FrameTitle>2023/01/05</S.FrameTitle>
              <ToDoList />
            </S.Frame>
          </Col>
          {/* <Col span={6}>
            <S.Frame>
              <S.FrameTitle>2023/01/05</S.FrameTitle>
              <ToDoList />
            </S.Frame>
          </Col> */}
        </Row>
        <Row gutter={[16, 16]} justify='space-between' align='middle'>
          {/* <Col span={12}>
                  <S.Frame height={'350px'}>
                    <S.FrameTitle>자주 추가되는 할일</S.FrameTitle>
                    <S.FrequentTodo>
                      <FrequentToDoList />
                    </S.FrequentTodo>
                  </S.Frame>
                </Col> */}
        </Row>
      </div>
    </>
  );
}

export default DailyTodo;
