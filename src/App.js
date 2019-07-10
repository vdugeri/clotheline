import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import HatsPage from './pages/hats/hatspage.component';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;
