import axios from 'axios';

export const useRequests = () => {
  const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
  });

  const get = async (url) => {
    try {
      const response = await instance.get(url);
      const data = await response.data;

      return data;
    } catch (e) {
      console.log(`Error : ${e}`);
      return false;
    }
  };

  const post = async (url, requestData) => {
    try {
      const response = await instance.post(url, requestData);

      return response;
    } catch (e) {
      console.log(`Error: ${e}`);
      return false;
    }
  };

  return { get, post };
};
