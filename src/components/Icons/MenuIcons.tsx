import React from 'react';
import styled from 'styled-components';

const StyledHome = styled.i`
  & {
    background: linear-gradient(to left, currentColor 5px, transparent 0) no-repeat 0 bottom/4px 2px, linear-gradient(to left, currentColor 5px, transparent 0) no-repeat right bottom/4px 2px;
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 18px;
    height: 14px;
    border: 2px solid;
    border-top: 0;
    border-bottom: 0;
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    margin-bottom: -2px;
  }

  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    border-top: 2px solid;
    border-left: 2px solid;
    border-top-left-radius: 4px;
    transform: rotate(45deg);
    top: -5px;
    border-radius: 3px;
    width: 14px;
    height: 14px;
    left: 0;
  }
  &::after {
    width: 8px;
    height: 10px;
    border: 2px solid;
    border-radius: 100px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 0;
    left: 3px;
    bottom: 0;
  }
`;

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

const StyledFileDocument = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 14px;
    height: 16px;
    border: 2px solid transparent;
    border-right: 0;
    border-top: 0;
    box-shadow: 0 0 0 2px;
    border-radius: 1px;
    border-top-right-radius: 4px;
    overflow: hidden;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    background: currentColor;
    box-shadow: 0 4px 0, -6px -4px 0;
    left: 0;
    width: 10px;
    height: 2px;
    top: 8px;
  }
  &::after {
    width: 6px;
    height: 6px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    right: -1px;
    top: -1px;
  }
`;

const Home = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledHome {...props} ref={ref} icon-role='home' />
    </>
  );
});

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

const File = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  return (
    <>
      <StyledFileDocument {...props} ref={ref} icon-role='file-document' />
    </>
  );
});

export { Home, CalendarToday, Calendar, File };
