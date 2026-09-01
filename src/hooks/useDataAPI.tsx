import { useEffect, useState } from 'react';

type ApiResponse<T> = { data: T } | T | null | undefined;

const hasDataProperty = <T,>(value: ApiResponse<T>): value is { data: T } => {
  return Boolean(value && typeof value === 'object' && 'data' in value);
};

export const useDataAPI = <T,>(
  callback: () => Promise<ApiResponse<T>>,
  value?: string | null | false,
  initialValue = [] as T,
) => {
  const [results, setData] = useState<T>(initialValue);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!value) return;

    async function fetchData() {
      try {
        setIsLoading(true);

        const response = await callback();

        if (!response) return;

        const data = hasDataProperty(response) ? response.data : response;

        setData(data);
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
