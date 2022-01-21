import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../../assets/NotFound.png';

import './VideoSingle.styles.css';

function VideoSingle({ item }) {
  return (
    <Link to={`/video/${item.id.videoId}`}>
      <div className="video-single-container">
        <img
          src={item.snippet ? item.snippet.thumbnails.high.url : NotFound}
          alt={item.snippet ? item.snippet.title : 'NotFound'}
        />
        <div className="title">
          <p>{item.snippet ? item.snippet.title : 'NotFound'}</p>
        </div>
      </div>
    </Link>
  );
}

export default VideoSingle;
