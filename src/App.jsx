import React, { useReducer } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Context from './context';
import reducer from './reducer';

import './App.css';

const eventList = [
  {
    id: 0,
    time: '08:00',
    title: 'Теоретическая фонетика',
    teachers: 'Немилостева Е.Д.',
    location: '405',
    isActive: false,
    isCompleted: true,
  },
  {
    id: 1,
    time: '09:40',
    title: 'Теоретическая фонетика',
    teachers: 'Немилостева Е.Д.',
    location: '405',
    isActive: false,
    isCompleted: true,
  },
  {
    id: 2,
    time: '11:20',
    title: 'Теоретическая фонетика',
    teachers: 'Немилостева Е.Д.',
    location: '405',
    isActive: false,
    isCompleted: true,
  },
  {
    id: 3,
    time: '11:20',
    title: 'Теоретическая фонетика',
    teachers: 'Немилостева Е.Д.',
    location: '405',
    isActive: true,
    isCompleted: false,
  },
  {
    id: 4,
    time: '11:20',
    title: 'Теоретическая фонетика',
    teachers: 'Немилостева Е.Д.',
    location: '405',
    isActive: false,
    isCompleted: false,
  },
  {
    id: 5,
    time: '11:20',
    title: 'Теоретическая фонетика',
    teachers: 'Немилостева Е.Д.',
    location: '405',
    isActive: false,
    isCompleted: false,
  },
];

const App = () => {
  const initialMode = localStorage.getItem('mode') || 'light';
  const [state, dispatch] = useReducer(reducer, { mode: initialMode });

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Router>
        <div className="container">
          <Navbar />
          <main className="main">
            <Header />
            <section className="content">
              <Timeline events={eventList} />
            </section>
          </main>
        </div>
      </Router>
    </Context.Provider>
  );
};

export default App;
