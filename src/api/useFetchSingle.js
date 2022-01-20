import { useEffect, useState } from 'react';
function useFetchSingle(id) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);

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
          setData(result.items);
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
  }, [id]);
  return [data];
}

export default useFetchSingle;

//m5UcZ9thgPI
