import React, { forwardRef } from 'react';
import styled from 'styled-components';
import spinner from '../../img/spinner.svg';
import { Image, Box, background } from '@chakra-ui/react';

export const Container = styled.div`
  height: 100vh;
  padding: 24px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export const OverflowHiddenDiv = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
`;

export const ScrollFrame = styled.div`
  height: 100%;
  width: 100%;

  overflow: auto;
  background-color: #fff;
  transition: all 0.2s ease-out;
  &:hover {
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
    margin: 12px 0;
  }
`;

export const StyledCheckBox = styled.input`
  appearance: none;
  min-width: 20px;
  width: 20px;
  height: 20px;
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

  &:hover {
    cursor: pointer;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  gap: 5px;
  align-items: center;
  width: 100%;
  padding: 4px;
  font-size: 24px;
  border-radius: 3px;

  &:hover {
    /* background-color: rgba(219, 219, 219, 0.6); */
  }
`;

const TodoInput = styled.input`
  box-sizing: border-box;
  margin: 0;
  padding: 4px 11px;

  color: rgba(0, 0, 0, 0.88);
  font-size: 18px;
  position: relative;
  display: inline-block;
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    /* outline: none; */
    border-color: #4096ff;
    border-inline-end-width: 1px;
  }

  &::placeholder {
    color: #bfbfbf;
  }

  &:focus {
    outline: none;
    border-color: #4096ff;
  }
`;

export const TodoElement = styled(OverflowHiddenDiv)`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  width: 100%;
  text-align: left;
`;

const SpinnerBg = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
`;

export const Spinner = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' h='full'>
      <Image w='100px' h='100px' src={spinner} alt='로딩중' />
    </Box>
  );
};

export const BgStyledDiv = styled.div<{ bgColor: string | null }>`
  background-color: ${(props) => props.bgColor || '#fff'};
  transition: background-color 0.5s ease;
`;
