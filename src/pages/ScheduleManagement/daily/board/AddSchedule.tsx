import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useCellStore } from '../../../../store/store';
import * as S from '../../../../components/styled-component/TodoComponent';
import * as C from '../../../../components/styled-component/CommonComponent';
import * as B from '../../../../components/styled-component/BoardComponent';
import { Button, Text, Flex, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Select, UnorderedList, ListItem } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import ColorPicker from '../../../../components/ColorPicker';

import axios from 'axios';

interface Time {
  startTime: string;
  endTime: string;
}

interface Validation {
  isTimeValid: boolean;
  isContentValid: boolean;
}

const TIME_SELECT = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00'];

const colorPalette = ['palette.pink', 'palette.red', 'palette.orange', 'palette.aqua', 'palette.lightgreen', 'palette.purple', 'palette.gray', 'palette.black'];

function AddSchedule() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { boardData, fetchData, updateData } = useCellStore();
  const [input, setInput] = useState<string>('');
  const [start, setStart] = useState<string>('09:00');
  const [end, setEnd] = useState<string>('09:00');
  const [color, setColor] = useState<string>('#d3dae4');

  const [validate, setValidation] = useState<Validation>({
    isTimeValid: false,
    isContentValid: false,
  });

  const inputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    fetchData();
  }, []);

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

  const ResetModal = () => {
    setStart((prevState) => '00:00');
    setEnd((prevState) => '00:00');
    setColor((prevState) => '#d3dae4');
    setValidation((prevState) => ({ ...prevState, isTimeValid: false, isContentValid: false }));
  };

  type BoardData = {
    startTime: string;
    endTime: string;
    content: string;
    bgColor: string;
  };

  const SubmitData = () => {
    let data: BoardData = {
      startTime: start,
      endTime: end,
      content: input,
      bgColor: color,
    };

    const submitData = async () => {
      let valid = true;
      for (let i = 0; i < boardData.length; i++) {
        if (
          checkOverlap(
            { startTime: boardData[i].startTime, endTime: boardData[i].endTime },
            {
              startTime: data.startTime,
              endTime: data.endTime,
            }
          )
        ) {
          valid = false;
          break;
        }
      }
      if (!valid) {
        alert('이미 해당 시간에 일정이 있습니다. 시간을 다시 선택해주세요.');
        return;
      } else {
        await axios.post('http://localhost:8080/scheduleBoard', data).then((e) => {
          console.log(e);
          updateData(data);
        });
      }
      // ResetModal();
    };

    submitData();
  };

  const checkOverlap = (timeA: Time, timeB: Time) => (timeB.startTime < timeA.startTime ? timeB.endTime > timeA.startTime : timeB.startTime < timeA.endTime);

  return (
    <>
      <Button onClick={onOpen} colorScheme='twitter'>
        <Text pr='1'>일정 추가하기 </Text>
        <AddIcon />
      </Button>
      <Modal closeOnOverlayClick={false} onClose={onClose} isOpen={isOpen} isCentered size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>일정 추가</ModalHeader>
          <ModalCloseButton color='red' />
          <ModalBody>
            <Flex alignItems='center' py={1}>
              <Text fontSize='xl' pr={2}>
                시간:
              </Text>
              <Select name='isTimeValid' variant='flushed' w='70px' onChange={ChangeStartTime}>
                {TIME_SELECT.map((time, i) => (
                  <option value={time} key={i}>
                    {time}
                  </option>
                ))}
              </Select>
              <Text fontSize='2xl' px={5}>
                ~
              </Text>
              <Select name='isTimeValid' variant='flushed' w='70px' onChange={ChangeEndTime}>
                {TIME_SELECT.map((time, i) => (
                  <option value={time} key={i}>
                    {time}
                  </option>
                ))}
              </Select>
              {validate.isTimeValid ? null : <Text color='red.500'>시간이 유효하지 않습니다.</Text>}
            </Flex>
            <Flex direction='column'>
              <Flex alignItems='center' py={1}>
                <Text fontSize='xl' pr={2}>
                  할일:
                </Text>
                <S.TodoInput ref={inputRef} name='isContentValid' placeholder='할 일을 입력해주세요' onChange={OnChange} value={input} width={'300px'} />
                {validate.isContentValid ? null : <Text color='red.500'>내용을 입력해주세요.</Text>}
              </Flex>
              <Flex alignItems='center' py={1}>
                <Text fontSize='xl' pr={2}>
                  배경색
                </Text>
                <Box py={2}>
                  <ColorPicker setColor={setColor} />
                </Box>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Flex direction='column' w='100%'>
              <Text fontSize='xl' pr={2}>
                미리보기
              </Text>
              <Flex justify='space-between' align='center'>
                <B.ShowSampleBox bgColor={color}>{input}</B.ShowSampleBox>
                <Button onClick={SubmitData} backgroundColor={validate ? 'twitter' : '#A0A0A0'} isDisabled={!(validate.isTimeValid && validate.isContentValid)}>
                  <Text>추가하기</Text>
                </Button>
              </Flex>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddSchedule;
