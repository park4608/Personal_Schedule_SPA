import React from 'react';
import styled from 'styled-components';
import * as S from '../../../components/styled-component/CommonComponent';
import { Container, Box, Flex, Grid, GridItem, HStack, Button, Text, List, ListItem, ListIcon, OrderedList, UnorderedList, background } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

function OverdueTodo() {
  const toDoList = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9];
  return (
    <Flex direction='column' w='100%' h='100%'>
      <Text fontSize='xl' py='1'>
        Overdue
      </Text>
      <S.ScrollFrame>
        <UnorderedList listStyleType='none' m='0' py='2'>
          {toDoList.map((item: number, i: number) => {
            return (
              <ListItem display='flex' justifyContent='space-between' alignItems='center' w='100%' _hover={{ backgroundColor: 'rgba(219, 219, 219, 0.6)' }} key={i}>
                <S.StyledLabel>
                  <S.StyledCheckBox type='checkbox' name='checkbox' />
                  <S.TodoElement>
                    <Text>{item}</Text>
                  </S.TodoElement>
                </S.StyledLabel>
                {/* <SmallCloseIcon w={7} h={7} color='red.500' _hover={{ cursor: 'pointer' }} /> */}
              </ListItem>
            );
          })}
        </UnorderedList>
      </S.ScrollFrame>
    </Flex>
  );
}

export default OverdueTodo;
