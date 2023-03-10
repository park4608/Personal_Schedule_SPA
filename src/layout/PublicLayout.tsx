import React, { ReactNode, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';

import { Home, CalendarToday, Calendar, File } from '../components/Icons/MenuIcons';
import DailyTodo from '../pages/ScheduleManagement/daily/DailySchedule';

import { Grid, GridItem, Flex, Button, ButtonGroup } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Main from './Main';

type ChildType = {
  children: React.ReactNode;
};

export default function PublicLayout() {
  return (
    <>
      <Flex bg='#F8F9FA'>
        <Sidebar />
        <Main>
          <Outlet />
        </Main>
      </Flex>
    </>
  );
}
