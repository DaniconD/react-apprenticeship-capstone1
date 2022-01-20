import React from 'react';
import { useParams } from 'react-router';
import './VideoDetailView.styles.css';
import VideoSingle from './VideoSingle';
// import useFetchSingle from '../../api/useFetchSingle';

function VideoDetails() {
  // console.log(useParams());
  const { id } = useParams();
  // const { data, loading, error } = useFetchSingle(id);
  console.log(id);

  return (
    <div className="video-container">
      <div className="video-info">
        <iframe
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${id}`}
          title="video"
        ></iframe>
        <h3>Titulo</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          placerat porttitor arcu mollis varius. Duis at orci augue. Suspendisse
          quis varius ligula.
        </p>
      </div>
      <div className="video-list">
        <ul>
          {/* {data.map((item, index) => (
            <Single key={index} item={item} />
          ))} */}
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
