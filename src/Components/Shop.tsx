import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-4">
          <aside className="menu">
            <p className="menu-label">Premium Währung</p>
            <ul className="menu-list">
              <li>
                <text>0</text>
              </li>
            </ul>
            <p className="menu-label">Navigation</p>
            <ul className="menu-list">
              <li>
                <Link to="/">Hauptseite</Link>
              </li>
            </ul>
          </aside>
        </div>
        <div className="column is-8">
          {/* TODO Add table with boxes? For upgrades or stuff */}
        </div>
      </div>
    </div>
  );
};

export default Shop;
