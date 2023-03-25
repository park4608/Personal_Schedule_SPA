import React, { ReactNode, useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';

import { Home, CalendarToday, Calendar, File } from '../components/Icons/MenuIcons';
import Schedule from '../pages/ScheduleManagement/daily/todos/Schedule';

import { Box, Flex } from '@chakra-ui/react';

import Main from './Main';
import Navigation from './Navigation';
// import Siedbar from '../components/Sidebar';

export default function PublicLayout() {
  return (
    <>
      <Flex direction='column' bg='#F8F9FA' h='100vh'>
        <Navigation />
        <Main>
          <Outlet />
        </Main>
      </Flex>
    </>
  );
}
