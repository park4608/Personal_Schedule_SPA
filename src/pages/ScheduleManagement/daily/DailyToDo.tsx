import React, { useState, useRef, forwardRef, useEffect, ComponentProps } from 'react';
import styled from 'styled-components';
import * as S from '../../../components/styled-component/TodoComponent';
import * as C from '../../../components/styled-component/CommonComponent';
import { chakra, Container, Box, Flex, Grid, GridItem, HStack, Button, Text, List, ListItem, ListIcon, OrderedList, UnorderedList } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

import axios from 'axios';
import day from 'dayjs';
import { Spinner } from './../../../components/styled-component/CommonComponent';

type todoList = {
  content: string | undefined;
  idx: string | undefined;
};

function DailyToDo() {
  const [inputs, setInputs] = useState<string>('');
  const [todoList, setList] = useState<todoList[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const inputRef = useRef<null | HTMLInputElement>(null);

  const postManager = (data: todoList) => {
    setLoading((prevState) => !prevState);
    setInputs('');
    setList((prevState) => [...prevState, data]);
    setTimeout(() => setLoading((prevState) => !prevState), 500);
  };

  const deleteManager = (idx: string | null) => {
    setLoading((prevState) => !prevState);
    let filtered = todoList.filter((e) => e.idx !== idx);
    setList([...filtered]);
    setTimeout(() => setLoading((prevState) => !prevState), 500);
  };

  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputs !== '' && !isLoading) {
      let data = { content: inputRef.current?.value, idx: day().format('MMDDHH:mm:ss') };
      // setLoading(true);
      const postData = async () => {
        await axios.post('http://localhost:8080/todos', data).then(() => postManager(data));
      };
      postData();
    }
  };

  const deleteData = (e: React.MouseEvent<HTMLButtonElement>) => {
    let idx = e.currentTarget.getAttribute('data-idx');
    axios.delete(`http://localhost:8080/list/${idx}`).then(() => deleteManager(idx));
  };

  const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputs(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios.get('http://localhost:8080/dailyTodo').then((res) => {
        setList(res.data);
      });
    };

    fetchData();
  }, []);

  return (
    <>
      <Flex direction='column' w='100%' h='100%'>
        <Text fontSize='xl' py='2'>
          Daily Todo List
        </Text>
        <form
          action='http://localhost:8080/todos'
          method='POST'
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <S.TodoInput ref={inputRef} name='todo' placeholder='할 일을 입력해주세요' onChange={OnChange} onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => activeEnter(e)} value={inputs} />
        </form>
        <C.ScrollFrame>
          {isLoading ? (
            <Spinner />
          ) : (
            <UnorderedList listStyleType='none' m='0' py='2'>
              {todoList.map((e, i) => {
                return (
                  <ListItem display='flex' justifyContent='space-between' alignItems='center' w='100%' px={1} borderRadius='lg' _hover={{ backgroundColor: 'rgba(219, 219, 219, 0.6)' }} key={i}>
                    <S.StyledLabel>
                      <S.StyledCheckBox type='checkbox' name='checkbox' />
                      <S.TodoElement>
                        <Text>{e.content}</Text>
                      </S.TodoElement>
                    </S.StyledLabel>
                    <button data-idx={e.idx} onClick={deleteData}>
                      <SmallCloseIcon w={7} h={7} color='red.500' _hover={{ cursor: 'pointer' }} />
                    </button>
                  </ListItem>
                );
              })}
            </UnorderedList>
          )}
        </C.ScrollFrame>
      </Flex>
    </>
  );
}

export default DailyToDo;
