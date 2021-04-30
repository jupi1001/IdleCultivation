import { UpgradeTier } from '../types/upgradeTier';

export const allUpgradeTiers: UpgradeTier[] = [
  {
    neededXP: 25,
    skill: {
      id: 2,
      name: 'Soul',
      desc: 'Refine your soul.',
      cost: 25,
      xpMultiplier: 2.75,
      xpRate: 0,
      level: 0,
    },
  },
  {
    neededXP: 100,
    skill: {
      id: 3,
      name: 'Essence',
      desc: 'Essence gathering.',
      cost: 150,
      xpMultiplier: 3.5,
      xpRate: 0,
      level: 0,
    },
  },
];
