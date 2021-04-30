import React from 'react';
import { useRecoilState } from 'recoil';
import { skillsState, totalXPState } from '../common/api/state';
import { Skill } from '../common/types/skill';

interface SkillEntryProps {
  skill: Skill;
}

const SkillEntry: React.FC<SkillEntryProps> = ({ skill }) => {
  const [totalXP, setTotalXP] = useRecoilState(totalXPState);
  const [skills, setSkills] = useRecoilState(skillsState);

  const onBuy = () => {
    const newRate = ((skill.xpRate + 1) * skill.xpMultiplier) / 2; // TODO: implement better XP Rate Formula
    const newCost = skill.cost * 1.1;

    setTotalXP(totalXP - skill.cost);
    setSkills(
      skills.map((s) => (s.id !== skill.id ? s : { ...skill, cost: newCost, xpRate: newRate, level: skill.level + 1 }))
    );
  };

  return (
    <tr>
      <td>{skill.name}</td>
      <td>{skill.desc}</td>
      <td>{skill.cost.toFixed()}</td>
      <td>
        <button onClick={onBuy} disabled={totalXP - skill.cost < 0} className="button is-danger is-rounded">
          Buy
        </button>
      </td>
      <td>{skill.level}</td>
      <td>{skill.xpRate.toFixed(2)}</td>
    </tr>
  );
};

export default SkillEntry;
