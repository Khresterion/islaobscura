import axios from 'axios';

const obscuraAxios = axios.create({
  baseURL: `http://localhost:8080/`
})

obscuraAxios.interceptors.request.use((request) => {
  return request
})

export default obscuraAxios