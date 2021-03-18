import React, { useState } from "react";

function UpgradeComponent(props: {
  name: String;
  effect: String;
  cost: Number;
  xpMultiplier: Number;
  xp: Number;
  setGlobalXPChild: any;
}) {
  const [icost, setICost] = useState(props.cost);
  const [level, setLevel] = useState(0);
  const [xpRate, setXpRate] = useState(0);

  const increaseLevel = () => {
    setLevel(level + 1);
    if (props.xp.valueOf() > 0)
      props.setGlobalXPChild(props.xp.valueOf() - icost.valueOf());
    setICost(icost.valueOf() * 1.1);
    setXpRate(props.cost.valueOf() / props.xpMultiplier.valueOf());
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
      <td>{xpRate}</td>
    </>
  );
}

export default UpgradeComponent;
