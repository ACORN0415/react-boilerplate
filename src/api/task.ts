import { Task } from '../types';

const data = [
  {
    id: 1,
    title: '11',
    isComplete: false,
    isFavorite: false,
  },
  {
    id: 2,
    title: '22',
    isComplete: true,
    isFavorite: false,
  },
  {
    id: 3,
    title: '33',
    isComplete: false,
    isFavorite: true,
  },
  {
    id: 4,
    title: '44',
    isComplete: true,
    isFavorite: true,
  },
];

const fetch = () =>
  new Promise<Task[]>((resolve) => {
    setTimeout(() => resolve(data), 2000);
  });

const update = () =>
  new Promise((resolve) => {
    resolve(true);
  });

export const taskAPI = {
  fetch,
  update,
};
