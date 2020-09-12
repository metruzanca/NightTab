import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Bookmark } from '../../components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NightTab v3</h1>
        <Bookmark />
      </header>
    </div>
  );
}

export default App;
