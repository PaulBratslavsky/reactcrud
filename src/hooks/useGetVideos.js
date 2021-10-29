import { useState, useEffect, useCallback } from 'react';
import { getData } from '../api';

export default function useGetVideos(url) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getVideos =  useCallback(async () => { 
    try {
      setLoading(true);
      const data = await getData(url);
      setVideos(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
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