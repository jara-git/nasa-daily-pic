import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPic from "./components/NasaPic";
import './App.scss';

function App() {
  return (
    <div className = 'App'>
      <Router>
        <Route component={Home} path="/" exact/>
        <Route component={NasaPic} path="/nasa-picture" />
      </Router>
    </div>
  );
}

export default App;
