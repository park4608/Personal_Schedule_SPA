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

type TimeData = {
  startTime: string;
  endTime: string;
};

interface CellState {
  boardData: BoardData[];
  fetchData: () => Promise<void>;
  updateData: (updated: BoardData) => void;
  deleteData: (targetData: TimeData) => void;
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
    let tmp;
    set({
      boardData: await (tmp = res.data.sort((a: BoardData, b: BoardData) => {
        if (a.startTime < b.startTime) return -1;
        else return 1;
      })),
    });
  },
  updateData: (newData: BoardData) => {
    let tmp = [];
    set((state) => ({
      boardData: (tmp = [...state.boardData, newData].sort((a, b) => {
        if (a.startTime < b.startTime) return -1;
        else return 1;
      })),
    }));
  },
  deleteData: (targetData: TimeData) =>
    set((state) => ({
      boardData: state.boardData.filter((data) => data.startTime !== targetData.startTime),
    })),
}));
