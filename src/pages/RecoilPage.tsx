import React from 'react';
import SkillTable from '../Components/SkillTable';
import XPCounter from '../Components/XPCounter';

const RecoilPage = () => {
  return (
    <div className="columns">
      <div className="column is-2">
        <XPCounter />
      </div>
      <div className="column is-10">
        <SkillTable />
      </div>
    </div>
  );
};

export default RecoilPage;
