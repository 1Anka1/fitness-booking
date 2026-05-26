import { useEffect, useState } from 'react';

export const useDataAPI = (callback, value?: string) => {
  const [results, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!value) return;

    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await callback(value);
        if (data?.data) {
          setData(data.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [callback, value]);
  return { results, isLoading };
};
