import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import './App.css';
import { allUpgradeTiers } from './common/api/data';
import { skillsState, totalXPState, xpRateSumState } from './common/api/state';
import LegacyPage from './pages/LegacyPage';
import RecoilPage from './pages/RecoilPage';
import ShopPage from './pages/ShopPage';

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
    <div className="container">
      <Router>
        <header>
          <div className="container">Placeholder</div>
        </header>

        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="bulma logo" />
            </a>
          </div>
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/old" className="navbar-item">
            Legacy
          </Link>
          <Link to="/shop" className="navbar-item">
            Shop
          </Link>
        </nav>

        <main className="">
          <Switch>
            <Route exact path="/">
              <RecoilPage />
            </Route>

            <Route path="/old">
              <LegacyPage />
            </Route>

            <Route path="/shop">
              <ShopPage />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
