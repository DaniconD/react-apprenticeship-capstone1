import React from 'react';
import './Content.styles.css';
import Youtube from '../../api/Youtube';
import VideoDetailView from '../Video/VideoDetailView';

import { Switch, Route } from 'react-router-dom';

function Content() {
  return (
    <section className="content">
      <h1>Capstone Project 1</h1>
      <div className="elements">
        <Switch>
          <Route path="/video/:id">
            <VideoDetailView />
          </Route>
          <Route path="/asd">asd</Route>
          <Route path="/">
            <Youtube />
            hola
          </Route>
        </Switch>
      </div>
    </section>
  );
}

export default Content;
