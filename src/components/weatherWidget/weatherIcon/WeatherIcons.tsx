// import styled from 'styled-components';
import styles from './WeatherIcons.module.scss';
// import styles from './Weather.module.css';

import React from 'react';

const SunRain = () => {
  return (
    <div className={`${styles.icon} ${styles.sun_shower}`}>
      <div className={styles.cloud}></div>
      <div className={styles.sun}>
        <div className={styles.rays}></div>
      </div>
      <div className={styles.rain}></div>
    </div>
  );
};

const ThunderStorm = () => {
  return (
    <div className={`${styles.icon} ${styles.thunder_storm}`}>
      <div className={styles.cloud}></div>
      <div className={styles.lightning}>
        <div className={styles.bolt}></div>
        <div className={styles.bolt}></div>
      </div>
    </div>
  );
};

const Cloud = () => {
  return (
    <div className={`${styles.icon} ${styles.cloudy}`}>
      <div className={styles.cloud}></div>
      <div className={styles.cloud}></div>
    </div>
  );
};

const Snow = () => {
  return (
    <div className={`${styles.icon} ${styles.flurries}`}>
      <div className={styles.cloud}></div>
      <div className={styles.snow}>
        <div className={styles.flake}></div>
        <div className={styles.flake}></div>
      </div>
    </div>
  );
};

const Sunny = () => {
  return (
    <div className={`${styles.icon} ${styles.sunny}`}>
      <div className={styles.sun}>
        <div className={styles.rays}></div>
      </div>
    </div>
  );
};

const Rainy = () => {
  return (
    <div className={`${styles.icon} ${styles.rainy}`}>
      <div className={styles.cloud}></div>
      <div className={styles.rain}></div>
    </div>
  );
};

export { SunRain, ThunderStorm, Cloud, Snow, Sunny, Rainy };
