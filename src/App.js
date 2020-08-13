import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,

} from "react-router-dom";
import './App.scss';

import Header from './components/Header';
import MainMenu from './components/MainMenu';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <MainMenu />
      </Router>
    </div>
  );
}

export default App;
