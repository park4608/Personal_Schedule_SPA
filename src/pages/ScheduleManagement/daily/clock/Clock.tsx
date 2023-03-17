import React, { useState, useEffect, useRef } from 'react';
import styles from './Clock.module.scss';
import classNames from 'classnames';

interface TimerCharProps {
  char: string;
}

const TimerChar: React.FC<TimerCharProps> = (props: TimerCharProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const colon: boolean = props.char === ':';

  if (colon) {
    return <h1 className={`${styles['timer-char']} ${styles.colon}`}>:</h1>;
  }

  const number: number = parseInt(props.char);

  const getCharSlider = (): JSX.Element => {
    let options: JSX.Element[] = [];

    for (let i: number = 0; i <= 9; i++) {
      const classes: string = classNames('timer-char-slider-option', {
        active: number === i,
      });

      options.push(
        <span key={i} className={classes}>
          {i}
        </span>
      );
    }

    const height: number = ref.current ? ref.current.offsetHeight : 0,
      top: string = `${number * height * -1}px`;

    return (
      <div className={styles['timer-char-slider']} style={{ top }}>
        {options}
      </div>
    );
  };

  return (
    <div ref={ref} className={`${styles['timer-char']} ${styles.number}`}>
      {getCharSlider()}
    </div>
  );
};

function Clock() {
  const [date, setDateTo] = React.useState<Date>(new Date());

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      const update: Date = new Date();

      if (update.getSeconds() !== date.getSeconds()) {
        setDateTo(update);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [date]);

  const formatSegment = (segment: number | string): number | string => {
    return segment < 10 ? `0${segment}` : segment;
  };

  const getHours = (hours: number): number => {
    return hours % 12 === 0 ? 12 : hours % 12;
  };

  const getTime = (): string => {
    const hours: number = getHours(date.getHours()),
      minutes: number = date.getMinutes(),
      seconds: number = date.getSeconds();

    return `${formatSegment(hours)}:${formatSegment(minutes)}:${formatSegment(seconds)}`;
  };

  const getChars = (): JSX.Element[] => {
    return getTime()
      .split('')
      .map((char: string, index: number) => <TimerChar key={index} char={char} />);
  };

  return (
    <div style={{ alignItems: 'center', display: 'flex', height: '100vh', justifyContent: 'center', width: '100vw' }}>
      <div className={styles.timer}>
        <div className={styles['timer-text']}>{getChars()}</div>
      </div>
    </div>
  );
}

export default Clock;
