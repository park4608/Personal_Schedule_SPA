import React, { ReactNode, useState, useEffect } from 'react';
<<<<<<< HEAD
import styled from 'styled-components';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';

import { Home, CalendarToday, Calendar, File } from '../components/Icons/MenuIcons';
import DailyTodo from '../pages/ScheduleManagement/daily/DailySchedule';

import { Grid, GridItem, Flex, Button, ButtonGroup } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Main from './Main';
import Navigation from './Navigation';

type ChildType = {
  children: React.ReactNode;
};

export default function PublicLayout() {
  return (
    <>
      <Flex direction='column' bg='#F8F9FA'>
        {/* <Sidebar /> */}
        <Navigation />
        <Main>
          <Outlet />
        </Main>
      </Flex>
=======
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';

import { Home, CalendarToday, Calendar, File } from '../components/Icons/MenuIcons';
import DailyTodo from '../pages/ScheduleManagement/DailySchedule';

import { Grid, GridItem, Button, ButtonGroup } from '@chakra-ui/react';
import Siedbar from '../components/Sidebar';

let currentPath = '';

export default function PublicLayout() {
  const [collapsed, setCollapsed] = useState(false);

  let location = useLocation();

  // useEffect(() => {
  //   if (currentPath === location.pathname) window.location.reload();
  //   currentPath = location.pathname;
  // }, [location]);

  return (
    <>
      {/* <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <Title style={{ margin: 0, padding: 8, color: '#fff', textAlign: 'center' }} level={2}>
            Schedule
          </Title>
          <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline' items={items} />
        </Sider>
        <Layout className='site-layout'>
          <Content style={{ margin: '0 16px' }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout> */}
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={'50px 1fr 30px'}
        gridTemplateColumns={'150px 1fr'}
        h='200px'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'>
        <GridItem pl='2' bg='orange.300' area={'header'}>
          Header
        </GridItem>
        <GridItem pl='2' bg='pink.300' area={'nav'}>
          Nav
        </GridItem>
        <GridItem pl='2' bg='green.300' area={'main'}>
          <Button size='md' height='48px' width='200px' border='2px' borderColor='green.500'>
            Button
          </Button>
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={'footer'}>
          Footer
        </GridItem>
      </Grid>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
      </Grid>
>>>>>>> abb34d02bd52eea33e785fef6c0a7e60588fa881
    </>
  );
}
