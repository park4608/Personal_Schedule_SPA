import { useEffect, useState } from 'react';
import axios from 'axios';
import { create } from 'zustand';

// type BoardData = {};

// type State = {
//   boardData: BoardData;
//   fetch: () => Promise<void>;
// };

type BoardData = {
  startTime: string;
  endTime: string;
  content: string;
  bgColor: string;
};

interface CellState {
  boardData: BoardData[];
  fetchData: () => Promise<void>;
  updateData: (updated: BoardData[]) => void;
}

export const useCellStore = create<CellState>((set) => ({
  boardData: [
    {
      startTime: '',
      endTime: '',
      content: '',
      bgColor: '',
    },
  ],
  fetchData: async () => {
    const res = await axios.get('http://localhost:8080/scheduleBoard');
    set({ boardData: await res.data });
  },
  updateData: (updated: BoardData[]) =>
    set({
      boardData: [...updated],
    }),
}));
