import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/pages/Root';
import PublicLayout from './components/layout/PublicLayout';
import DailyTodo from './components/pages/ScheduleManagement/DailyTodo';
import MonthlyPlan from './components/pages/ScheduleManagement/MonthlyPlan';
import StickerMemo from './components/pages/StickerMemo/StickerMemo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Root />,
      },
      {
        path: '/dailyTodo',
        element: <DailyTodo />,
      },
      {
        path: '/monthlyPlan',
        element: <MonthlyPlan />,
      },
      {
        path: '/stickerMemo',
        element: <StickerMemo />,
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
