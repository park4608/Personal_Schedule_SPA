import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PublicLayout from './layout/PublicLayout';
import Schedule from './pages/ScheduleManagement/Schedule';
import MonthlyPlan from './pages/ScheduleManagement/MonthlyPlan';
import StickerMemo from './pages/SticyNote/StickyNote';
import Form from './pages/Form';

import Ex from './Data/Ex';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Ex />,
      },
      {
        path: '/dailyTodo',
        element: <Schedule />,
      },
      {
        path: '/monthlyPlan',
        element: <MonthlyPlan />,
      },
      {
        path: '/stickerMemo',
        element: <StickerMemo />,
      },
      {
        path: '/form',
        element: <Form />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
