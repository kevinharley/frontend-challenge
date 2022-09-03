import { useState, useEffect } from 'react';
import { useRequests } from './useRequests';

export const useGetColors = () => {
  const { get } = useRequests();
  const [colors, setColors] = useState(null);

  const getColors = async () => {
    const response = await get('/colors');

    setColors(response);
  };

  useEffect(() => {
    getColors();
  }, []);

  return { colors };
};
