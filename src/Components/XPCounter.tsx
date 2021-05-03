import { useRecoilState, useRecoilValue } from 'recoil';
import { totalXPState, xpRateSumState } from '../common/api/state';

const XPCounter = () => {
  const [totalXP] = useRecoilState(totalXPState);

  const xpRateSum = useRecoilValue(xpRateSumState);

  return (
    <>
      <p className="menu-label">Xp Rate</p>
      <ul className="menu-list">
        <li>
          <p>
            {totalXP.toFixed(2)} + {xpRateSum.toFixed(2)}
          </p>
        </li>
      </ul>
    </>
  );
};

export default XPCounter;
