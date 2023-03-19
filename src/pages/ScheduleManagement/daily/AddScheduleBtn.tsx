import React, { useState, useEffect, useRef } from 'react';
import * as S from '../../../components/styled-component/TodoComponent';
import { Button, Text, Flex, Box, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Select } from '@chakra-ui/react';
import { AddIcon, EditIcon } from '@chakra-ui/icons';

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

  const [validate, setValidation] = useState<Validation>({
    isTimeValid: false,
    isContentValid: false,
  });

  const inputRef = useRef<null | HTMLInputElement>(null);

  const TIME_SELECT = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00'];

  const ChangeStartTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStart(e.target.value);
    setValidation({ ...validate, [e.target.name]: start < end ? true : false });
  };

  const ChangeEndTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEnd(e.target.value);

    setValidation({ ...validate, [e.target.name]: start < end ? true : false });
  };

  const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setValidation({ ...validate, [e.target.name]: input !== '' ? true : false });
    console.log(validate);
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
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} backgroundColor={validate ? 'twitter' : '#A0A0A0'} isDisabled={!validate}>
              <Text>추가하기</Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddScheduleBtn;
