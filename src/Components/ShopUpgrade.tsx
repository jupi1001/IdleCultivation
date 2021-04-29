import React from "react";

const Upgrade = [
  { name: "a", price: 500 },
  { name: "b", price: 1000 },
];

export const ShopUpgrade = (props: { pCurrency: any; setPCurrency: any }) => {

  function reducePCurrency(price:number) {
    if(props.pCurrency>=price)
    props.setPCurrency(props.pCurrency - price);
  }

  return (
    <div className="columns">
      {Upgrade.map((item) => {
        return (
          <div key={item.name} className="column is-2">
            <figure className="image is-64x64 is-centered">
              <img
                src="https://bulma.io/images/placeholders/64x64.png"
                alt="abc"
              />
            </figure>
            <p className="has-text-centered">{item.name}</p>
            <button className="button" onClick={()=>reducePCurrency(item.price)}>
              {item.price}
            </button>
          </div>
        );
      })}
    </div>
  );
};
