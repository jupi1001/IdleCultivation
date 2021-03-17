import React, { useState } from "react";
import UpgradeComponent from "./UpgradeComponent";

function Frontpage() {
  const [globalXP, setGlobalXP] = useState(100);

  return (
    <div className="columns">
      <div className="column is-2">{globalXP.toPrecision(3)}</div>
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
                <th>Xp</th>
              </tr>
              <UpgradeComponent
                name="Augment"
                effect="Augment your body."
                cost={10}
                xp={globalXP}
                setGlobalXPChild={setGlobalXP}
              ></UpgradeComponent>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Frontpage;
