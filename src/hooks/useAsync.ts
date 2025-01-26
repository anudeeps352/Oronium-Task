import { useState, useEffect } from 'react';

function useAsync<T>(asyncFunction: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await asyncFunction();
        setData(result);
      } catch (error) {
        setError(
          error instanceof Error ? error : new Error('an error occured')
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
}

export default useAsync;
