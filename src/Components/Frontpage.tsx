import React, { useEffect, useState } from "react";
import UpgradeComponent from "./UpgradeComponent";
import { Link } from 'react-router-dom';

function Frontpage() {
  const [globalXP, setGlobalXP] = useState(10);
  const [xpRate1, setXpRate1] = useState(0);
  const [unlock1, setUnlock1] = useState(false);
  const [xpRate2, setXpRate2] = useState(0);
  const [unlock2, setUnlock2] = useState(false);
  const [xpRate3, setXpRate3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      timer();
    }, 1000);
    return () => clearInterval(interval);
  });

  function timer() {
    setGlobalXP(globalXP + xpRate1 + xpRate2 + xpRate3);
    if (globalXP > 25) {
      setUnlock1(true);
      if (globalXP > 100) {
        setUnlock2(true);
      }
    }
  }

  return (
    <div className="columns">
      <div className="column is-4">
        <aside className="menu">
          <p className="menu-label">Xp Rate</p>
          <ul className="menu-list">
            <li>
              <text>{globalXP.toPrecision(3)} + {xpRate1 + xpRate2 + xpRate3}</text>
            </li>
          </ul>
          <p className="menu-label">Navigation</p>
          <ul className="menu-list">
            <li>
            <Link to='/shop'>Shop</Link>
            </li>
          </ul>
      
        </aside>
        
      </div>
      <div className="column is-8">
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
              {unlock1 && (
                <tr>
                  <UpgradeComponent
                    name="Soul"
                    effect="Refine your soul."
                    cost={25}
                    xpMultiplier={2.75}
                    xp={globalXP}
                    setGlobalXPChild={setGlobalXP}
                    xpRate={xpRate2}
                    setXpRate={setXpRate2}
                  ></UpgradeComponent>
                </tr>
              )}
              {unlock2 && (
                <tr>
                  <UpgradeComponent
                    name="Essence"
                    effect="Essence gathering."
                    cost={150}
                    xpMultiplier={3.5}
                    xp={globalXP}
                    setGlobalXPChild={setGlobalXP}
                    xpRate={xpRate3}
                    setXpRate={setXpRate3}
                  ></UpgradeComponent>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Frontpage;
