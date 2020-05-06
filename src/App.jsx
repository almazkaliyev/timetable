import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Timeline from './components/Timeline';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <main className="main">
          <Header />
          <section className="content">
            <Timeline />
          </section>
        </main>
      </div>
    </Router>
  );
};

export default App;
