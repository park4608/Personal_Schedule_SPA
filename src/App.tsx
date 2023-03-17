<<<<<<< HEAD
import * as React from 'react';
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, GridItem, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import PublicLayout from './layout/PublicLayout';
import Schedule from './pages/ScheduleManagement/daily/Schedule';

function App() {
  return <PublicLayout />;
=======
import React from 'react';
import PublicLayout from './layout/PublicLayout';
import './App.css';

import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <PublicLayout />
    </ChakraProvider>
  );
>>>>>>> abb34d02bd52eea33e785fef6c0a7e60588fa881
}

export default App;
