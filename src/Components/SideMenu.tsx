import React from 'react';
import PremiumCurrencyLabel from './PremiumCurrencyLabel';
import XPCounter from './XPCounter';

const SideMenu = () => {
  return (
    <aside className="menu">
      <XPCounter />
      <PremiumCurrencyLabel />
    </aside>
  );
};

export default SideMenu;
