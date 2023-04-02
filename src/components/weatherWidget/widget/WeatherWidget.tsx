import React, { useState } from 'react';
import styled from 'styled-components';
import styles from './Widget.module.scss';
import { SunRain, ThunderStorm, Cloud, Snow, Sunny, Rainy } from '../weatherIcon/WeatherIcons';
import { Text, Box } from '@chakra-ui/react';

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #161616;
  color: #161616;

  border-radius: 10%;
`;

function WeatherWidget() {
  return (
    <>
      <Frame>
        <Text fontSize='5xl' textColor='text.mainW'>
          KR, Asia
        </Text>
        <Snow />
        <Box p='5px'>
          <Text fontSize='md' textColor='text.mainW'>
            23°C / 73.4°F
          </Text>
        </Box>
      </Frame>
    </>
  );
}

export default WeatherWidget;
