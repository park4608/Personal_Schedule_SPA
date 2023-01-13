import { useState } from 'react';
import styled from 'styled-components';
import { Divider, Input, Popover } from 'antd';
import { PlusCircleTwoTone } from '@ant-design/icons';
import { ToDo } from '../../Data/data';
export const OverflowHiddenDiv = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
`;

export const ColumnBox = styled.div`
  padding: 5px 2px;
`;

interface FrameProps {
  height: string;
}

export const FrameTitle = styled.h3`
  align-items: center;
  font-size: 18px;
  padding-top: 5px;
  color: #000;
  position: sticky;
  top: 0;
`;

export const Frame = styled.div`
  padding: 5px 16px;
  height: 310px;
  overflow: auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  transition: all 0.2s ease-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #a1a1a1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #ddd;
  }
`;

export const CalendarFrame = styled.div`
  height: 600px;
  /* border: 1px solid black; */
`;

export const StyledInput = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2.5px solid gainsboro;
  border-radius: 0.2rem;

  &:checked {
    border-color: transparent;
    background-size: 150% 150%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: limegreen;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
  }
`;

export const TodoElement = styled(OverflowHiddenDiv)`
  width: 100%;
  text-align: left;
`;

export const StyledLabel = styled.label`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 4px;
  /* margin: 0 4px; */
  font-size: 16px;
  border-radius: 3px;

  &:hover {
    background-color: rgba(219, 219, 219, 0.6);
  }
`;

export const LiDivider = styled(Divider)`
  margin: 4px 0;
`;

export const FrequentTodo = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
  text-align: left;
`;

export const TextHiddenLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4px 0;
`;

export const PlusIcon = styled(PlusCircleTwoTone)`
  transition: all 0.1s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;

type ToDoType = { date: string; data: string[] }[];
type ListType = { date: string; data: string[] };

export const ToDoList = ({ Todos }: { Todos: ListType }) => {
  // const [checkedList, setCheckedList] = useState<ToDoType[]>([]);
  return (
    <>
      <div style={{ position: 'sticky', top: 0, paddingBottom: '5px' }}>
        <FrameTitle>{Todos.date}</FrameTitle>
        <Input placeholder='할 일을 입력해주세요' />
      </div>
      {Todos.data.map((item: string) => {
        return (
          <>
            <StyledLabel>
              <StyledInput type='checkbox' name='checkbox' />
              <Popover content={item} placement='topLeft'>
                <TodoElement>{item}</TodoElement>
              </Popover>
            </StyledLabel>
            <LiDivider />
          </>
        );
      })}
    </>
  );
};

// const FrequentToDoList = () => {
//   const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     console.log('clicked');
//   };
//   return (
//     <>
//       {Frequent.map((item) => {
//         return (
//           <>
//             <TextHiddenLi>
//               <Popover content={item.data} placement='topLeft'>
//                 <OverflowHiddenDiv>{item.data}</OverflowHiddenDiv>
//               </Popover>

//               <PlusIcon onClick={clickHandler} />
//             </TextHiddenLi>
//             <LiDivider />
//           </>
//         );
//       })}
//     </>
//   );
// };

// export const DailyTodoWidget = () => {
//   <>
//     <Frame>
//       <FrameHeader />
//       <ToDoList />
//     </Frame>
//   </>;
// };
