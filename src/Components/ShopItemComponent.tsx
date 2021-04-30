import React from 'react';
import { useRecoilState } from 'recoil';
import { premiumCurrencyState } from '../common/api/state';
import { ShopItem } from '../common/types/shopItem';

interface ShopItemProps {
  item: ShopItem;
}

const ShopItemComponent: React.FC<ShopItemProps> = ({ item }) => {
  const [premiumCurrency, setPremiumCurrency] = useRecoilState(premiumCurrencyState);

  return (
    <div key={item.name} className="column is-2">
      <figure className="image is-64x64 is-centered">
        <img src="https://bulma.io/images/placeholders/64x64.png" alt="abc" />
      </figure>
      <p className="has-text-centered">{item.name}</p>
      <button className="button" onClick={() => setPremiumCurrency(premiumCurrency - item.price)}>
        {item.price}
      </button>
    </div>
  );
};

export default ShopItemComponent;
