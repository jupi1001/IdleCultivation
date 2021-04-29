import React from "react";
import { ShopUpgrade } from "./ShopUpgrade";


const Shop = (props: { pCurrency: any; setPCurrency: any }) => {

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-10">
          <ShopUpgrade pCurrency={props.pCurrency} setPCurrency={props.setPCurrency}/>
        </div>
      </div>
    </div>
  );
};

export default Shop;
