import React, { useState, useEffect, useRef } from 'react';
import * as S from '../../../components/styled-component/TodoComponent';
import * as C from '../../../components/styled-component/CommonComponent';
import { Button, Text, Flex, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Select, UnorderedList, ListItem } from '@chakra-ui/react';
import { AddIcon, EditIcon } from '@chakra-ui/icons';
import { Cursor } from 'mongoose';

import axios from 'axios';

const TimeSelect = () => {
  return <></>;
};

interface Time {
  startTime: string;
  endTime: string;
}

interface Validation {
  isTimeValid: boolean;
  isContentValid: boolean;
}

function AddScheduleBtn() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState<string>('');
  const [start, setStart] = useState<string>('00:00');
  const [end, setEnd] = useState<string>('00:00');
  const [bgColor, setBgColor] = useState<string | null>('#d3dae4');

  const [validate, setValidation] = useState<Validation>({
    isTimeValid: false,
    isContentValid: false,
  });

  const inputRef = useRef<null | HTMLInputElement>(null);

  const TIME_SELECT = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00'];

  // const colorPalette = ['palette.100', 'palette.200', 'palette.300', '#palette.400', 'palette.500', 'palette.600', 'palette.700', 'palette.800'];
  const colorPalette = ['#e1167d', '#e31733', '#e39b15', '#c7e664', '#61e3ca', '#cd78f1', '#d3dae4', '#000000'];

  const ChangeStartTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStart(e.target.value);
    setValidation((prevState) => ({ ...prevState, [e.target.name]: e.target.value < end ? true : false }));
  };

  const ChangeEndTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEnd(e.target.value);
    setValidation((prevState) => ({ ...prevState, [e.target.name]: start < e.target.value ? true : false }));
  };

  const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setValidation((prevState) => ({ ...prevState, [e.target.name]: e.target.value !== '' ? true : false }));
  };

  const ChangeColor = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e.currentTarget.getAttribute('data-color'));
    setBgColor(e.currentTarget.getAttribute('data-color'));
  };

  const ResetModal = () => {
    setStart((prevState) => '00:00');
    setEnd((prevState) => '00:00');
    setBgColor((prevState) => '#d3dae4');
    setValidation((prevState) => ({ ...prevState, isTimeValid: false, isContentValid: false }));
  };

  const SubmitData = () => {
    let data = {
      startTime: start,
      endTime: end,
      content: input,
      color: bgColor,
    };

    const submitData = async () => {
      await axios.post('http://localhost:8080/scheduleBoard', data).then(() => ResetModal());
    };

    submitData();
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme='twitter'>
        <Text pr='1'>일정 추가하기 </Text>
        <AddIcon />
      </Button>
      <Modal closeOnOverlayClick={false} onClose={onClose} isOpen={isOpen} isCentered size='2xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>일정 추가</ModalHeader>
          <ModalCloseButton color='red' />
          <ModalBody>
            <Flex alignItems='center' py={1}>
              <Text fontSize='xl' pr={2}>
                시간:
              </Text>
              <Select name='isTimeValid' variant='flushed' placeholder='00:00' w='70px' onChange={ChangeStartTime}>
                {TIME_SELECT.map((time) => (
                  <option value={time}>{time}</option>
                ))}
              </Select>
              <Text fontSize='xl' px={1}>
                ~
              </Text>
              <Select name='isTimeValid' variant='flushed' placeholder='00:00' w='70px' onChange={ChangeEndTime}>
                {TIME_SELECT.map((time) => (
                  <option value={time}>{time}</option>
                ))}
              </Select>
              {validate.isTimeValid ? null : <Text color='red.500'>시간이 유효하지 않습니다.</Text>}
            </Flex>
            <Flex direction='column'>
              <Flex alignItems='center' py={1}>
                <Text fontSize='xl' pr={2}>
                  할일:
                </Text>
                <S.TodoInput ref={inputRef} name='isContentValid' placeholder='할 일을 입력해주세요' onChange={OnChange} value={input} />
                {validate.isContentValid ? null : <Text color='red.500'>내용을 입력해주세요.</Text>}
              </Flex>
              <Flex alignItems='center' py={1}>
                <Text fontSize='xl' pr={2}>
                  배경색
                </Text>
                <Flex justifyContent='space-between' w='250px'>
                  {colorPalette.map((color) => (
                    <Box data-color={color} onClick={ChangeColor} w='20px' h='20px' backgroundColor={color} borderRadius='md' _hover={{ cursor: 'pointer' }} />
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={SubmitData} backgroundColor={validate ? 'twitter' : '#A0A0A0'} isDisabled={!(validate.isTimeValid && validate.isContentValid)}>
              <Text>추가하기</Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddScheduleBtn;
