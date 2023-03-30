import React, { useState } from 'react';
import { SketchPicker, ChromePicker, CompactPicker, CirclePicker } from 'react-color';

type RGB = {
  r: number;
  g: number;
  b: number;
  a: number;
};

type HSL = {
  h: number;
  s: number;
  l: string;
  a: number;
};

type HEX = {
  color: string;
};

type Props = {
  setColor: React.Dispatch<React.SetStateAction<string>>;
};

// interface Color {
//   hex: string;
//   rgb: RGB;
//   hsl: HSL;
// }

function ColorPicker({ setColor }: Props) {
  const [color, setPickerColor] = useState<string>('#fff');

  const handleChange = (color: any) => {
    let hexColor = color.hex;
    setColor(hexColor);
    setPickerColor(color);
  };

  return <CirclePicker color={color} onChange={handleChange} />;
}

export default ColorPicker;
