import { useState, useEffect } from 'react';

export function useFetch(endpoint) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(endpoint);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { isLoading, error, data };
}
