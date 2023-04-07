import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL =
  'https://frontend-test-assignment-api.abz.agency/api/v1';

const getToken = async () => {
  try {
    const response = await axios.get('/token');
    return response.data.token;
  } catch (error) {
    toast.error(`Something went wrong in getting token: ${error.message}`);
    return error;
  }
};

export const getUsers = async (query = 'page=1&count=6') => {
  try {
    const response = await axios.get(`/users?${query}`);
    return response.data;
  } catch (error) {
    toast.error(`Something went wrong: ${error.message}`);
  }
};

export const getPositions = async () => {
  try {
    const response = await axios.get('/positions');
    return response.data;
  } catch (error) {
    toast.error(`Something went wrong: ${error.message}`);
  }
};

export const addUser = async credentials => {
  try {
    const token = await getToken();
    const response = await axios.post(`/users`, credentials, {
      headers: { 'Content-Type': 'multipart/form-data', token },
    });
    return response.data;
  } catch (error) {
    toast.error(`Something went wrong: ${error.message}`);
  }
};
