import { useState, useEffect, useCallback } from 'react';

export default function useGetVideos(url) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getVideos =  useCallback(async () => { 
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setVideos(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
    const response = await fetch(url);
    const data = await response.json();
    setVideos(data);
  }, [url]);

  useEffect(() => {
    getVideos(url);
  }, [getVideos, url]);

  return {
    videos,
    setVideos,
    loading,
    error,
  };
}