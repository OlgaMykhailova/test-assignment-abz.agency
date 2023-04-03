import axios from 'axios';
// import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const getToken = async () => {
  try {
    const response = await axios.get('/token');
    setToken(response.data.token);
  } catch (error) {
    // toast.error(`Something went wrong in getting token: ${error.message}`);
    return error;
  }
};

export const getUsers = async (query='page=1&count=6') => {
  try {
    await getToken();
    const response = await axios.get(`/users?${query}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    // toast.error(`Something went wrong: ${error.message}`);
  }
};

export const getPositions = async () => {
  try {
    await getToken();
    const response = await axios.get('/positions');
    console.log(response.data.positions);
    return response.data.positions;
  } catch (error) {
    // toast.error(`Something went wrong: ${error.message}`);
  }
};

export const addUser = async (credentials) => {
    try {
      await getToken();
      const response = await axios.post(`/users`, credentials);
      return response.data;
    } catch (error) {
      // toast.error(`Something went wrong: ${error.message}`);
    }
  };
