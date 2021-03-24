import React, { useEffect, useState } from "react";
import UpgradeComponent from "./UpgradeComponent";

function Frontpage() {
  const [globalXP, setGlobalXP] = useState(10);
  const [xpRate1, setXpRate1] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      timer();
    }, 1000);
    return () => clearInterval(interval);
  });

  function timer() {
    setGlobalXP(globalXP + xpRate1);
  }

  return (
    <div className="columns">
      <div className="column is-2">
        {globalXP.toPrecision(3)} + {xpRate1}{" "}
      </div>
      <div className="column is-12">
        <div className="table-container">
          <table className="table">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Effect</th>
                <th>Cost</th>
                <th>Buy</th>
                <th>Level</th>
                <th>XpRate</th>
              </tr>
              <tr>
                <UpgradeComponent
                  name="Augment"
                  effect="Augment your body."
                  cost={10}
                  xpMultiplier={2}
                  xp={globalXP}
                  setGlobalXPChild={setGlobalXP}
                  xpRate={xpRate1}
                  setXpRate={setXpRate1}
                ></UpgradeComponent>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Frontpage;
