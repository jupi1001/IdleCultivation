import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import './App.css';
import { allUpgradeTiers } from './common/api/data';
import { skillsState, totalXPState, xpRateSumState } from './common/api/state';
import LegacyPage from './pages/LegacyPage';
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
      <Router>
        <header>
          <div className="container">Placeholder</div>
        </header>
        <main className="container">
          <Switch>
            <Route exact path="/">
              <RecoilPage />
            </Route>

            <Route path="/old">
              <LegacyPage />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
