import React from 'react';
import { allShopItems } from '../common/api/data';
import ShopItemComponent from './ShopItemComponent';

const ShopItems = () => {
  return (
    <div className="columns">
      {allShopItems.map((item, i) => (
        <ShopItemComponent key={i} item={item} />
      ))}
    </div>
  );
};

export default ShopItems;
