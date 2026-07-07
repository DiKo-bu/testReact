import {useState} from 'react';

export const useFetchData = (url: string) => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setData(null);
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      const text = await response.text();
      let prettyData = text;
      try {
        const json = JSON.parse(text);
        prettyData = JSON.stringify(json, null, 2);
      } catch {
        // если не JSON, оставляем как есть
      }
      setData(prettyData);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {data, loading, error, fetchData};
};