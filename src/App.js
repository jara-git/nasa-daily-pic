import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPic from "./components/NasaPic";
import './App.scss';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
		<div clasName='App'>
			<SnackbarProvider maxSnack={1}>
				<Router>
					<Route component={Home} path='/' exact />
					<Route component={NasaPic} path='/nasa-picture' />
				</Router>
			</SnackbarProvider>
		</div>
	);
}

export default App;
