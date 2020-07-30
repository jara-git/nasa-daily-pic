import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPic from "./components/NasaPic";
import './App.css';

function App() {
  return (
    <div>
      <Route component={Home} path="/" exact/>
      <Route component={NasaPic} path="/nasa-picture" />
    </div>
  );
}

export default App;
