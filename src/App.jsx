import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Timeline from './components/Timeline';

import './App.css';

const eventList = [
  {
    id: 0,
    time: '08:00',
    title: 'Теоретическая фонетика',
    teachers: 'Немилостева Е.Д.',
    location: '405',
  },
  {
    id: 1,
    time: '09:40',
    title: 'Теоретическая фонетика',
    teachers: 'Немилостева Е.Д.',
    location: '405',
  },
];

const App = () => {
  return (
    <Router>
      <div className="dark container">
        <Navbar />
        <main className="main elevation-5">
          <Header />
          <section className="content">
            <Timeline events={eventList} />
          </section>
        </main>
      </div>
    </Router>
  );
};

export default App;
