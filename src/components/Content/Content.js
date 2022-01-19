import React from 'react';
import './Content.styles.css';

// import Grid from '../List/Grid';
import Youtube from '../../api/Youtube';
// import MockData from '../../data/youtube-videos-mock.json';

function Content() {
  return (
    <section className="content">
      <h1>Capstone Project 1</h1>
      <div className="elements">
        <Youtube />
        {/* <Grid items={MockData.items} /> */}
      </div>
    </section>
  );
}

export default Content;
