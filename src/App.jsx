import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Timeline from './components/Timeline';
import fetchLists from './store/lists/actions';

import './App.css';

const App = (props) => {
  const { getLists } = props;

  useEffect(() => {
    getLists();
  }, []);

  return (
    <Router>
      <div className="container">
        <Navbar />
        <main className="main">
          <Header />
          <section className="content">
            <Switch>
              <Route path="/:listId" component={Timeline} />
            </Switch>
          </section>
        </main>
      </div>
    </Router>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLists: () => dispatch(fetchLists()),
  };
};

export default connect(null, mapDispatchToProps)(App);
