import React from 'react';
import { Link } from 'react-router-dom';

import './VideoSingle.styles.css';

function VideoSingle() {
  return (
    <Link to="/video">
      <div className="video-single-container">
        <img
          src="https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo"
          alt="mini video"
        />
        <div className="title">
          <p>Titulo</p>
        </div>
      </div>
    </Link>
  );
}

export default VideoSingle;
