// src/App.js
import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import STKPrompt from './components/STKPrompt';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/stk-prompt" component={STKPrompt} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;