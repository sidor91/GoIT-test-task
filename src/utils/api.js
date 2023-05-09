import axios from 'axios';

axios.defaults.baseURL = 'https://645964bb8badff578e0c51c2.mockapi.io/';

export default async function getUsersList () {
  try {
    const response = await axios.get('users/');
    return response.data;
  } catch (error) {
    return error.message;
  }
};
