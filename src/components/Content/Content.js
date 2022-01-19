import React from 'react';
import './Content.styles.css';
// import Youtube from '../../api/Youtube';
import VideoDetailView from '../Video/VideoDetailView';

function Content() {
  return (
    <section className="content">
      <h1>Capstone Project 1</h1>
      <div className="elements">
        <VideoDetailView />
        {/* <Youtube /> */}
        {/* <Grid items={MockData.items} /> */}
      </div>
    </section>
  );
}

export default Content;
