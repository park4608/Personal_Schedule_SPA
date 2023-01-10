import React from 'react';
import styled from 'styled-components';

const StyledCalendarToday = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
    border: 2px solid;
    border-top: 4px solid;
    border-radius: 3px;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    background: currentColor;
    height: 4px;
    width: 4px;
    border-radius: 2px;
    right: 2px;
    bottom: 2px;
  }
`;

const StyledCalendar = styled.i`
  &,
  &::before {
    display: block;
    box-sizing: border-box;
  }
  & {
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 18px;
    border: 2px solid;
    border-top: 4px solid;
    border-radius: 3px;
  }
  &::before {
    content: '';
    position: absolute;
    width: 10px;
    border-radius: 3px;
    left: 2px;
    background: currentColor;
    height: 2px;
    top: 2px;
  }
`;
const CalendarToday = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledCalendarToday {...props} ref={ref} icon-role='calendar-today' />
    </>
  );
});

const Calendar = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledCalendar {...props} ref={ref} icon-role='calendar' />
    </>
  );
});

export { CalendarToday, Calendar };
