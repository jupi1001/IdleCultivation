import React from 'react';
import SideMenu from '../Components/SideMenu';
import SkillTable from '../Components/SkillTable';

const RecoilPage = () => {
  return (
    <div className="columns">
      <div className="column is-2">
        <SideMenu />
      </div>
      <div className="column is-10">
        <SkillTable />
      </div>
    </div>
  );
};

export default RecoilPage;
