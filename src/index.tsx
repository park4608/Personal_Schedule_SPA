import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PublicLayout from './layout/PublicLayout';
import Schedule from './pages/ScheduleManagement/daily/Schedule';
// import MonthlyPlan from './pages/ScheduleManagement/MonthlyPlan';
import StickerMemo from './pages/SticyNote/StickyNote';
import Clock from './pages/ScheduleManagement/daily/clock/Clock';
import Form from './pages/Form';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Schedule />,
      },
      {
        path: '/schedule',
        element: <Schedule />,
      },
      {
        path: '/stickerMemo',
        element: <StickerMemo />,
      },
      {
        path: '/form',
        element: <Form />,
      },
      {
        path: '/clock',
        element: <Clock />,
      },
    ],
  },
]);

const theme = extendTheme({
  colors: {
    palette: { pink: '#e1167d', red: '#e31733', orange: '#e39b15', aqua: '#61e3ca', lightgreen: '#c7e664', purple: '#cd78f1', gray: '#d3dae4', black: '#000000' },
    text: { sub: '#E1E1E1', main: '#000' },
    button: { skyblue: '#1DA1F2' },
    bg: { 100: '#F8F9FA' },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
