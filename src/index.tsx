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
    palette: { 100: '#e1167d', 200: '#e31733', 300: '#e39b15', 400: '#c7e664', 500: '#61e3ca', 600: '#cd78f1', 700: '#d3dae4', 800: '#000000' },
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
