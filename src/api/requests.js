import axios from 'axios'

export const useRequests = () => {
  const instance = axios.create({
    baseURL: 'http://localhost:3001/api',
    timeout: 3000,
    headers: {"Content-Type" : "application/json"}
  })

  const get = async (url, options) => {
    try {
      const response = await instance.get(url);
      const data = await response.data;

      return data;


    } catch(e) {
      console.log(`Error : ${e}`)
      return false
    }
  }

  const post = async (url, requestData) => {
    try {
      const response = await instance.post(url, requestData);
      const data = await response.data

      return data
    } catch(e) {
      console.log(`Error: ${e}`)
      return false
    }
  }

  const getColors = async () => {
    const response = await get('/colors')

    return response
  }
  

  return { get, getColors, post }
}
