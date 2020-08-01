import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPic from "./components/NasaPic";
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Route component={Home} path="/" exact/>
        <Route component={NasaPic} path="/nasa-picture" />
      </Router>
    </div>
  );
}

export default App;
