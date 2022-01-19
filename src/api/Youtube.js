import React, { useState, useEffect } from 'react';

import './Youtube.styles.css';
import Single from '../components/List/Single';
import { useSearch } from '../context/SearchContext';

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
  // Gloval context
  const { search } = useSearch();

  // API call
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()

  useEffect(() => {
    // https://jsonplaceholder.typicode.com/users
    // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=the%20weeknd&key=AIzaSyCEseedJLKU_b4L_xqUVrfmeCYOR3LbCWY
    console.log(search);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=AIzaSyDWxNt_pdmdnVerDG3wPSPPBaZcbDEXfsc`
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
  }, [search]);

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
