import { useEffect, useState } from 'react';

function useFetchList(title) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${title}&key=AIzaSyCYveR8pD5F6EmbgRnLUUaSmL67RrO3klo`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result.items);
          // console.log(result.items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [title]);

  return [data, isLoaded, error];
}

export default useFetchList;
