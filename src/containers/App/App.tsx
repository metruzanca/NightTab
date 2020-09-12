import React from 'react';
import './App.css';
import { Bookmark } from 'components';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NightTab v3</h1>
        <Bookmark />
      </header>
    </div>
  );
}
