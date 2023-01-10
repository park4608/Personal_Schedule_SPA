import React, { useState } from 'react';
// import { Calendar } from 'antd';
// import type { Dayjs } from 'dayjs';
// import locale from 'antd/es/calendar/locale/ko_KR';
// import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MonthlyPlan.scss';
import styled from 'styled-components';

import dayjs from 'dayjs';

const CalendarFrame = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ScheduleCalendar() {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <CalendarFrame>
        <Calendar
          onChange={onChange}
          value={value}
          calendarType='US'
          formatDay={(locale, date) => dayjs(date).format('D')}
          formatShortWeekday={(locale, date) => dayjs(date).format('ddd')}
          formatMonthYear={(locale, date) => dayjs(date).format('YYYY  MMMM')}
          formatYear={(locale, date) => dayjs(date).format('YYYY')}
        />
      </CalendarFrame>
    </>
  );
}

export default ScheduleCalendar;
