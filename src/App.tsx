import React from 'react';
import './App.css';
import Frontpage from './Components/Frontpage';
import RecoilPage from './pages/RecoilPage';

function App() {
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
