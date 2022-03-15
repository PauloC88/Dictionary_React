import React from 'react';
import './App.css';
import ControlPanel from './DictComp/ControlPanel';
import WordList from './DictComp/WordList';

function Dictionary() {
  return (
    <div className="container">
      <ControlPanel />
      <WordList />
    </div>
  );
}

export default Dictionary;