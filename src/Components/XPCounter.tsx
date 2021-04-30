import { useRecoilState, useRecoilValue } from 'recoil';
import { totalXPState, xpRateSumState } from '../common/api/state';

const XPCounter = () => {
  const [totalXP] = useRecoilState(totalXPState);
  const xpRateSum = useRecoilValue(xpRateSumState);

  return (
    <div>
      <div>Total XP: {totalXP.toFixed(2)}</div>
      <div>XP Rate: {xpRateSum.toFixed(2)}</div>
    </div>
  );
};

export default XPCounter;
