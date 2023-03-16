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
}

export default App;
