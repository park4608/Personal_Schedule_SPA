import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PublicLayout from './layout/PublicLayout';
import Main from './layout/Main';
import Schedule from './pages/ScheduleManagement/daily/Schedule';
import StickerMemo from './pages/SticyNote/StickyNote';
import Form from './pages/Form';
import Clock from './pages/ScheduleManagement/daily/clock/Clock';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        path: '/schedule',
        element: <Schedule />,
      },
      // {
      //   path: '/monthlyPlan',
      //   element: <MonthlyPlan />,
      // },
      {
        path: '/stickermemo',
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

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <ColorModeScript /> */}
      {/* <App /> */}
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
