import React, { useState, useEffect, useRef } from 'react';
import corkboard from './corkboard.jpg';
import styled from 'styled-components';

const BoardFrame = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 5px;
  border: none;
  /* background: none; */
  /* width: 15px; */
  /* height: 15px; */
  text-align: center;
`;

const Board = styled.div`
  background: no-repeat center url(${corkboard});
  width: calc(100vw - 200px);
  height: 95vh;
  max-height: 100vh;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Box = styled.div`
  padding: 10px;
  width: 250px;
  height: 250px;
  font-size: 18px;
  background-color: ${(props) => props.color};
  overflow: auto;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  word-break: break-all;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #a1a1a1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    margin: 10px 0;

    background: ${(props) => props.color};
  }
`;

type Offset = {
  x: number;
  y: number;
};

function StickyNote() {
  const [offset, setOffset] = useState<Offset>({
    x: 0,
    y: 0,
  });

  const boxRef = useRef<HTMLDivElement>(null);

  const mouseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // console.log(offset);
    setOffset({ ...offset, x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    if (boxRef.current !== null) {
      boxRef.current.style.left = e.nativeEvent.offsetX.toString() + 'px';
      boxRef.current.style.top = e.nativeEvent.offsetY.toString() + 'px';
    }
  };

  useEffect(() => {
    if (boxRef.current !== null) {
      console.log('useeffect');
      console.log(boxRef.current?.style.left);
      console.log(boxRef.current?.style.top);
    }
  }, [offset]);

  return (
    <>
      <BoardFrame>
        <Board onClick={mouseClick}>
          <AddBtn>+</AddBtn>
          <Box ref={boxRef} style={{ position: 'absolute', top: `${offset.y}`, left: `${offset.x}` }} color={'#ED1D21'}>
            <p>We are exposed to a lot of stress in our lives. Then what should I do when I'm stressed? From now on, I will introduce my own stress relief method. First, eat delicious food with the person you like. When you're with someone you like, you will get dopamine. If you eat delicious food there, your stress will disappears quickly. The second thing is to immerse yourself.We are exposed to a lot of stress in our lives. Then what should I do when I'm stressed? From now on, I will introduce my own stress relief method. First, eat delicious food with the person you like. When you're with someone you like, you will get dopamine. If you eat delicious food there, your stress will disappears quickly. The second thing is to immerse yourself.</p>
          </Box>
          <Box color={'#F49521'}>Hello</Box>
          <Box color={'#FF4DA0'}>Hello</Box>
          <Box color={'#FFCA00'}>Hello</Box>
          <Box color={'#EBD800'}>Hello</Box>
          <Box color={'#CEE847'}>Hello</Box>
          <Box color={'#77D4E5'}>Hello</Box>
          <Box color={'#0375BC'}>Hello</Box>
          <Box color={'#96238C'}>Hello</Box>
        </Board>
      </BoardFrame>
    </>
  );
}

export default StickyNote;
