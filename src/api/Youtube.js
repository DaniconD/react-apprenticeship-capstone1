import React, { useState, useEffect } from 'react';

import './Youtube.styles.css';
import Single from '../components/List/Single';

// import axios, { Axios } from "axios";
// const KEY = 'AIzaSyCEseedJLKU_b4L_xqUVrfmeCYOR3LbCWY';

// export default axios.create({
//     baseURL: 'https://www.googleaplis.com/youtube/v3/',
//     params: {
//         part: 'snippet',
//         maxResults: 5,
//         key: KEY
//     }
// })

function Youtube() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    // https://jsonplaceholder.typicode.com/users
    // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=the%20weeknd&key=AIzaSyCEseedJLKU_b4L_xqUVrfmeCYOR3LbCWY
    fetch(
      'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=wizeline&key=AIzaSyCEseedJLKU_b4L_xqUVrfmeCYOR3LbCWY'
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.items);
          //console.log(result.items);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="row">
        <ul>
          {items.map((item, index) => (
            <Single key={index} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Youtube;
