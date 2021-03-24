import React, { useState } from "react";

function UpgradeComponent(props: {
  name: String;
  effect: String;
  cost: Number;
  xpMultiplier: Number;
  xp: Number;
  setGlobalXPChild: any;
  xpRate: Number;
  setXpRate: any;
}) {
  const [icost, setICost] = useState(props.cost);
  const [level, setLevel] = useState(0);

  const increaseLevel = () => {
    if (props.xp.valueOf() >= 0 && props.xp.valueOf() - icost.valueOf() >= 0) {
      setLevel(level + 1);
      props.setGlobalXPChild(props.xp.valueOf() - icost.valueOf());
      setICost(icost.valueOf() * 1.1);
      //TODO Good XpRate Formula
      props.setXpRate(
        ((props.xpRate.valueOf() + 1) * props.xpMultiplier.valueOf()) / 2
      );
    }
  };

  return (
    <>
      <td>{props.name}</td>
      <td>{props.effect}</td>
      <td>{icost.toPrecision(3)}</td>
      <td>
        <button onClick={increaseLevel} className="button is-danger is-rounded">
          Buy
        </button>
      </td>
      <td>{level}</td>
      <td>{props.xpRate}</td>
    </>
  );
}

export default UpgradeComponent;
