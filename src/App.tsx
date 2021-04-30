import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import './App.css';
import { allUpgradeTiers } from './common/api/data';
import { skillsState, totalXPState, xpRateSumState } from './common/api/state';
import Frontpage from './Components/Frontpage';
import RecoilPage from './pages/RecoilPage';

function App() {
  const [totalXP, setTotalXP] = useRecoilState(totalXPState);
  const [skills, setSkills] = useRecoilState(skillsState);
  const xpRateSum = useRecoilValue(xpRateSumState);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalXP(totalXP + xpRateSum);

      for (const tier of allUpgradeTiers) {
        if (skills.find((s) => s.id === tier.skill.id) === undefined && totalXP > tier.neededXP) {
          setSkills((oldSkills) => [...oldSkills, tier.skill]);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      <header>
        <div className="container">Placeholder</div>
      </header>
      <div className="container">
        <Frontpage></Frontpage>
        <RecoilPage />
      </div>
    </div>
  );
}

export default App;
