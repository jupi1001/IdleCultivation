import { atom, selector } from 'recoil';
import { Skill } from '../types/skill';

export const totalXPState = atom({
  key: 'totalXP',
  default: 10,
});

export const skillsState = atom<Skill[]>({
  key: 'skills',
  default: [{ id: 1, name: 'Augment', desc: 'Augment your body.', cost: 10, level: 0, xpRate: 0, xpMultiplier: 2 }],
});

export const xpRateSumState = selector({
  key: 'xpRateSum',
  get: ({ get }) => {
    const skills = get(skillsState);

    return skills.reduce((t, s) => (t += s.xpRate), 0);
  },
});
