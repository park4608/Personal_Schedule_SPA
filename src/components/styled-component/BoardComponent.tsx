import React, { forwardRef } from 'react';
import styled from 'styled-components';

export const DateHeader = styled.h3`
  font-size: 32px;
  margin: 0;
  padding: 12px 0px;
`;

export const ColorSelectBox = styled.div`
  --color: blue;
  --border: 3px;
  --offset: 30px;
  --gap: 5px;
  background-color: red;
  border-radius: 5px;
  padding: calc(var(--border) + var(--gap));
  border: var(--offset) solid #0000;
  --_m: radial-gradient(50% 50%, #000 calc(100% - var(--offset)), #0000 calc(100% - var(--border)));
  -webkit-mask: var(--_m);
  mask: var(--_m);
  --_g: #0000 calc(99% - var(--border)), var(--color) calc(100% - var(--border)) 99%, #0000;
  --_s: var(--offset);
  --_r: 100% 100% at;
  background: radial-gradient(var(--_r) 0 0, var(--_g)) calc(100% + var(--_s)) calc(100% + var(--_s)), radial-gradient(var(--_r) 100% 0, var(--_g)) calc(0% - var(--_s)) calc(100% + var(--_s)), radial-gradient(var(--_r) 0 100%, var(--_g)) calc(100% + var(--_s)) calc(0% - var(--_s)), radial-gradient(var(--_r) 100% 100%, var(--_g)) calc(0% - var(--_s)) calc(0% - var(--_s));
  background-size: 50% 50%;
  background-repeat: no-repeat;
  transition: 0.4s;

  &:hover {
    --_s: 0px;
  }
`;
