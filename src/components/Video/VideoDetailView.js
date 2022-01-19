import React from 'react';
import './VideoDetailView.styles.css';
import VideoSingle from './VideoSingle';

function VideoDetails() {
  return (
    <div className="video-container">
      <div className="video-info">
        <iframe
          width="100%"
          height="500px"
          src="https://www.youtube.com/embed/nmXMgqjQzls"
          title="video"
        ></iframe>
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          placerat porttitor arcu mollis varius. Duis at orci augue. Suspendisse
          quis varius ligula.
        </p>
      </div>
      <div className="video-list">
        <ul>
          <VideoSingle />
          <VideoSingle />
          <VideoSingle />
          <VideoSingle />
          <VideoSingle />
          <VideoSingle />
          <VideoSingle />
          <VideoSingle />
          <VideoSingle />
          <VideoSingle />
          <VideoSingle />
          <VideoSingle />
          <VideoSingle />
          <VideoSingle />
          <VideoSingle />
          <VideoSingle />
          <VideoSingle />
          <VideoSingle />
          <VideoSingle />
          <VideoSingle />
          <VideoSingle />
          <VideoSingle />
          <VideoSingle />
          <VideoSingle />
        </ul>
      </div>
    </div>
  );
}

export default VideoDetails;
