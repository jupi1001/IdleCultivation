import { atom } from 'recoil';
import { Skill } from '../types/skill';

export const totalXPState = atom({
  key: 'totalXP',
  default: 5000,
});

export const skillsState = atom<Skill[]>({
  key: 'skills',
  default: [{ id: 1, name: 'Augment', desc: 'Augment your body.', cost: 10, level: 0, xpRate: 5, xpMultiplier: 2 }],
});
