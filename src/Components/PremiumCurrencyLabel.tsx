import { useRecoilState } from 'recoil';
import { premiumCurrencyState } from '../common/api/state';

const PremiumCurrencyLabel = () => {
  const [premiumCurrency] = useRecoilState(premiumCurrencyState);
  return (
    <>
      <p className="menu-label">Premium Währung</p>
      <ul className="menu-list">
        <li>
          <p>{premiumCurrency}</p>
        </li>
      </ul>
    </>
  );
};

export default PremiumCurrencyLabel;
