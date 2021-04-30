import { useRecoilState } from 'recoil';
import { skillsState } from '../common/api/state';
import SkillEntry from './SkillEntry';

const SkillTable = () => {
  const [skills] = useRecoilState(skillsState);

  return (
    <div className="table-container">
      <table className="table">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Effect</th>
            <th>Cost</th>
            <th>Buy</th>
            <th>Level</th>
            <th>XP Rate</th>
          </tr>
          {skills.map((skill, i) => (
            <SkillEntry key={i} skill={skill} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkillTable;
