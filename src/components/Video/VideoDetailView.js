import React from 'react';
import { useParams } from 'react-router';
import './VideoDetailView.styles.css';
import VideoSingle from './VideoSingle';
import useFetchSingle from '../../api/useFetchSingle';
import useFetchList from '../../api/useFetchList';
function VideoDetails() {
  // const { data, isLoaded, error } = useFetchList('Wizeline');
  const { id } = useParams();
  const [dataSingle, isLoadedSingle, errorSingle] = useFetchSingle(id);

  const VideoL = () => {
    const [dataList, isLoadedList, errorList] = useFetchList(
      String(dataSingle[0].snippet.title)
    );
    if (errorList) {
      return <div>Error: {errorList.message}</div>;
    } else if (!isLoadedList) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {dataList.map((item, index) => (
            <VideoSingle key={index} item={item} />
          ))}
        </ul>
      );
    }
  };

  if (errorSingle) {
    return <div>Error: {errorSingle.message}</div>;
  } else if (!isLoadedSingle || dataSingle.length === 0) {
    return <div>Loading...</div>;
  } else {
    // console.log(dataSingle);
    return (
      <div className="video-container">
        <div className="video-info">
          <iframe
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${id}`}
            title="video"
          ></iframe>
          <h3>{dataSingle[0].snippet.title}</h3>
          <p>{dataSingle[0].snippet.description}</p>
        </div>
        <div>
          <ul>
            <VideoL />
          </ul>
        </div>
      </div>
    );
  }
}

export default VideoDetails;
