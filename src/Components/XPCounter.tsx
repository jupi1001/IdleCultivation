import { useRecoilState } from 'recoil';
import { totalXPState } from '../common/api/state';

const XPCounter = () => {
  const [totalXP, setTotalXP] = useRecoilState(totalXPState);

  const onClick = (e: any) => {
    e.preventDefault();

    setTotalXP(totalXP + 1);
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>increase</button>
      </div>
      <div>Total XP: {totalXP}</div>
    </div>
  );
};

export default XPCounter;
