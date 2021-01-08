import { useState, useEffect } from 'react';

export function useFetch(endpoint) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [endpoint]);

  return data;
}
