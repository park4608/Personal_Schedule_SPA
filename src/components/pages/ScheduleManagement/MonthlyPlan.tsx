import React, { useState } from 'react';
// import { Calendar } from 'antd';
// import type { Dayjs } from 'dayjs';
// import locale from 'antd/es/calendar/locale/ko_KR';
// import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MonthlyPlan.css';
import styled from 'styled-components';

function ScheduleCalendar() {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <Calendar onChange={onChange} value={value} />
    </>
  );
}

export default ScheduleCalendar;
