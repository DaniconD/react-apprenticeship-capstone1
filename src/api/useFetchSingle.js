import { useEffect, useState } from 'react';

function useFetchSingle(id) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dataSingle, setData] = useState([]);

  useEffect(() => {
    // setData(null);
    // setLoading(true);
    // console.log(id);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyCYveR8pD5F6EmbgRnLUUaSmL67RrO3klo`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result.items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [id]);
  return [dataSingle, isLoaded, error];
}

export default useFetchSingle;

//m5UcZ9thgPI
